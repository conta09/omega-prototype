// lib/session.js
import { serialize, parse } from 'cookie';
import { v4 as uuidv4 } from 'uuid';
import { connectMongoDB } from './mongodb';
import Session from '@/models/session';

const SESSION_NAME = 'sessionId';
const MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function createSession(res, user) {
    const sessionId = uuidv4();
    await connectMongoDB();

    await Session.create({
        sessionId,
        userId: user._id,
        expires: new Date(Date.now() + MAX_AGE * 1000)
    });

    const cookie = serialize(SESSION_NAME, sessionId, {
        httpOnly: true,
        maxAge: MAX_AGE,
        path: '/',
        sameSite: 'lax',
    });

    res.setHeader('Set-Cookie', cookie);
}

export async function getSession(req) {
    await connectMongoDB();

    const cookies = parse(req.headers.get('cookie') || '');
    const sessionId = cookies[SESSION_NAME];

    if (!sessionId) {
        return null;
    }

    const session = await Session.findOne({ sessionId });

    if (!session) {
        return null;
    }

    if (new Date() > new Date(session.expires)) {
        await Session.deleteOne({ sessionId });
        return null;
    }

    return session;
}

export async function destroySession(res, req) {
    const cookies = parse(req.headers.get('cookie') || '');
    const sessionId = cookies[SESSION_NAME];

    if (sessionId) {
        await connectMongoDB();
        await Session.deleteOne({ sessionId });

        const cookie = serialize(SESSION_NAME, '', {
            httpOnly: true,
            maxAge: -1,
            path: '/',
            sameSite: 'lax',
        });

        res.setHeader('Set-Cookie', cookie);
    }
}

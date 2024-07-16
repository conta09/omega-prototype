import { NextResponse } from 'next/server';

export function middleware(req) {
    // Check if the user is authenticated by checking the cookie (or any other method you use)
    const isAuthenticated = req.cookies.get('user-authenticated'); // Adjust based on your auth mechanism

    const url = req.nextUrl.clone();

    // Protect the dashboard route
    if (url.pathname === '/dashboard') {
        if (!isAuthenticated) {
            // User is not authenticated, redirect to login page
            url.pathname = '/';
            return NextResponse.redirect(url);
        }
    }

    // If the user is already authenticated and tries to access login or register page, redirect to dashboard
    if ((url.pathname === '/login' || url.pathname === '/register') && isAuthenticated) {
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
    }

    // Allow request to proceed if it doesn't match the above conditions
    return NextResponse.next();
}

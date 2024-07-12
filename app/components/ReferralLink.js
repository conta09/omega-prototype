"use client"
// app/components/ReferralLink.js
import React, { useEffect, useState } from 'react';
import { generateReferralLink } from '../utils/referral'; // Adjust the path as necessary
import { useUser } from '../context/UserContext'; // Adjust the path as necessary

const ReferralLink = () => {
  const [referralLink, setReferralLink] = useState('');
  const { user } = useUser(); // Assuming you have a user context

  useEffect(() => {
    if (user) {
      const link = generateReferralLink(user._id);
      setReferralLink(link);
    }
  }, [user]);

  return (
    <div>
      {referralLink ? (
        <p>Your referral link: <a href={referralLink}>{referralLink}</a></p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ReferralLink;

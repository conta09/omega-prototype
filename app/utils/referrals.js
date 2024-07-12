export const generateReferralLink = (userId) => {
    const baseUrl = "https:http://localhost:3000/referral";
    const referralId = Buffer.from(userId).toString('base64');
    return `${baseUrl}?ref=${referralId}`;
  };
  
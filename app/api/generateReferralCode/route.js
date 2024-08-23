// Function to generate a referral code from an email
const generateReferralCode = (email) => {
    return btoa(email).substring(0, 10); // Simple Base64 encoding, first 10 characters
  };
  
  export async function POST(req, res) {
    try {
      // Parse the request body to get the email
      const { email } = await req.json();
  
      if (!email) {
        return new Response(JSON.stringify({ message: 'Email is required' }), { status: 400 });
      }
  
      // Generate the referral code using the provided email
      const referralCode = generateReferralCode(email);
  
      
      // Send the generated referral code back in the response
      return new Response(JSON.stringify({ referralCode }), { status: 200 });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ message: 'Internal server error' }), { status: 500 });
    }
  }
  
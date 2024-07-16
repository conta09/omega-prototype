import React from 'react'

const ReferralCode = () => {
    const address = 'TGGLwewdnefsndowedqHucYKWUGeqaPozu6oo';

  return (
    <div>
        <div>
            Get your Referral Code
        </div>
      <input
          type="text"
          id="address"
          value={address}
          readOnly
          className="w-fit p-3 my-2 bg-gray-800 rounded border border-gray-700 text-gray-200 focus:outline-none"
          onClick={(e) => e.target.select()} // Select the text on click for easy copying
        />
    </div>
  )
}

export default ReferralCode

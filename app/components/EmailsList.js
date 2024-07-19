"use client";
import { useEffect, useState } from 'react';

const EmailsList = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch('/api/emails');
      const data = await response.json();
      setEmails(data.emails);
    };

    fetchEmails();
  }, []);

  return (
    <div>
      <h1 className='text-2xl font-medium mb-4 text-teal-400'>Users</h1>
      <div className="space-y-4">
        {emails.map((email, index) => (
          <div key={index} className="flex items-center justify-between bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
            <div className="flex items-center">
              <div className="bg-black text-white w-10 h-10 flex items-center justify-center rounded-full mr-4">
                {index + 1}
              </div>
              <div>
                <p className="text-gray-400">{email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailsList;

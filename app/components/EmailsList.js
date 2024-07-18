"use client"
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
      <h1 className='text-2xl font-medium mb-4 text-teal-400'>User Emails</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full  border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 border-gray-200">Index</th>
              <th className="px-4 py-2 border-b-2 border-gray-200">Email</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((email, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border-b border-gray-200">{index + 1}</td>
                <td className="px-4 py-2 border-b border-gray-200">{email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmailsList;

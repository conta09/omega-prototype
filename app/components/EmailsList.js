"use client";
import { useEffect, useState } from 'react';

const EmailsList = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmails = async () => {
      const response = await fetch('/api/emails');
      const data = await response.json();
      setEmails(data.emails);
    };

    fetchEmails();
  }, []);

  const deleteEmail = async (email) => {
    setLoading(true);
    try {
      const response = await fetch('/api/emails', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmails((prevEmails) => prevEmails.filter((e) => e !== email));
      } else {
        console.error('Failed to delete email');
      }
    } catch (error) {
      console.error('Error deleting email:', error);
    } finally {
      setLoading(false);
    }
  };

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
            <button
              onClick={() => deleteEmail(email)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              disabled={loading}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailsList;

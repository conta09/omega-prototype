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
      <h1>User Emails</h1>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmailsList;

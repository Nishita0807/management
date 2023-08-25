// src/components/ContactForm.tsx
import React, { useState } from 'react';

interface ContactFormProps {
  onAddContact: (name: string, email: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the onAddContact function with the entered data
    onAddContact(name, email);

    // Clear the input fields after submission
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

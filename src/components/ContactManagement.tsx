import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { Contact } from '../interfaces'; // Adjust the path based on your project structure
import './ContactManagement.css';

const ContactManagement: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAddContact = (name: string, email: string) => {
    const newContact: Contact = {
      id: contacts.length + 1,
      name,
      email,
    };
    setContacts([...contacts, newContact]);
  };

  const handleEditContact = (id: number, updatedContact: Partial<Contact>) => {
    // Find the index of the contact to be edited
    const contactIndex = contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
      // Create a copy of the contact array with the updated contact data
      const updatedContacts = [...contacts];
      updatedContacts[contactIndex] = {
        ...updatedContacts[contactIndex],
        ...updatedContact,
      };
      setContacts(updatedContacts);
    }
  };

  const handleDeleteContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div className="contact-management">
      <h1>Contact Management</h1>
      <ContactForm onAddContact={handleAddContact} />
      <ContactList
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
        onEditContact={handleEditContact}
      />
    </div>
  );
};

export default ContactManagement;

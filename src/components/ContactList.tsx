import React, { useState } from 'react';
import './ContactList.css';
interface Contact {
  id: number;
  name: string;
  email: string;
}

interface ContactListProps {
  contacts: Contact[];
  onDeleteContact: (id: number) => void;
  onEditContact: (id: number, updatedContact: Partial<Contact>) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDeleteContact, onEditContact }) => {
  const [editingContactId, setEditingContactId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');

  const handleEditStart = (contact: Contact) => {
    setEditingContactId(contact.id);
    setEditedName(contact.name);
    setEditedEmail(contact.email);
  };

  const handleEditCancel = () => {
    setEditingContactId(null);
    setEditedName('');
    setEditedEmail('');
  };

  const handleEditSave = (contactId: number) => {
    if (editedName.trim() !== '' && editedEmail.trim() !== '') {
      onEditContact(contactId, { name: editedName, email: editedEmail });
      setEditingContactId(null);
      setEditedName('');
      setEditedEmail('');
    }
  };

  return (
    <div className="contact-list">
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            {editingContactId === contact.id ? (
              <>
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  placeholder="Email"
                />
                <button onClick={() => handleEditSave(contact.id)}>Save</button>
                <button onClick={handleEditCancel}>Cancel</button>
              </>
            ) : (
              <>
                {contact.name} - {contact.email}
                <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                <button onClick={() => handleEditStart(contact)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

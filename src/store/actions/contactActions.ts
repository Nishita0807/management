import { Contact } from "../../interfaces";

// src/store/actions/contactActions.ts
export const addContact = (contact: Contact) => ({
    type: 'ADD_CONTACT',
    payload: contact,
  });
  
  export const editContact = (id: number, updatedContact: Partial<Contact>) => ({
    type: 'EDIT_CONTACT',
    payload: { id, updatedContact },
  });
  
  export const deleteContact = (id: number) => ({
    type: 'DELETE_CONTACT',
    payload: id,
  });
  
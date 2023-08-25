import { Contact } from 'D:/contact-management-app/src/interfaces'; // Adjust the path based on your project structure

const initialState: Contact[] = [];

export const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [...state, action.payload];
    case 'EDIT_CONTACT':
      return state.map((contact: Contact) =>
        contact.id === action.payload.id ? { ...contact, ...action.payload.updatedContact } : contact
      );
    case 'DELETE_CONTACT':
      return state.filter((contact: Contact) => contact.id !== action.payload);
    default:
      return state;
  }
};

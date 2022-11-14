// import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.filter.filter;

// export const SelectVisibleContacts = () => {
//   const contacts = useSelector(selectContacts);
//   const list = contacts[0];
//   const filter = useSelector(selectFilter);
//   if (filter) {
//     const normalizedFilter = filter.toLowerCase();
//     return list.filter(item =>
//       item.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
//   return list;
// };

export const SelectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, statusFilter) => {
    if (statusFilter) {
      const normalizedFilter = statusFilter.toLowerCase();
      return contacts[0].filter(item =>
        item.name.toLowerCase().includes(normalizedFilter)
      );
    }
    return contacts[0];
  }
);

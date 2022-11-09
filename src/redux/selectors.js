export const selectContacts = state => state.contacts.contacts.items;
export const selectIsLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;
export const selectFilter = state => state.contacts.filter;

export const selectVisibleContacts = state => {
  // Використовуємо інші селектори
  // const contacts = selectContacts(state);
  // const Filter = selectFilter(state);
  //   switch (Filter) {
  //     case statusFilters.active:
  //       return tasks.filter(task => !task.completed);
  //     case statusFilters.completed:
  //       return tasks.filter(task => task.completed);
  //     default:
  //       return tasks;
  //   }
};

// const getVisibleContacts = () => {
//   const normalizedFilter = filterData.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
// const visibleContacts = getVisibleContacts();

import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from './contactsSlice';
// import { contactsReducer, persistedContactsReducer } from './contactsSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

// reducer: {
//     contactsReducer: persistedContactsReducer,
//   },

// ---------------------------------------------------------------------------------
// export const store = configureStore({
//   reducer: {
//     contacts: persistedContactsReducer,
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);

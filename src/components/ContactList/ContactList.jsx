import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts[0]);
  const list = contacts[0];
  // const filterData = useSelector(selectFilter);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filterData.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };
  // const visibleContacts = getVisibleContacts();

  return (
    <>
      {list && list.length !== 0 && (
        <ListContacts>
          {list.map(({ id, name, number }) => (
            <ContactPerson key={id} id={id} name={name} number={number} />
          ))}
        </ListContacts>
      )}
    </>
  );
};

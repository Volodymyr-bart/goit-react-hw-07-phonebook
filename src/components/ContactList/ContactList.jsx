import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';

import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterData = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filterData.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <>
      {visibleContacts.length !== 0 && (
        <ListContacts>
          {visibleContacts.map(({ id, name, number }) => (
            <ContactPerson key={id} id={id} name={name} number={number} />
          ))}
        </ListContacts>
      )}
    </>
  );
};

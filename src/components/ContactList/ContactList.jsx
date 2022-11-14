// import { useSelector } from 'react-redux';
import { SelectVisibleContacts } from 'redux/selectors';

import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { ListContacts } from './ContactList.styled';

export const ContactList = () => {
  const list = SelectVisibleContacts();

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

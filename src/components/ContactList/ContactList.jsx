import { SelectVisibleContacts } from 'redux/selectors';

import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { ListContacts } from './ContactList.styled';
// import { useEffect } from 'react';
// import { getFilter, getItems } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const list = useSelector(SelectVisibleContacts);

  // useEffect((){},[])

  return (
    <>
      {list && (
        <ListContacts>
          {list.map(({ id, name, number }) => (
            <ContactPerson key={id} id={id} name={name} number={number} />
          ))}
        </ListContacts>
      )}
    </>
  );
};

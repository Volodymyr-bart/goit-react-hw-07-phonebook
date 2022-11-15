import { SelectVisibleContacts } from 'redux/selectors';

import { ContactPerson } from 'components/ContactPerson/ContactPerson';
import { ListContacts } from './ContactList.styled';
// import { useEffect } from 'react';

import { useSelector } from 'react-redux';

export const ContactList = () => {
  const list = useSelector(SelectVisibleContacts);
  // console.log('list', list);

  // useEffect(()=>{},[])

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

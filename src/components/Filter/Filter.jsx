import { useDispatch, useSelector } from 'react-redux';
// import { filterContacts } from 'redux/contactsSlice';

import { FilterBlock } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setFilterValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterBlock>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(setFilterValue(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FilterBlock>
  );
};

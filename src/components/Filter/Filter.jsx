import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';

// import PropTypes from 'prop-types';
import { FilterBlock } from './Filter.styled';
import { getFilter } from 'redux/selectors';

// {
//   onChange, value;
// }

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <FilterBlock>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      />
    </FilterBlock>
  );
};

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };

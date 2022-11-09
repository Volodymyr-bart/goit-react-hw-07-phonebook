import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
//
import PropTypes from 'prop-types';
import { DeleteButton, PersonStyled } from './ContactPerson.styled';

// {
//   name, number, id, deleteContact;
// }

export const ContactPerson = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <PersonStyled>
      <span>
        {name}: {number}
      </span>
      <DeleteButton
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </DeleteButton>
    </PersonStyled>
  );
};

ContactPerson.propTypes = {
  // deleteContact: PropTypes.func.isRequired,

  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

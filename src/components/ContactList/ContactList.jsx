import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteContact } from 'redux/contactsSlice';
import { BtnForm } from 'components/ContactForm/ContactForm.styled';
import { ContactItem } from './ContactList.styled';

export const ContactList = ({ visibleContacts }) => {

  const dispatch = useDispatch();

  const handleDelete = (id) => dispatch(deleteContact(id));
  
    return <ul>
          {visibleContacts.map(({id, name, number}) => {
            return <ContactItem key={id}>
              <span>
                {name}:
              </span>
              <span>
                {number}
              </span>
              <BtnForm onClick={() => handleDelete(id)}>Удалить</BtnForm>
            </ContactItem>
          })}
      </ul>
}

ContactList.propTypes = {
    visibleContacts: PropTypes.array.isRequired,
}
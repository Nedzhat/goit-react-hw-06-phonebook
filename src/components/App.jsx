import { useSelector } from 'react-redux';

import { Box } from './Box';
import { GlobalStyle } from 'components/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { MainTitle, SecondTitle } from './App.styled';
import { getContacts, getFilter } from 'redux/selectors';
  
export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizedFilter = filter.query.toLowerCase();
  const visibleContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter)
  })

    return <Box margin="50px auto 50px" padding="30px" width="500px" height="100%" border="normal" boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)" borderRadius="15px" backgroundColor="bgTable">
      <GlobalStyle/>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm/>
      <SecondTitle>Contacts</SecondTitle>
      <Filter text="Find contacts by name" />
      {contacts.length === 0 ? <div style={{ display: 'flex', justifyContent: 'center', padding: '20px'}}><h2>Add your first friend!</h2></div>
        : <ContactList visibleContacts={visibleContacts} />}
    </Box>

};
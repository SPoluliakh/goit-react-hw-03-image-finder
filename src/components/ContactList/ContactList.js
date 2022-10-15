import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemText,
  ListItemBtn,
} from './ContactList.styled';

const ContactList = ({ renderItems, onDelitBtn, contactsQnt }) => {
  return (
    <>
      <h2>Contacts : {contactsQnt}</h2>
      <List>
        {renderItems.map(({ name, number, id }) => (
          <ListItem key={id}>
            <ListItemText>
              {name}: {number}
            </ListItemText>
            <ListItemBtn type="button" onClick={() => onDelitBtn(id)}>
              Delet
            </ListItemBtn>
          </ListItem>
        ))}
      </List>
    </>
  );
};

ContactList.propTypes = {
  renderItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelitBtn: PropTypes.func,
};

export default ContactList;

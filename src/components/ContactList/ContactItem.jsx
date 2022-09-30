import PropTypes from 'prop-types';
import { Text, BtnDelete } from './Contact.styled';

export const ContactItem = ({ name, number, onDeleteContact }) => {
    return (
        <li>
            <Text>{name }</Text>
            <p>{number}</p>
            <BtnDelete type="button" onClick={onDeleteContact}>Delete contact</BtnDelete>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}
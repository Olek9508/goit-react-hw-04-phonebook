import PropTypes from 'prop-types';
import { Form, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
      return (
        <Form >
          <Label>Find contacts by name
          <Input
          type="text"
          value={value}
          onChange={onChange} />
          </Label>
        </Form>
        )
}
    
Filter.propTypes = {
  value:PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired
}

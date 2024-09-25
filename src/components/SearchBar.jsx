import { Form } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

/**
 * @typedef {import('react').ComponentProps<'form'>} SearchBarProps
 * @property {string} [value]
 * @property {function} [onChange]
 * @property {string} [name]
 * @property {string} [defaultValue]
 */

/**
 * @param {SearchBarProps} props 
 */
const SearchBar = ({ value, onChange, name, defaultValue, ...props }) => {
  return (
    <Form navigate {...props}>
      <InputGroup className="w-100">
        <input
          type="text"
          className="form-control"
          placeholder="Joke Search"
          aria-label="Joke Search"
          aria-describedby="button-search"
          value={value}
          onChange={onChange}
          name={name}
          required
          defaultValue={defaultValue}
        />
        <Button
          variant="outline-secondary"
          id="button-search"
          type="submit"
        >
          Search
        </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBar

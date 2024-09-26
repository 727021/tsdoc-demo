import { Form, type FormProps } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import type { ComponentProps } from 'react'

type SearchBarProps = FormProps & {
  value?: string
  onChange?: ComponentProps<'input'>['onChange']
  name?: string
  defaultValue?: string
}

const SearchBar = ({ value, onChange, name, defaultValue, ...props }: SearchBarProps) => {
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

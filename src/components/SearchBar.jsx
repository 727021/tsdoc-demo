import { Button, InputGroup } from 'react-bootstrap'
import { Form } from 'react-router-dom'

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

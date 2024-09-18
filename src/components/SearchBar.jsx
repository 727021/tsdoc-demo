import { Button, InputGroup } from "react-bootstrap";
import { Form } from "react-router-dom";

const SearchBar = ({ value, onChange, name, ...props }) => {
    return (
        <Form navigate {...props} className={`w-50 ${props.className ?? ''}`}>
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
                />
                <Button
                    variant="outline-secondary"
                    id="button-search"
                >
                    Search
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBar;

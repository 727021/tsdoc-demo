import { useEffect, useState } from 'react'
import { Button, Stack } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import { ArrowClockwise } from 'react-bootstrap-icons'
import { getJoke } from '../utils/api'
import SearchBar from '../components/SearchBar'

const Index = () => {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    loadJoke()
  }, [])

  const loadJoke = async () => {
    const newJoke = await getJoke()
    setJoke(newJoke)
  }

  return (
    <Stack gap={5} className="align-items-center">
      <SearchBar
        method="GET"
        action="/search"
        name="query"
      />
      <Card className="w-50">
        <Card.Header className="d-flex justify-content-between align-items-center">
          Random Joke
          <Button variant="secondary" title="Refresh Joke" size="sm" onClick={loadJoke}>
            <ArrowClockwise size="16" />
          </Button>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-truncate">
            {joke.joke}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <a href={`/${joke.id}`}>
            See more
          </a>
        </Card.Footer>
      </Card>
    </Stack>
  )
}

export default Index

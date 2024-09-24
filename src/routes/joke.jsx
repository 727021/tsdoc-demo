import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Stack from 'react-bootstrap/Stack'
import Spinner from 'react-bootstrap/Spinner'
import { TwitterX, Image } from 'react-bootstrap-icons'
import { getJokeById } from '../utils/api'

const Joke = () => {
  const params = useParams()

  const [joke, setJoke] = useState(null)

  useEffect(() => {
    (async () => {
      const newJoke = await getJokeById(params.jokeId)
      setJoke(newJoke)
    })()
  }, [params.jokeId])

  return (
    <Stack gap={2} className="align-items-center w-50 mx-auto">
      <Link to="/" className="align-self-start">
        &larr; Home
      </Link>
      {joke ? (
        <Card>
          <Card.Header>Joke {params.jokeId}</Card.Header>
          <Card.Body>
            <Card.Text dangerouslySetInnerHTML={{ __html: joke.joke.replace(/\r?\n/g, '<br />') }} />
          </Card.Body>
          <Card.Footer className="d-flex justify-content-between align-items-center">
            <a href={`https://icanhazdadjoke.com/j/${joke.id}`} target="_blank">Source</a>
            <ButtonGroup>
              <Button
                href={`https://icanhazdadjoke.com/j/${joke.id}.png`}
                target="_blank"
                variant="outline-primary"
                size="sm"
                className="d-flex align-items-center gap-1"
              >
                <Image size={16} />
                Image
              </Button>
              <Button
                href={`https://twitter.com/intent/tweet?url=https://icanhazdadjoke.com%2Fj%2F${joke.id}%2Famp&text=Check+out+this+%23dadjoke&via=icanhazdadjoke`}
                target="_blank"
                variant="outline-primary"
                size="sm"
                className="d-flex align-items-center gap-1"
              >
                <TwitterX size={16} />
                Share
              </Button>
            </ButtonGroup>
          </Card.Footer>
        </Card>
      ) : (
        <Spinner animation="border" role="status" variant="secondary" />
      )}
    </Stack>
  )
}

export default Joke

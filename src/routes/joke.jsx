import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { useEffect, useState } from 'react'
import { getJokeById } from '../utils/api'

const Joke = () => {
  const params = useParams()

  const  [joke, setJoke] = useState(null)

  useEffect(() => {
    ;(async () => {
      const newJoke = await getJokeById(params.jokeId)
      setJoke(newJoke)
    })()
  }, [params.jokeId])

  return (
    <Stack gap={2} className="align-items-center w-50 mx-auto">
      {/* Full joke text */}
      <Link to="/" className="align-self-start">
        &larr; Home
      </Link>
      <Card>
        <Card.Header>Joke {params.jokeId}</Card.Header>
        <Card.Body>
          <Card.Text>{joke?.joke}</Card.Text>
        </Card.Body>
        <Card.Footer>
          
        </Card.Footer>
      </Card>
      {/* Sharing links */}
      {/* Image download link */}
    </Stack>
  )
}

export default Joke

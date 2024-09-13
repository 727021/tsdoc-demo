import { useParams } from "react-router-dom"

const Joke = () => {
  const params = useParams()

  return (
    <div>Joke: {params.jokeId}</div>
  )
}

export default Joke

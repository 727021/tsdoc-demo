import { useParams } from "react-router-dom"

const Joke = () => {
  const params = useParams()

  return (
    <div>
      Joke: {params.jokeId}
      {/* Joke image */}
      {/* Joke text */}
      {/* Sharing links */}
    </div>
  )
}

export default Joke

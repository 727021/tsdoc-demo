import { useParams } from "react-router-dom"

const Joke = () => {
  const params = useParams()

  return (
    <div>
      Joke: {params.jokeId}
      {/* Full joke text */}
      {/* Sharing links */}
      {/* Image download link */}
    </div>
  )
}

export default Joke

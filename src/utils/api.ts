const baseUrl = 'https://icanhazdadjoke.com/'
// https://icanhazdadjoke.com/api#custom-user-agent
const userAgent = 'TSDoc Demo (https://github.com/727021/tsdoc-demo)'

const JOKES_PER_PAGE = 10

export type Joke = {
  id: string
  joke: string
}

export type JokeResponse = Joke & {
  status: number
}

export type JokeSearchResponse = {
 current_page: number
 limit: number
 next_page: number
 previous_page: number
 search_term: string
 status: number
 total_jokes: number
 total_pages: number
 results: Joke[]
}

export const getJoke = async (options: RequestInit = {}): Promise<JokeResponse> => {
  const response = await fetch(baseUrl, {
    ...options,
    headers: {
      Accept: 'application/json',
      'User-Agent': userAgent,
      ...options.headers
    }
  })
  const data = await response.json()
  return data
}

export const getJokeById = async (jokeId: string, options: RequestInit = {}): Promise<JokeResponse> => {
  const response = await fetch(`${baseUrl}j/${jokeId}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      'User-Agent': userAgent,
      ...options.headers
    }
  })
  const data = await response.json()
  return data
}

export const getJokeSearch = async (searchTerm: string, page = 1, options: RequestInit = {}): Promise<JokeSearchResponse> => {
  const response = await fetch(`${baseUrl}search?term=${searchTerm}&page=${page}&limit=${JOKES_PER_PAGE}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      'User-Agent': userAgent,
      ...options.headers
    }
  })
  const data = await response.json()
  return data
}

const baseUrl = 'https://icanhazdadjoke.com/'

export const getJoke = async (options = {}) => {
    const response = await fetch(baseUrl, {
        ...options,
        headers: {
            Accept: 'application/json',
            ...options.headers
        }
    })
    const data = await response.json()
    return data
}

export const getJokeById = async (jokeId, options = {}) => {
    const response = await fetch(`${baseUrl}j/${jokeId}`, {
        ...options,
        headers: {
            Accept: 'application/json',
            ...options.headers
        }
    })
    const data = await response.json()
    return data
}

export const getJokeSearch = async (searchTerm, page = 1, options = {}) => {
    const response = await fetch(`${baseUrl}search?term=${searchTerm}&page=${page}`, {
        ...options,
        headers: {
            Accept: 'application/json',
            ...options.headers
        }
    })
    const data = await response.json()
    return data
}

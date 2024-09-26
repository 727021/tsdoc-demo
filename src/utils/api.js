const baseUrl = 'https://icanhazdadjoke.com/'
// https://icanhazdadjoke.com/api#custom-user-agent
const userAgent = 'TSDoc Demo (https://github.com/727021/tsdoc-demo)'

const JOKES_PER_PAGE = 10

/** @import { JokeResponse, JokeSearchResponse } from '../../types/api' */

/**
 * Fetch a random joke
 * @param {RequestInit} [options]
 * @returns {Promise<JokeResponse>}
 */
export const getJoke = async (options = {}) => {
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

/**
 * Fetch a joke by id
 * @param {string} jokeId
 * @param {RequestInit} [options]
 * @returns {Promise<JokeResponse>}
 */
export const getJokeById = async (jokeId, options = {}) => {
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

/**
 * Fetch jokes by search term
 * @param {string} searchTerm
 * @param {number} [page]
 * @param {RequestInit} [options]
 * @returns {Promise<JokeSearchResponse>}
 */
export const getJokeSearch = async (searchTerm, page = 1, options = {}) => {
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

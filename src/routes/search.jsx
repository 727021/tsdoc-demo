import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Stack from 'react-bootstrap/Stack'
import Pagination from 'react-bootstrap/Pagination'
import ListGroup from 'react-bootstrap/ListGroup'
import SearchBar from '../components/SearchBar'
import { getJokeSearch } from '../utils/api'

/**
 * @typedef {object} PaginationItemProps
 * @property {string} query
 * @property {number} page
 * @property {boolean} active
 */

/**
 * @param {PaginationItemProps} props
 */
const PaginationItem = ({ query, page, active }) => {
  if (active) {
    return (
      <li className="page-item active">
        <span className="page-link">
          {page}
        </span>
      </li>
    )
  }

  return (
    <li className="page-item">
      <Link to={`/search?query=${query}&page=${page}`} className="page-link">
        {page}
      </Link>
    </li>
  )
}

const Search = () => {
  const [params] = useSearchParams()

  const query = params.get('query')
  const page = parseInt(params.get('page') || '1', 10)

  /** @type {ReturnType<typeof useState<null | import('../utils/api').JokeSearchResponse>>} */
  const [searchResult, setSearchResult] = useState(null)

  useEffect(() => {
    (async () => {
      const newResults = await getJokeSearch(query, page)
      setSearchResult(newResults)
    })()
  }, [query, page])

  return (
    <Stack gap={2} className="align-items-center w-50 mx-auto">
      <SearchBar
        method="GET"
        action="/search"
        name="query"
        defaultValue={query}
        className="w-100"
      />
      <Stack direction="horizontal" className="justify-content-between">
        <h2>Search Results</h2>
        <span>{searchResult?.total_jokes ?? 0} Results</span>
      </Stack>
      <ListGroup className="mw-100">
        {searchResult?.results.map(joke => (
          <Link className="list-group-item list-group-item-action text-truncate" key={joke.id} to={`/${joke.id}`}>
            {joke.joke}
          </Link>
        ))}
      </ListGroup>
      <div className="flex-grow-1"></div>
      {searchResult?.total_pages > 1 && (
        <Pagination>
          <PaginationItem query={query} page={1} active={page === 1} />
          {page > 3 && (
            <Pagination.Ellipsis />
          )}
          {page - 1 > 1 && (
            <PaginationItem query={query} page={page - 1} active={page === page - 1} />
          )}
          {page > 1 && page < searchResult.total_pages && (
            <PaginationItem query={query} page={page} active={true} />
          )}
          {page + 1 < searchResult.total_pages && (
            <PaginationItem query={query} page={page + 1} active={page === page + 1} />
          )}
          {page < searchResult.total_pages - 2 && (
            <Pagination.Ellipsis />
          )}
          <PaginationItem query={query} page={searchResult.total_pages} active={page === searchResult.total_pages} />
        </Pagination>
      )}
    </Stack>
  )
}

export default Search

/* eslint-disable react/prop-types */
import useGitHub from './hooks/useGitHub'
import { ColorRing } from 'react-loader-spinner'

const GitHubUser = ({ username }) => {
  const { user, error, loading } = useGitHub(username)

  return (
    <div className="github-user">
      {loading && (
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      )}
      {error && <p>{error.message}</p>}
      {user && (
        <ul className="details">
          <li>
            <img src={user.avatar_url} alt={user.login} />
          </li>
          <li>
            <strong>Username:</strong> {user.login}
          </li>
          <li>
            <strong>Followers:</strong> {user.followers}
          </li>
          <li>
            <strong>Following:</strong> {user.following}
          </li>
          <li>
            <strong>Location:</strong> {user.location}
          </li>
          <li>
            <strong>Public Gists:</strong> {user.public_gists}
          </li>
          <li>
            <strong>Repos:</strong> {user.public_repos}
          </li>
        </ul>
      )}
    </div>
  )
}

export default GitHubUser

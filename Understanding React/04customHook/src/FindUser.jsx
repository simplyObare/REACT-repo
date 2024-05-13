import { useState } from 'react'
import GitHubUser from './GitHubUser'

const FindUser = () => {
  const [userName, setUserName] = useState('')

  return (
    <div className="find-user">
      <h1>Find User</h1>
      <form>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="userName"
            placeholder="Enter User Name"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </form>

      <div className="result">
        {userName ? (
          <GitHubUser username={userName} />
        ) : (
          <p>Please initiate a Search!!!</p>
        )}
      </div>
    </div>
  )
}

export default FindUser

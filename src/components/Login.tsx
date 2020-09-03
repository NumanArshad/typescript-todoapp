import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { storeUser, verifyAuthUser } from "../services/authService"
const { FacebookProvider, LoginButton } = require('react-facebook')
const Login: React.SFC = () => {
  const history = useHistory()
  const handleResponse = (response: any) => {
    if (response) {
      console.log(response)
      storeUser(response, history)
    }
  }
  const handleError = (error: any) => {
    //  this.setState({ error });
    console.dir(error)
  }

  useEffect(() => {
    verifyAuthUser(history)
  }, [history])

  return (
    <>
      <div className="d-flex justify-content-center mt-4">
        <FacebookProvider appId="698621347265407">
          <LoginButton
            scope="email"
            onCompleted={handleResponse}
            onError={handleError}>
            <button className="btn btn-primary">Login with Facebook</button>
          </LoginButton>
        </FacebookProvider>
      </div>
    </>
  )
}
export default Login

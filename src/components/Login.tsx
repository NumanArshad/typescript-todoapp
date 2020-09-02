import React,{useContext} from 'react'
import { useHistory } from "react-router-dom"
import authContext from "../context/authContext"
const { FacebookProvider, LoginButton, Status } = require('react-facebook')

const Login: React.SFC = () => {
  const history = useHistory()
  const [token,setToken]=useContext(authContext)
  const handleResponse = (response: any) => {
    if (response) {
      history.push('/todo')
    }
  }

  const handleError = (error: any) => {
    //  this.setState({ error });
    console.dir(error)
  }

const calledme=()=>{
  setToken("nice")
}

  return (
    <div className="d-flex justify-content-center mt-4">
      <FacebookProvider appId="698621347265407">
        {/* <Status>
          {(respon: any) => (
            <div>
              {respon.loading || <span>...load</span>}
            </div>)}
        </Status> */}
        <button onClick={calledme}>trht </button>
      {token}
        <LoginButton
          scope="email"
          onCompleted={handleResponse}
          onError={handleError}>
         <button className="btn btn-primary">Login with Facebook</button>
        </LoginButton>
      </FacebookProvider>

    </div>)
}
export default Login

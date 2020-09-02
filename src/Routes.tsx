import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "./components/Login"
import TodoContainer from "./components/Todo/TodoContainer"
import authContext from "./context/authContext"
const Routes: React.SFC = () => {
    const cl=(vl:string)=>{
        alert("hell")
    }
    const token=React.useState("")
    return (<Router>
        <Switch>
            <authContext.Provider value={token}>
            {/* {console.log(authContext. as string)} */}
                <Route path="/login" component={Login} />
                <Route path="/todo" component={TodoContainer} />
            </authContext.Provider>
            <Redirect from="/" to="/login" />
        </Switch>
    </Router>)

}
export default Routes
import React  from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from "./components/Login"
import TodoContainer from "./components/Todo/TodoContainer"

const Routes:React.SFC=()=>{
return(<Router>
    <Switch>
        <Route path="/todo" component={Login} />
        <Route path="/" component={TodoContainer} />
    </Switch>
</Router>)

}
export default Routes
import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Login from "./components/login"
import TodoContainer from "./components/Todo/todoContainer"
import { getAuthUser } from "./services/authService";
import Header from "./layouts/header"
import MessageCmp from "./components/message";
import ContextProvider from "./context/ContextProvider";

const ProtectedRoute: React.SFC<any> = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => { return (getAuthUser() ? <> <Header /> <Component {...props} /></> : <Redirect to="/login" />) }} />
    )
}
const Routes: React.SFC = () => {
    return (
        <Router>
            <Switch>
            <Route path="/provider" component={ContextProvider} />
            <Route path="/message" component={MessageCmp} />
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/todo" component={TodoContainer} />
                <Redirect from="/" to="/todo" />
            </Switch>
        </Router>)
}
export default Routes

import React, { lazy, Suspense } from 'react'
import { Route, Link, Switch } from 'react-router-dom'

const Login = lazy(() => import(/* webpackChunkName:'Login' */ './Components/Login/Login'))
const Home = lazy(() => import(/* webpackChunkName:'Home' */ './Components/Home'))

function App () {
    return <Switch>
        <Suspense fallback={<div>loading...</div>}>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
        </Suspense>

    </Switch>
}

export default App
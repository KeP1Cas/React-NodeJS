import React from 'react'
import { Switch, Route, Redirect, Router } from 'react-router-dom'
import LinkPage from './pages/LinkPage'
import CreatePage from './pages/CreatePage'
import DetailPage from './pages/DetailPage'
import AuthPage from './pages/AuthPage'

export const useRouts = isAuthenticated => {
    if(isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinkPage/>
                </Route>
                <Route path="/create" exact>
                    <CreatePage/>
                </Route>
                <Route path="/detail/:id" >
                    <DetailPage/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    } 

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}
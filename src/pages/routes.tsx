import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import { HomePage } from './home';
import { PlaygroundPage } from './playground';

export function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path={'/playground'} component={PlaygroundPage}/>
                <Route path={'/'} component={HomePage}/>
            </Switch>
        </React.Fragment>
    )
}
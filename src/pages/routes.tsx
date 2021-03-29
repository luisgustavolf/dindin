import * as React from 'react';
import { Route, Switch } from "react-router-dom";
import { HomePage } from './home';
import { PlaygroundPage } from './playground';
import { StatementPage } from './statement';
import { TransferPage } from './transfer';

export function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route path={'/playground'} component={PlaygroundPage}/>
                <Route path={'/transfer'} component={TransferPage}/>
                <Route path={'/statements'} component={StatementPage}/>
                <Route path={'/'} component={HomePage}/>
            </Switch>
        </React.Fragment>
    )
}
import * as React from 'react';
import { Route } from "react-router-dom";
import { HomePage } from './home';
import { StatementPage } from './statement';
import { TransferPage } from './transfer';

export function Routes() {
    return (
        <React.Fragment>
            <Route component={HomePage}/>
            <Route path={'/transfer'} component={TransferPage}/>
            <Route path={'/statements'} component={StatementPage}/>
        </React.Fragment>
    )
}
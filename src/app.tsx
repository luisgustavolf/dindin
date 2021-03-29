import React from 'react';
import { HashRouter } from "react-router-dom";
import { AccountsBalancesProvider } from './contexts/accountsBalances/accountsBalancesProvider';
import { Routes } from "./pages/routes";

import './assets/styles/index.scss';
import './assets/styles/reset.scss';

export function App() {
    return (
        <AccountsBalancesProvider>
            <HashRouter>
                <Routes />
            </HashRouter>
        </AccountsBalancesProvider>
    );
}
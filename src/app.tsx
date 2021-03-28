import React from 'react';
import { HashRouter } from "react-router-dom";
import { Routes } from "./pages/routes";

import './assets/styles/index.scss'
import './assets/styles/reset.scss'

export function App() {
    return (
        <HashRouter>
            <Routes />
        </HashRouter>
    );
}
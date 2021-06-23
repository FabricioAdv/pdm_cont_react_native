import React from 'react';

import Router from './Router';
import useContatoState from './services/useContatoState';
import ContatoContext from './services/ContatoContext';

export default function App ()
{
    const state = useContatoState();

    return (
        <ContatoContext.Provider value={ state }>
            <Router />
        </ContatoContext.Provider>
    );
}
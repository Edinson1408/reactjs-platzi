import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import BadgeNew from '../pagues/BadgeNew';
import badges from '../pagues/badges';

function App(){
    return <BrowserRouter>
                <Switch>
                    <Route exact path="/bages" component={badges} />
                    <Route exact path="/bages/new" component={BadgeNew} />
                </Switch>
            </BrowserRouter>;
}


export default App;
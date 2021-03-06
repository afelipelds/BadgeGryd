import React from 'react'
import {BrowserRouter as Router, 
        Route, 
        Switch,
        Redirect} from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from './NotFound';
import BadgeDetails from '../pages/BadgeDetails'
import BadgeEdit from '../pages/BadgeEdit'

function App() {
    return (<>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/badges" component={Badges}/>   
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    
                    <Route path="/404" component={NotFound} />
                    <Redirect from="*" to="/404" />
                </Switch>
            </Layout>
        </Router>
    </>)

}

export default App
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './../header';
import Footer from './../footer';
import { SupportPage, Homepage } from './../pages';

const App = () => {
    return (
        <main role='main' className='main'>
            <Header />
            <Switch>
                <Route path='/' component={Homepage} exact />
                <Route path='/support' component={SupportPage}/>
            </Switch>
            <Footer />
        </main>
    );
};

export default App;
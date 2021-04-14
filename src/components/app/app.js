import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './../header';
import Footer from './../footer';
import { SupportPage, Homepage, ResultPage } from './../pages';
import style from './app.module.css';

const App = () => {
    return (
        <main role='main' className={style.main}>
            <Header />
            <Switch>
                <Route path='/' component={Homepage} exact />
                <Route path='/support' component={SupportPage}/>
                <Route path='/result' component={ResultPage}/>
            </Switch>
            <Footer />
        </main>
    );
};

export default App;
import React from 'react';
import {
    BrowserRouter as AppRouter,
    Route,
    Link
} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import ServiceDetails from './components/ServiceDetails';
import Services from './components/Services';

const Router = () => {
    return (
        <AppRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                </ul>
            </nav>
            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route path="/services/:id" component={ServiceDetails} />
        </AppRouter>
    );
}

export default Router;

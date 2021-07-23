import Dashboard from 'pages/dashboard';
import Home from 'pages/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;

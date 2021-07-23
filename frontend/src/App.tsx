import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import Dashboard from 'pages/dashboard';
import Home from 'pages/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </Switch>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;

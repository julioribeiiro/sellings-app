import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">Sellings App</h1>
                <p className="lead">
                    Analyze your sales performance by different perspectives
                </p>
                <hr />
                <p>
                    This application consists of displaying a dashboard from
                    data provided by a back end built with Spring Boot.
                </p>
                <Link to="/dashboard" className="btn btn-primary">
                    Access Dashboard
                </Link>
            </div>
        </div>
    );
};

export default Home;

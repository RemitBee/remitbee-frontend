import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg'

function Navigation(){
    return (
            <nav className="navbar navbar-expand-lg bg-light py-2">
                <div className="container">
                    <img src={logo} style={{height:'70px'}}></img>
                    <a className="navbar-brand text-dark ms-2 nav-hover" href="/">Remitbee Currency Exchange</a>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-3 rounded-2 nav-hover">
                                <a className="btn btn-dark p-3" style={{backgroundColor:'#386AD6', width:'120px', height:'55px'}} aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item me-3 rounded-2 nav-hover">
                                <a className="btn btn-dark p-3" style={{backgroundColor:'#386AD6', width:'120px', height:'55px'}} aria-current="page" href="/AdminSignIn">Login</a>
                            </li>
                            <li className="nav-item me-3 rounded-2 nav-hover">
                                <a className="btn btn-dark p-3" style={{backgroundColor:'#386AD6', width:'120px', height:'55px'}} href="/AdminRegister">Signup</a>
                            </li>
                            {/* <li className="nav-item me-2 rounded-2 nav-hover">
                            <   a className="nav-link text-light" href="#">About</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navigation;
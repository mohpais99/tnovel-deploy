import React from 'react';
// import 'assets/styles/header.css';
import logo from 'assets/images/logo2.png';
import { Link } from 'react-router-dom';

function Header() {
    const toggleTheme = () => {
        return
    }
    return (
        <div className="container-fluid header--app">
            <div className="row py-2">
                <div className="col  d-none d-md-flex">
                    <Link to="/" className="logo my-auto">
                        <img src={logo} alt="my-logo" />
                    </Link>
                    <ul className="menu my-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span>Novel Hot</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span>Rekomendasi Novel</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">
                                <span>Genre Novel</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-auto right">
                    <form noValidate> 
                        <div className="search">
                            <input id="search" type="text" className="form-control-custom" placeholder="Pencarian..." name="search" autoComplete="off" />
                            <button type="submit" id="submit">
                                <i className="bx bx-search"></i>
                            </button>
                        </div>
                    </form>
                    <button className="btn b-none user-conf text-dark">
                        <i className='bx bxs-bookmark-star'></i>
                    </button>
                    <button className="btn b-none user-conf text-dark">
                        <i className='bx bxs-user-circle'></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header;

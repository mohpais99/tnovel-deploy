import React from 'react'
import useAuth from 'helpers/Context';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'assets/styles/header.css'

function Header() {
    const {handleToggle, toggleActive} = useAuth()
    const [dropdown, setdropdown] = useState({name: null, status: false})
    const [dropstatus, setdropstatus] = useState(false)

    const handleDropwdown = (name, status) => {
        if (status) {
            setdropdown(null)
        } else {
            setdropdown(name)
        }
        setdropstatus(!status)
    }
    return (
        <nav className="navbar bg-white navbar-expand-lg shadow-sm">
            <div className="container-fluid px-0">
                <div className="navbar-wrapper">
                    <div className="navbar-minimize">
                        <button id="minimizeSidebar" className="btn d-none d-lg-block" onClick={() => handleToggle(toggleActive)}>
                            <i className={`bx bx-menu-alt-left ${toggleActive ? 'd-block' : 'd-none'}`}></i>
                            <i className={`bx bx-menu ${!toggleActive ? 'd-block' : 'd-none'}`}></i>
                        </button>
                    </div>
                </div>
                <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                    <i className='bx bx-menu' ></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul className="nav navbar-nav mr-auto">
                        <form className="navbar-form navbar-left navbar-search-form" role="search">
                            <div className="input-group-custom">
                                <input id="search" type="text" className="form-control-custom" placeholder="Pencarian..." name="search" autoComplete="off" />
                                <button type="submit" className="btn-custom" id="submit">
                                    <i className="bx bx-search"></i>
                                </button>
                            </div>
                        </form>
                    </ul>
                    <ul className="navbar-nav mr-5">
                        <li className={`dropdown nav-item ${dropdown === 'action' && dropstatus ? 'show' : ''}`}>
                            <a className="dropdown-toggle nav-link" onClick={() => handleDropwdown('action', dropstatus)}>
                                <i className="bx bxs-book-content nc-icon" ></i>
                            </a>
                            <ul className={`dropdown-menu ${dropdown === 'action' && dropstatus ? 'show' : ''}`}>
                                <Link className="dropdown-item" to="/adm-panel/novel-archive/add">Add New Novel</Link>
                                <Link className="dropdown-item" to="/adm-panel/novel-archive/chapter/add">Add New Chapter</Link>
                                <a className="dropdown-item" href="#">Submit to live</a>
                                <li className="divider"></li>
                                <a className="dropdown-item" href="#">Add Autors</a>
                                <Link className="dropdown-item" to="/adm-panel/genres">Preference Genres</Link>
                            </ul>
                        </li>
                        <li className={`dropdown nav-item ${dropdown === 'notif' && dropstatus ? 'show' : ''}`}>
                            <a className="dropdown-toggle nav-link" onClick={() => handleDropwdown('notif', dropstatus)}>
                                <i className="bx bxs-bell" ></i>
                                <span className="notification">5</span>
                                <span className="d-lg-none">Notification</span>
                            </a>
                            <ul className={`dropdown-menu ${dropdown === 'notif' && dropstatus ? 'show' : ''}`}>
                                <a className="dropdown-item" href="#">Notification 1</a>
                                <a className="dropdown-item" href="#">Notification 2</a>
                                <a className="dropdown-item" href="#">Notification 3</a>
                                <a className="dropdown-item" href="#">Notification 4</a>
                                <a className="dropdown-item" href="#">Notification 5</a>
                            </ul>
                        </li>
                        <li className={`dropdown nav-item ${dropdown === 'helpers' && dropstatus ? 'show' : ''}`}>
                            <a className="nav-link dropdown-toggle" onClick={() => handleDropwdown('helpers', dropstatus)}>
                                <i className="bx bx-coffee" ></i>
                            </a>
                            <div className={`dropdown-menu dropdown-menu-right ${dropdown === 'helpers' && dropstatus ? 'show' : ''}`}>
                                <Link to="/" className="dropdown-item">
                                <i className="bx bxs-home-heart"></i> Landing
                                </Link>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bxs-message-square mr-1"></i> Messages
                                </a>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-dollar-circle mr-1"></i> Donation
                                </a>
                                <div className="divider"></div>
                                <a className="dropdown-item" href="#">
                                    <i className="bx bx-lock-open mr-1"></i> Lock Screen
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header

// import React, {useState} from 'react'
import React from 'react';
import user from 'assets/images/devin.jpg';
import useAuth from 'helpers/Context';
import { Link, useHistory } from 'react-router-dom';
import routes from 'admpanel/Routes';

function Sidebar(props) {
    const history = useHistory()
    const {toggleActive} = useAuth()
    const path = history.location.pathname.split('/')
    const fetchRoute = (routes) => {
        let list = routes.filter(r => r.status === 0)
        return list.map((route, i) => {
            return (
                <li key={i} className={path.includes(route.path) ? 'active' : ''}>
                    <Link to={route.layout + '/' + route.path}>
                        <i className={route.icon}></i>
                        <span className="links-name">{route.name}</span>
                    </Link>
                </li>
            )
        })
    }
    return (
        <div className={`sidebar-adm ${toggleActive ? 'active' : ''}`} data-device={props.device}>
            <div className="logo-details">
                <i className="bx bxs-book-reader"></i>
                <div className="logo-name font-rhd-bold">TNovel</div>
            </div>
            <ul className="nav-list pl-0">
                {fetchRoute(routes)}
                {/* <li className="mb-3">
                    <a href="#">
                        <i className="bx bx-search"></i>
                        <input type="text" placeholder="Search ..." name="search" />
                    </a>
                    <span className="tooltip">Search</span>
                </li>
                <li className={path.includes('dashboard') ? 'active' : ''}>
                    <Link to="/adm-panel/dashboard">
                        <i className="bx bxs-dashboard"></i>
                        <span className="links-name">Dashboard</span>
                    </Link>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li className={path.includes('users') ? 'active' : ''}>
                    <Link to="/adm-panel/users">
                        <i className="bx bxs-user-account"></i>
                        <span className="links-name">User</span>
                    </Link>
                    <span className="tooltip">User</span>
                </li>
                <li className={path.includes('novel-archive') ? 'active' : ''}>
                    <Link to="/adm-panel/novel-archive">
                        <i className="bx bx-folder"></i>
                        <span className="links-name">Novel Archive</span>
                    </Link>
                    <span className="tooltip">Dashboard</span>
                </li>
                <li className={path.includes('comment') ? 'active' : ''}>
                    <Link to="/adm-panel/comment">
                        <i className="bx bx-chat"></i>
                        <span className="links-name">Comment</span>
                    </Link>
                    <span className="tooltip">Messages</span>
                </li>
                <li className={path.includes('setting') ? 'active' : ''}>
                    <Link to="/adm-panel/setting">
                        <i className="bx bx-cog"></i>
                        <span className="links-name">Settings</span>
                    </Link>
                    <span className="tooltip">Dashboard</span>
                </li> */}
            </ul>
            <div className="profile-content">
                <div className="profile">
                    <div className="profile-detail">
                        <img src={user} alt="user"/>
                        <div className="name-job">
                            <div className="name">Devin Liu</div>
                            <div className="job">Fullstact Developer</div>
                        </div>
                    </div>
                    <i className="bx bx-power-off" id="log-out"></i>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

import React from 'react';
import { Modal } from 'react-bootstrap'
import useAuth from 'helpers/Context'
import logo from 'assets/images/logo2.png';
import { useHistory } from 'react-router-dom';
import * as g from 'services/global';

function Sidebar(props) {
    // const history = useHistory()
    const {handleModal, dataModal} = useAuth()
    const [show, setShow] = React.useState(props.status)

    const handleClose = () => {
        handleModal(null)
        setShow(false)
    }

    const fetchData = data => {
        return data.map((chapter, i) => {
            return (
                <li key={i} className={`item ${chapter.active ? 'active': ''}`} onClick={() => window.location.push(`/read/${chapter.slug}`)}>
                    <i className="number"><span>{chapter.chapter}</span></i>
                    {g.subStr(chapter.title, 25)}
                </li>
            )
        })
    }
    return (
        <Modal 
            show={show}
            onHide={handleClose}
            className={`${show ? 'in' : ''} right`}
            keyboard={false}
        >
            <div className="modal-body sidebar--list">
                <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="logo-item">
                    <a href="" className="mx-auto">
                        <img src={logo}  alt="logo" height="40px" />
                    </a>
                </div>
                <ul className="list-item">
                    {fetchData(dataModal)}
                    {/* <li className="item active">
                        <i className="number"><span>1</span></i>
                        Prolog
                    </li>
                    <li className="item">
                        <i className="number"><span>2</span></i>
                        Kematian dan Reinkarnasi
                    </li>
                    <li className="item">
                        <i className="number"><span>3</span></i>
                        Interaksi Pertama
                    </li> */}
                </ul>
            </div>
        </Modal>
    )
}

export default Sidebar

import React, { createContext, useState, useContext } from 'react';
import ModalChapter from 'admpanel/includes/ModalChapter';
import ModalNovel from 'admpanel/includes/ModalNovel';
import SidebarChapterList from 'app/components/SidebarChapterList';
import { ToastContainer, toast } from 'react-toastify';    
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('fz')
    const [dataModal, setDataModal] = useState(null)
    const [toggleActive, setToggleActive] = useState(true);
    const [modal, setModal] = useState(null)

    const handleModal = (name, data) => {
        if (data) {
            setDataModal(data)
        }
        setModal(name)
    }

    const showModal = (name) => {
        switch (name) {
            case 'modal-chapter':
                return (
                    <ModalChapter status={true} />
                )
            case 'modal-novel':
                return (
                    <ModalNovel status={true} />
                )
            case 'sidebar-chapter-list':
                return (
                    <SidebarChapterList status={true} />
                )
            default:
                break;
        }
    }

    const notify = (msg, status) => {
        switch (status) {
            case 0:
                toast.error(msg, {autoClose: 2000 })
                break;
            case 1:
                toast.success(msg, {autoClose: 2000 })
                break;
            case 2:
                toast.info(msg, {autoClose: 2000 })
                break;
            case 3:
                toast.warning(msg, {autoClose: 2000 })
                break;
            default:
                toast.success(msg, {autoClose: 2000 })
                break;
        }
    }

    const login = async (username, password) => {
        let data = {
            username,
            password
        }
        return data
    }

    const handleToggle = (status) => {
        setToggleActive(!status)
    }

    const logout = () => {
        return 'Good bye! :)'
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, logout, handleToggle, toggleActive, handleModal, dataModal, notify }}>
            {modal && showModal(modal)}
            <ToastContainer />
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export default useAuth;


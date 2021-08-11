import React from 'react'
import { useParams } from 'react-router-dom'
// import ReactHtmlParser from 'react-html-parser';
import api from 'services/restapi';
// import * as g from 'services/global';
import useAuth from 'helpers/Context';
import PageContext from 'app/includes/PageContext';

function Read(props) {
    const {slug} = useParams()
    const [chapter, setChapter] = React.useState()
    const [list, setList] = React.useState()
    const [prev, setPrev] = React.useState(null)
    const [next, setNext] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const {handleModal} = useAuth()

    async function loadChapter(params) {
        await api.put(`chapter/read/${params}`)
            .then(res => {
                const {data, all} = res.data
                let index = all.findIndex(chapter => chapter.slug === data.slug)
                let prev = all[index - 1]
                let next = all[index + 1]
                all[index].active = true
                if (prev) {
                    setPrev(prev.slug)
                } else {
                    setPrev(null)
                }
                if(next) {
                    setNext(next.slug)
                } else {
                    setNext(null)
                }
                setChapter(data)
                setList(all)
            })
            .catch(err => {
                return false
            })
        setLoading(false)
    }

    React.useEffect(() => {
        loadChapter(slug)
    }, [])

    const setPageView = (data) => {
        return <PageContext chapter={data} />
    }

    const handlePrev = (path) => {
        setLoading(true)
        props.history.push(`/read/${path}`)
        return loadChapter(path)
    }
    const handleNext = (path) => {
        setLoading(true)
        props.history.push(`/read/${path}`)
        return loadChapter(path)
    }

    return (
        <React.Fragment>
            <div className="container mt-4 read--novel">
            {
                loading ? 
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="spinner-border text-success mr-1" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-success mr-1" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-border text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="h4 mt-3">Sedang memuat halaman...</div>
                        </div>
                    </div>
                :
                    chapter && 
                        <React.Fragment>
                            {setPageView(chapter)}
                            <div className="row">
                                <div className="col-12 actions d-none d-md-block">
                                    <button className={`btn prev ${!prev ? 'd-none' : ''}`} onClick={() => handlePrev(prev)}>
                                        <i className='bx bx-skip-previous'></i>
                                        Previous
                                    </button>
                                    <button type="button" className="btn" onClick={() => handleModal('sidebar-chapter-list', list)}>
                                        <i className="bx bx-list-ol"></i>
                                    </button>
                                    <button type="button" className={`btn prev ${!next ? 'd-none' : ''}`} onClick={() => handlePrev(next)}>
                                        Next
                                        <i className='bx bx-skip-next'></i>
                                    </button>
                                </div>
                            </div>
                        </React.Fragment>
            }
        </div>
        </React.Fragment>
    )
}

export default Read;

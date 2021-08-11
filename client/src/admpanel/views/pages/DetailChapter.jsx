import LoadingCard from 'admpanel/components/LoadingCard'
import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import api from 'services/restapi'
import * as g from 'services/global';
import ReactHtmlParser from 'react-html-parser';

function DetailChapter() {
    const {slug} = useParams()
    // const {push} = useHistory()
    const history = useHistory()
    const [chapter, setChapter] = React.useState()
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        async function loadChapter() {
            await api.put(`chapter/read/${slug}`)
                .then(res => {
                    const {data} = res.data
                    setChapter(data)
                })
                .catch(err => {
                    return false
                })
            setLoading(false)
        }
        loadChapter()
    }, [])
    return (
        <div className="row">
            <div className="col-sm-12 mb-3">
                <div className="row no-gutters">
                    {/* <button type="button" onClick={() => history.push('/adm-panel/novel-archive/')} className="btn btn-sm btn-success d-flex align-items-center"> */}
                    <button type="button" onClick={() => history.goBack()} className="btn btn-sm btn-success d-flex align-items-center">
                        <i className='bx bx-arrow-back mr-1'></i>
                        Back
                    </button>
                </div>
            </div>
            {
                loading ?
                    <LoadingCard />
                :
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body chapter">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">
                                        <div className="header-chapter border-bottom">
                                            <div className="h3 font-rhd-bold">{chapter.title}</div>
                                            <div className="sub">
                                                <span className="author text-muted">
                                                    <i className='bx bx-user-circle'></i>
                                                    {chapter.published_by}
                                                </span>
                                                <span className="time text-muted">
                                                    <i className='bx bx-time-five'></i>
                                                    {g.prettyDate(chapter.created_at)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="content">
                                            {ReactHtmlParser(chapter.description)}
                                        </div>
                                    </div>
                                    {/* <div className="col-sm-12 col-md-3 info">
                                        <div className="widget-genre">
                                            <h3 className="widget-title font-16"><b>Genres</b></h3>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default DetailChapter

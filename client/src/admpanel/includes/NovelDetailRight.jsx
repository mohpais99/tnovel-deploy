import LoadingTable from 'admpanel/components/LoadingTable';
import NoDataTable from 'admpanel/components/NoDataTable';
import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import api from 'services/restapi';
import * as g from 'services/global';

function NovelDetailRight(props) {
    const history = useHistory()
    const novel = props.novel;
    const [chapter, setChapter] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    async function loadChapter() {
        await props.api.put(`chapter/${novel.id}`)
            .then(res => {
                const {data} = res.data
                setChapter(data)
            })
            .catch(err => {
                return false
            })
        setLoading(false)
    }
    React.useEffect(() => {
        loadChapter()
    }, [])

    const handleDelete = async (id) => {
        await api.delete(`chapter/delete/${id}`)
            .then(res => {
                var {s, message} = res.data
                if (s === 1) {
                    props.notify(message)
                } else {
                    props.notify('Gagal!', 0)
                }
                loadChapter()
            })
    }

    const handlePublish = async (id) => {
        await api.put(`chapter/publish/${id}`)
            .then(res => {
                var {s, message} = res.data
                if (s === 1) {
                    props.notify(`Success published chapter wiht id ${id}`)
                } else {
                    props.notify('Gagal!', 0)
                }
                loadChapter()
            })
    }

    const fetchData = (data, status) => {
        const list = data.filter(x => x.publish === status)
        if (list.length > 0) {
            return list.map((chapter, i) => {
                return (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>Chapter {chapter.chapter}</td>
                        <td>{chapter.title}</td>
                        <td className={status === 0 ? 'd-none' : ''}>{chapter.published_by}</td>
                        <td>{g.getDateInd(chapter.created_at)}</td>
                        <td>{g.getDateInd(chapter.updated_at)}</td>
                        <td className="td-actions text-right">
                            <button type="button" className={`btn btn-sm btn-success btn-link ${status === 1 ? 'd-none' : ''}`} onClick={() => handlePublish(chapter.id)}>
                                <i className="bx bx-book"></i>
                            </button>
                            <button type="button" className="btn btn-sm btn-warning btn-link" onClick={() => history.push(`/adm-panel/novel-archive/chapter/${chapter.slug}`)}>
                                <i className="bx bx-show"></i>
                            </button>
                            <button type="button" className={`btn btn-sm btn-info btn-link ${status === 1 ? 'd-none' : ''}`} onClick={() => history.push(`/adm-panel/novel-archive/chapter/edit/${chapter.slug}`)}>
                                <i className="bx bxs-edit-alt"></i>
                            </button>
                            <button type="button" onClick={() => handleDelete(chapter.id)} className="btn btn-sm btn-danger btn-link">
                                <i className="bx bx-trash"></i>
                            </button>
                        </td>
                    </tr>
                )
            })
        } else {
            return <NoDataTable cols="6" />
        }
    }

    const [tab, setTab] = React.useState('draft')
    const handleTab = (name) => {
        setTab(name)
    }
    return (
        <div className="col-sm-12 col-md-10">
            <div className="row">
                <div className="col-12 mb-2">
                    <div className="h6 mb-0"><b>Novel Name</b></div>
                    <p className="font-16 font-weight-5 mb-1">{novel.name}</p>
                </div>
                <div className="col-12 mb-2">
                    <div className="h6 mb-1"><b>Novel Rating</b></div>
                    <div className="d-block">
                        <span className="font-size-20 text-warning">
                            <i className="bx bxs-star mr-1"></i>
                            <i className="bx bxs-star mr-1"></i>
                            <i className="bx bxs-star mr-1"></i>
                            <i className="bx bxs-star mr-1"></i>
                            <i className="bx bxs-star"></i>
                        </span>
                        (5.0)
                    </div>
                </div>
                <div className="col-12 mb-2 synopsis">
                    <div className="h6">
                        <b>Sinopsis</b>
                    </div>
                    <div className="w-100">
                        {ReactHtmlParser(novel.synopsis)}
                    </div>
                </div>
                <div className="col-12 text-center">
                    <div className="w-100 border-top my-3"></div>
                    <div className="h6">Table of Content</div>
                    <div className="w-100 border-bottom my-3"></div>
                </div>
                <div className="col-12">
                    <ul role="tablist" className="nav nav-tabs font-14">
                        <li className={`nav-item cursor-pointer ${tab === 'draft' ? 'show active' : ''}`} onClick={() => handleTab('draft')}>
                            <a className="nav-link" id="account-tab">Draft</a>
                        </li>
                        <li className={`nav-item cursor-pointer ${tab === 'publish' ? 'show active' : ''}`} onClick={() => handleTab('publish')}>
                            <a className="nav-link" id="info-tab">Published</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className={`tab-pane fade ${tab === 'draft' ? 'show active' : ''}`}>
                            <div className="row">
                                <div className="col-12 table-responsive">
                                    <table className="table table-hover table-novel font-14 no-wrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Chapter</th>
                                                <th>Title Chapter</th>
                                                <th>Created At</th>
                                                <th>Updated At</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                loading ?
                                                    <LoadingTable cols="6" />
                                                :
                                                    fetchData(chapter, 0)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${tab === 'publish' ? 'show active' : ''}`}>
                            <div className="row">
                                <div className="col-12 table-responsive">
                                    <table className="table table-hover table-novel font-14 no-wrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Chapter</th>
                                                <th>Title Chapter</th>
                                                <th>Published by</th>
                                                <th>Created At</th>
                                                <th>Updated At</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                loading ?
                                                    <LoadingTable cols="6" />
                                                :
                                                    fetchData(chapter, 1)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NovelDetailRight

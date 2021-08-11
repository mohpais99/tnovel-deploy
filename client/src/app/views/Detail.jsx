import React from 'react';
import noposter from 'assets/images/image-not-available.jpg';
import api from 'services/restapi';
import { useParams } from 'react-router-dom';
import HtmlParser from 'react-html-parser';

function Detail(props) {
    const {slug} = useParams()
    const [tab, setTab] = React.useState('desc')
    const [loading, setLoading] = React.useState(true)
    const [novel, setNovel] = React.useState(null)

    React.useEffect(() => {
        async function loadField() {
            await api.put(`novel/get-all/${slug}`)
                .then(res => {
                    var {novel, chapter} = res.data
                    novel.chapter = chapter
                    setNovel(novel)
                })
                .catch(err => {
                    console.log(err);
                    return false
                })

            setLoading(false)
        }
        loadField()
    }, [])

    const fetchGenre = data => {
        return data.map((g, i) => {
            return (
                <span key={i} className="badge badge-info mb-1 mr-1 p-1">{g}</span>
            )
        })
    }

    const fetchChapter = data => {
        if (data.length > 0) {
            return novel.chapter.slice(0, 10).map((chapter, i) => {
                return (
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>Chapter {chapter.chapter}</td>
                        <td>{chapter.title}</td>
                        <td>1.2k Views</td>
                        <td className="actions">
                            <button onClick={() => handleMove(`/read/${chapter.slug}`)} className="btn btn-sm btn-primary">
                                Baca!
                            </button>
                        </td>
                    </tr>
                )
            })
        } else {
            return (
                <tr><td colSpan="5" className="text-center"><h6>Tidak ada data!</h6></td></tr>
            )
        }
    }

    const handleMove = (route) => {
        return props.history.push(route)
    }

    return (
        <div className="container py-4">
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
                    <React.Fragment>
                        {
                            novel ?
                                <div className="row detail--novel">
                                    <div className="col-sm-12 col-md-3">
                                        <div className="text-center">
                                            <div className="poster-image">
                                                {
                                                    novel.poster ?
                                                        <img src={`data:image/png;base64,${novel.poster}`} className="img-fluid rounded w-100" alt="poster-img" />
                                                    :
                                                        <img src={noposter} className="img-fluid rounded w-100" alt="poster-img" />
                                                }
                                                {/* <img src={overlord} alt="poster-novel" /> */}
                                            </div>
                                            <span className="rating">
                                                <i className="bx bxs-star text-warning mr-1"></i>
                                                <i className="bx bxs-star text-warning mr-1"></i>
                                                <i className="bx bxs-star text-warning mr-1"></i>
                                                <i className="bx bxs-star text-warning mr-1"></i>
                                                <i className="bx bxs-star text-warning mr-1"></i>
                                                (4.0)
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <div className="h1">{novel.name}</div>
                                        <table className="info basic table">
                                            <tbody className="">
                                                <tr className={!novel.othername ? 'd-none' : ''}>
                                                    <td className="">Alternatif Name</td>
                                                    <td className="">{novel.othername}</td>
                                                </tr>
                                                <tr className="">
                                                    <td className="">Type</td>
                                                    <td className="">{novel.type}</td>
                                                </tr>
                                                <tr className="">
                                                    <td className="">
                                                        <p>Author</p>
                                                    </td>
                                                    <td className="">
                                                        <p>{novel.author}</p>
                                                    </td>
                                                </tr>
                                                <tr className="">
                                                    <td className="">
                                                        <p>Release Year</p>
                                                    </td>
                                                    <td className="">
                                                        <p>2015</p>
                                                    </td>
                                                </tr>
                                                <tr className="">
                                                    <td className="">Genre</td>
                                                    <td className="">
                                                        {
                                                            fetchGenre(novel.genre)
                                                        }
                                                        {/* {
                                                            genre &&
                                                                fetchGenre(genre)
                                                        } */}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="interaction">
                                            <div className="row no-gutters">
                                                <div className="icon col">
                                                    <i className="bx bx-show"></i>
                                                    12k Views
                                                </div>
                                                <div className="icon col">
                                                    <i className="bx bx-like"></i>
                                                    7.3k Likes
                                                </div>
                                                <div className="icon col">
                                                    <i className="bx bxs-comment"></i>
                                                    115 Comment
                                                </div>
                                                <div className="icon col">
                                                    <i className="bx bxs-book-content"></i>
                                                    240 Chapters
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mt-4 desc">
                                        <div className="card">
                                            <div className="card-header bg-transparent p-0 border-0">
                                                <ul className="secondary--menu">
                                                    <li className={tab === 'desc' ? 'active' : ''} onClick={() => setTab('desc')}>
                                                        <a>Synopsis</a>
                                                    </li>
                                                    <li className={tab === 'chapter' ? 'active' : ''} onClick={() => setTab('chapter')}>
                                                        <a>List Chapter</a>
                                                    </li>
                                                    <li className={tab === 'comment' ? 'active' : ''} onClick={() => setTab('comment')}>
                                                        <a>Comment</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className={`col-12 font-16 ${tab === 'desc' ? 'd-block' : 'd-none'}`}>
                                                        {HtmlParser(novel.synopsis)}
                                                    </div>
                                                    <div className={`col-12 table-responsive ${tab === 'chapter' ? 'd-block' : 'd-none'}`}>
                                                        <table className="table">
                                                            <thead>
                                                                <tr>
                                                                    <th>#</th>
                                                                    <th>Chapter</th>
                                                                    <th>Title</th>
                                                                    <th>Views</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {fetchChapter(novel.chapter)}
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            :
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <h2>Tidak ada data!</h2>
                                    </div>
                                </div>
                        }
                    </React.Fragment>
            }
        </div>
    )
}

export default Detail

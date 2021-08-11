import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from 'services/restapi';
import useAuth from 'helpers/Context';
// import ReactPaginate from 'react-paginate';
import noposter from 'assets/images/image-not-available.jpg'
import LoadingTable from 'admpanel/components/LoadingTable';
import Pagination from 'admpanel/components/Pagination';
import NoDataTable from 'admpanel/components/NoDataTable';

function NovelArchive() {
    const {handleModal} = useAuth()
    const history = useHistory()
    const [novel, setNovel] = useState([])
    const [loading, setLoading] = useState(true)
    const [pageNumber, setPageNumber] = useState(0)
    const [search, setSearch] = useState({name:'', author:''})

    const novelsPerPage = 4
    const pagesVisited = pageNumber * novelsPerPage
    const pageCount = Math.ceil(novel.length / novelsPerPage)

    useEffect(() => {
        async function loadAllNovel() {
            // api.defaults.headers.Authorization = `Bearer ${token}`
            await api.get('novel/')
                .then(res => {
                    const {data} = res.data
                    setNovel(data)
                })
                .catch(err => {
                    return false
                })
            setLoading(false)
        }
        loadAllNovel()
    }, [])
    
    const handleSearch = ({name, value}) => {
        setSearch({[name]: value})
    }

    const fetchData = (data) => {
        return data.filter(x => x.name.toLowerCase().includes(search.name) || x.author.toLowerCase().includes(search.author)).slice(pagesVisited, pagesVisited + novelsPerPage).map((novel, i) => {
            return (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>
                        <div className="img-container">
                            {
                                novel.poster ?
                                    <img src={`data:image/png;base64,${novel.poster}`} className="w-100" alt="thumb-novel" />
                                :
                                    <img src={noposter} className="w-100" alt="thumb-novel" />
                            }
                        </div>
                    </td>
                    <td className="td-name">{novel.name}</td>
                    <td><i className="bx bxs-star mr-1 text-warning"></i>4.5 (1260 vote)</td>
                    <td>
                        {
                            novel.type === 'WN' ?
                                'Web Novel '
                            :
                                'Light Novel '
                        }
                        ({novel.type})
                    </td>
                    <td>{novel.author}</td>
                    <td>{novel.language}</td>
                    <td>{novel.year}</td>
                    <td>
                        <span className={`badge ${novel.status === 'Ongoing' ? 'badge-success' : 'badge-primary'} p-1 font-10`}>{novel.status}</span>
                    </td>
                    <td className="td-actions text-right">
                        <button type="button" onClick={() => history.push('/adm-panel/novel-archive/' + novel.slug + '/detail')} className="btn btn-sm btn-warning btn-link">
                            <i className="bx bx-show"></i>
                        </button>
                        <button type="button" onClick={() => history.push('/adm-panel/novel-archive/' + novel.slug + '/edit')} className="btn btn-sm btn-info btn-link">
                            <i className="bx bxs-edit-alt"></i>
                        </button>
                        <button type="button" className="btn btn-sm btn-danger btn-link">
                            <i className="bx bx-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setPageNumber(selectedPage)
    };

    return (
        <div className="row mb-4">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header mb-2">
                        <div className="row">
                            <div className="col">
                                <h4 className="card-title">Novel Archive</h4>
                                <p className="card-category">Here is a file-file for novel</p>
                            </div>
                            <div className="ml-auto my-auto col-auto d-none d-md-block">
                                <button type="button" onClick={() => handleModal('modal-novel')} className="btn btn-sm btn-success d-flex align-items-center">
                                    <i className="bx bx-plus-medical mr-1"></i>
                                    Add Archive
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 table-responsive">
                                <table className="table table-novel no-wrap">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Thumb</th>
                                            <th>Novel Name</th>
                                            <th>Rate</th>
                                            <th>Type</th>
                                            <th>Authors</th>
                                            <th>Language</th>
                                            <th>Year</th>
                                            <th>Status Translation</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td>
                                                <input type="text" id="name" name="name" className="form-control" onChange={(e) => handleSearch(e.target)} />
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td><input type="text" id="author" name="author" className="form-control" onChange={(e) => handleSearch(e.target)} /></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        { 
                                            !loading ? 
                                                novel.length > 0 ? 
                                                    fetchData(novel)
                                                :
                                                    <NoDataTable cols="9" />
                                            : 
                                                <LoadingTable cols="9" />
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {
                                novel.length > novelsPerPage && 
                                <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NovelArchive

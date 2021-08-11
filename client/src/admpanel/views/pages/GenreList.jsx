import React from 'react'
import api from 'services/restapi';
import Pagination from 'admpanel/components/Pagination';
import LoadingTable from 'admpanel/components/LoadingTable';
import NoDataTable from 'admpanel/components/NoDataTable';
import * as global from 'services/global'

function GenreList() {
    const [genre, setGenre] = React.useState([])
    const [add, setAdd] = React.useState(false)
    const [loading, setLoading] = React.useState(true)
    const [state, setState] = React.useState(true)
    const [pageNumber, setPageNumber] = React.useState(0)
    const genresPerPage = 8
    const pagesVisited = pageNumber * genresPerPage
    const pageCount = Math.ceil(genre.length / genresPerPage)

    async function loadAllGenre() {
        await api.get('genre/')
            .then(res => {
                const {data} = res.data
                setGenre(data)
            })
            .catch(err => {
                return false
            })
        setLoading(false)
    }

    React.useEffect(() => {
        loadAllGenre()
    }, [])

    const fetch = data => {
        return data.slice(pagesVisited, pagesVisited + genresPerPage).map((g, i) => {
            if (data.length > 0) {
                return (
                    <tr key={i}>
                        <td className="numbers">{i+1}</td>
                        <td className="td-name">{g.name}</td>
                        <td>{global.getDateInd(g.created_at)}</td>
                        <td>{global.getDateInd(g.updated_at)}</td>
                        <td className="td-actions">
                            <button type="button" className="btn btn-sm btn-info btn-simple mr-2">
                                <i className="bx bxs-edit-alt"></i>
                            </button>
                            <button type="button" className="btn btn-sm btn-danger btn-simple">
                                <i className="bx bx-trash"></i>
                            </button>
                        </td>
                    </tr>
                )
            } else {
                return <NoDataTable cols="4" />
            }
        })
    }

    const handleChange = e => {
        setState({[e.target.name]: e.target.value})
    }

    const handleSave = async e => {
        e.preventDefault()
        await api.post('genre/create', state)
            .then(res => {
                var {s, message} = res.data
                if (s === 1) {
                    alert(message)
                    loadAllGenre()
                }
            })
    }

    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setPageNumber(selectedPage)
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card genre-page">
                    <div className="card-header pb-2 genre-header">
                        <div className="col-auto">
                            <h4 className="card-title">Genre Novel</h4>
                            <p className="card-category">Here is a file-file for novel</p>
                        </div>
                        <div className={`col-auto my-auto ${add ? 'd-none' : 'd-block'}`} onClick={() => setAdd(!add)}>
                            <button type="button" className="btn btn-primary">
                                <i className="bx bx-plus"></i>
                            </button>
                        </div>
                        <div className={`col-auto my-auto ${!add ? 'd-none' : 'd-block'}`} onClick={() => setAdd(!add)}>
                            <button type="button" className="btn btn-danger">
                                <i className='bx bx-x'></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body border-top">
                        <div className={`row mb-2 pt-3 form-add-genre ${add ? 'show' : ''}`}>
                            <div className="col-12">
                                <form onSubmit={handleSave} noValidate>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col">
                                                <input type="text" id="name" name="name" placeholder="Enter genre ..." className="form-control" onChange={handleChange} />
                                            </div>
                                            <div className="col-auto my-auto">
                                                <button type="submit" className="btn btn-sm btn-success">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Genre Name</th>
                                                <th>Created At</th>
                                                <th>Updated At</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                !loading || genre ?
                                                    fetch(genre)
                                                :
                                                    <LoadingTable cols="4" />
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                {
                                    genre.length > genresPerPage && 
                                        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenreList

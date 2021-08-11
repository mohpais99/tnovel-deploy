import React from 'react';
// import ButtonBack from 'admpanel/components/ButtonBack';
import LoadingCard from 'admpanel/components/LoadingCard';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams, useHistory } from 'react-router-dom';
import api from 'services/restapi';
import useAuth from 'helpers/Context';

function EditChapter() {
    const {notify} = useAuth()
    const params = useParams()
    const [chapter, setChapter] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [state, setState] = React.useState()
    const {goBack} = useHistory()
    React.useEffect(() => {
        async function chapterFetchData() {
            await api.put(`chapter/get/${params.slug}`)
                .then(res => {
                    var {data} = res.data
                    if (data) {
                        setChapter(data)
                    }
                    setLoading(false)
                })
                .catch(err => {
                    setLoading(false)
                    console.log(err);
                    return false
                })
        }
        chapterFetchData()
    }, [])

    const handleOnchange = (e) => {
        setState({ ...state, [e.target.name]: [e.target.value][0]})
    }

    const handleCKeditor = (e, editor) => {
        const data = editor.getData();
        setState({ ...state, description: data})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await api.put(`chapter/update/${params.slug}`, state)
            .then(res => {
                var {s, message} = res.data
                if (s === 1) {
                    notify('Success updating chapter!')
                    window.location.reload()
                } else {
                    notify('Gagal mengupdate chapter!', 0)
                }
            })
    }
    return (
        <div className="row">
            <div className="col-sm-12 mb-3">
                <div className="row no-gutters">
                    <button type="button" onClick={() => goBack()} className="btn btn-sm btn-success d-flex align-items-center">
                        <i className='bx bx-arrow-back mr-1'></i>
                        Back
                    </button>
                </div>
            </div>
            {
                loading ?
                    <LoadingCard />
                :
                    chapter ?
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header pb-2">
                                    <h4 className="card-title">{chapter.title}</h4>
                                    <p className="card-category">Here to update a chapter</p>
                                </div>
                                <div className="card-body border-top">
                                    <div className="row">
                                        <div className="col-12">
                                            <form onSubmit={handleSubmit} noValidate>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label className="font-weight-6">Title</label>
                                                            <input type="text" id="title" name="title" value={chapter.title} onChange={handleOnchange} className="form-control" placeholder="Type title ..." />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label className="font-weight-6">Chapter</label>
                                                            <input type="number" id="chapter" name="chapter" className="form-control" min="0" placeholder="0" value={chapter.chapter} onChange={handleOnchange} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <label className="font-weight-6">Description</label>
                                                            <CKEditor 
                                                                name="description"
                                                                editor={ ClassicEditor }
                                                                onChange={handleCKeditor}
                                                                data={chapter.description}>
                                                            </CKEditor>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr />
                                                <button type="submit" className="btn btn-info float-right">Update Chapter</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body text-center">
                                    <h1>Tidak ada data!</h1>
                                </div>
                            </div>
                        </div>
            }  
        </div>
    )
}

export default EditChapter

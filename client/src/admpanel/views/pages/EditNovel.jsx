import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams, useHistory } from 'react-router-dom';
import api from 'services/restapi';
import noposter from 'assets/images/image-not-available.jpg'
import Multiselect from 'multiselect-react-dropdown';
import LoadingCard from 'admpanel/components/LoadingCard';
import ButtonBack from 'admpanel/components/ButtonBack';
import useAuth from 'helpers/Context';

function EditNovel() {
    const params = useParams()
    const {notify} = useAuth()
    const history = useHistory()
    const [novel, setNovel] = React.useState();
    const [name, setName] = React.useState();
    const [genre, setGenre] = React.useState();
    const [state, setState] = React.useState();
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        async function genreFetchData() {
            await api.get('genre/')
                .then(res => {
                    const {data} = res.data
                    setGenre(data)
                })
                .catch(err => {
                    return false
                })
                
        }
        genreFetchData()
    }, []);
    
    React.useEffect(() => {
        async function novelFetchData() {
            await api.put(`novel/${params.novel}`)
                .then(res => {
                    var {data} = res.data
                    setName(data.name)
                    setNovel(data)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err);
                    return false
                })
        }
        novelFetchData()
    }, [genre])

    const handleOnchange = (e) => {
        setNovel({ ...novel, [e.target.name]: [e.target.value][0]})
    }

    const handleCKeditor = (e, editor) => {
        const data = editor.getData();
        setNovel({ ...novel, synopsis: data})
    }

    const handleGenre = () => {
        let nw = new Array();
        for (let i = 0; i < genre.length; i++) {
            const el = genre[i];
            for (let j = 0; j < novel.genre.length; j++) {
                const ex = novel.genre[j];
                if (el.name === ex) {
                    nw.push(el)
                }
            }
        }
        return nw
    }
    
    const onSelect = (selectedList, selectedItem) => {
        setState({...state, genre:selectedList})
    }

    const onRemove = (selectedList, removedItem) => {
        const genre = state.genre.filter(x => x.id !== removedItem.id)
        setState({...state, genre})
    }

    // const [imagePreview, setImagePreview] = React.useState(null);
    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            // setImagePreview(URL.createObjectURL(file))
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded
            reader.readAsBinaryString(file)
        }
    }

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        setNovel({...novel, poster: btoa(binaryString)})
    }

    const handleEdit = async (e) => {
        e.preventDefault()
        await api.put(`novel/update/${params.novel}`, novel)
            .then(res => {
                var {s, message} = res.data
                if (s === 1) {
                    notify(message)
                    history.goBack()
                }  else {
                    notify('Gagal!', 0)
                }
            })
    };

    return (
        <div className="row">
            <ButtonBack route="/adm-panel/novel-archive/" />
            {
                loading ?
                    <LoadingCard />
                :
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-header pb-2">
                                <h4 className="card-title">Edit Novel {name}</h4>
                                <p className="card-category">Here is a take a new chapter</p>
                            </div>
                            <div className="card-body border-top">
                                <form onSubmit={handleEdit} noValidate>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            {
                                                novel.poster ?
                                                    <img src={`data:image/png;base64,${novel.poster}`} id="photo-field" width="100" alt="file" />
                                                :
                                                    <img src={noposter} id="photo-field" width="100" alt="file" />
                                            }
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label className="font-weight-6">Poster Image</label>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id="poster" name="poster" accept="image/*" onChange={imageHandler} />
                                                    <label className="custom-file-label">Choose file</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-4">
                                            <div className="form-group">
                                                <label className="font-weight-6">Novel Name</label>
                                                <input type="text" id="name" name="name" className="form-control" onChange={handleOnchange} value={novel.name} placeholder="Type novel name ..." />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4">
                                            <div className="form-group">
                                                <label className="font-weight-6">Alternatif Name</label>
                                                <input type="text" id="othername" name="othername" className="form-control" onChange={handleOnchange} value={!novel.othername ? "" : novel.othername} placeholder="Type alternatif name ..." />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4">
                                            <div className="form-group">
                                                <label className="font-weight-6">Author Name</label>
                                                <input type="text" id="author" name="author" className="form-control" onChange={handleOnchange} value={novel.author} placeholder="Type novel name ..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-12 col-md-6">
                                            <label className="font-weight-6">Type Novel</label>
                                            <select id="type" name="type" value={novel.type} onChange={handleOnchange} className="form-control">
                                                <option value="" disabled>-- Select One --</option>
                                                <option value="WN">Web Novel (WN)</option>
                                                <option value="LN">Light Novel (LN)</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <label className="font-weight-6">Language</label>
                                            <select id="language" name="language" value={novel.language} onChange={handleOnchange} className="form-control">
                                                <option value="" disabled>-- Select One --</option>
                                                <option value="Korean">Korea</option>
                                                <option value="Japanese">Japanese</option>
                                                <option value="Chinesee">Chinesee</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-6">Status Novel</label>
                                                <select id="status" name="status" value={novel.status} onChange={handleOnchange} className="form-control">
                                                    <option value="" disabled>-- Select One --</option>
                                                    <option value="Ongoing">Ongoing</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-6">Year</label>
                                                <input type="text" id="year" name="year" className="form-control" value={novel.year} onChange={handleOnchange} placeholder="Type novel year ..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label className="font-weight-6">Genre Novel</label>
                                                <Multiselect
                                                    options={genre} // Options to display in the dropdown
                                                    selectedValues={handleGenre} // Preselected value to persist in dropdown
                                                    onSelect={onSelect} // Function will trigger on select event
                                                    onRemove={onRemove} // Function will trigger on remove event
                                                    displayValue="name" // Property name to display in the dropdown options
                                                />
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
                                                    data={novel.synopsis}>
                                                </CKEditor>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-info float-right">Edit Novel</button>
                                </form>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default EditNovel

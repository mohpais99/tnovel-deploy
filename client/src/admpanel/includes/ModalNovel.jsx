import React, { useState, useEffect } from 'react';
import useAuth from 'helpers/Context';
import Multiselect from 'multiselect-react-dropdown';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import api from 'services/restapi';
import { Modal } from 'react-bootstrap';

function ModalNovel(props) {
    const {handleModal, notify} = useAuth()
    const [state, setState] = useState({})
    const [genre, setGenre] = useState(null)
    const [show, setShow] = useState(props.status)
    const [imagePreview, setImagePreview] = useState(null);

    const handleOnchange = (e) => {
        setState({ ...state, [e.target.name]: [e.target.value][0]})
    }
    const handleCKeditor = (e, editor) => {
        const data = editor.getData();
        setState({ ...state, synopsis: data})
    }

    useEffect(() => {
        async function loadAllGenre() {
            await api.get('genre/')
                .then(res => {
                    const {data} = res.data
                    setGenre(data)
                })
                .catch(err => {
                    return false
                })
        }
        loadAllGenre()
    }, [])
    
    const onSelect = (selectedList, selectedItem) => {
        setState({...state, genre:selectedList})
    }

    const onRemove = (selectedList, removedItem) => {
        const genre = state.genre.filter(x => x.id !== removedItem.id)
        setState({...state, genre})
    }

    const imageHandler = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file))
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded
            reader.readAsBinaryString(file)
        }
    }

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result;
        setState({...state, poster: btoa(binaryString)})
    }

    const handleSave = async (e) => {
        e.preventDefault()
        await api.post('novel/create', state)
            .then(res => {
                var {s, message} = res.data
                if (s === 1) {
                    notify(message)
                    handleModal(null)
                    setShow(false)
                    window.location.reload()
                } else {
                    notify('Gagal!', 0)
                }
            })
    };

    const handleClose = () => {
        handleModal(null)
        setShow(false)
    }
    return (
        <Modal 
            show={show} 
            size="lg"
            onHide={handleClose} 
            backdrop="static"
            keyboard={false}
        >
            <div className="modal-header">
                <h5 className="modal-title" id="add-novel-label">Add New Novel</h5>
                <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="row no-gutters">
                    {
                        genre ?
                            <div className="col-12">
                                <form onSubmit={handleSave} noValidate>
                                    {
                                        imagePreview &&
                                            (
                                                <div className="row">
                                                    <div className="col-sm-12 text-center">
                                                        <img src={imagePreview} id="photo-field" width="100" alt="file" />
                                                    </div>
                                                </div>
                                            )
                                    }
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
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label className="font-weight-6">Novel Name</label>
                                                <input type="text" id="name" name="name" className="form-control" onChange={handleOnchange} placeholder="Type novel name ..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label className="font-weight-6">Author Name</label>
                                                <input type="text" id="author" name="author" className="form-control" onChange={handleOnchange} placeholder="Type novel name ..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-2">
                                        <div className="col-sm-12 col-md-6">
                                            <label className="font-weight-6">Type Novel</label>
                                            <select id="type" name="type" onChange={handleOnchange} className="form-control" defaultValue>
                                                <option value="" disabled>-- Select One --</option>
                                                <option value="WN">Web Novel (WN)</option>
                                                <option value="LN">Light Novel (WN)</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <label className="font-weight-6">Language</label>
                                            <select id="language" name="language" onChange={handleOnchange} className="form-control" defaultValue>
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
                                                <select id="status" name="status" onChange={handleOnchange} className="form-control" defaultValue>
                                                    <option value="" disabled>-- Select One --</option>
                                                    <option value="Ongoing">Ongoing</option>
                                                    <option value="Completed">Completed</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="font-weight-6">Year</label>
                                                <input type="text" id="year" name="year" className="form-control" onChange={handleOnchange} placeholder="Type novel year ..." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <label className="font-weight-6">Genre Novel</label>
                                                <Multiselect
                                                    options={genre} // Options to display in the dropdown
                                                    selectedValues={state.genre} // Preselected value to persist in dropdown
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
                                                <label className="font-weight-6">Synopsis</label>
                                                <CKEditor
                                                    name="synopsis"
                                                    editor={ ClassicEditor }
                                                    onChange={handleCKeditor}
                                                    data="<p>Type synopsis of novel ...</p>">
                                                </CKEditor>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-info float-right">Add Novel</button>
                                </form>
                            </div>
                        :
                            <div className="col-12 text-center">
                                <div className="spinner-border text-success mr-1" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-success mr-1" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default ModalNovel;
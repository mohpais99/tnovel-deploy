import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams, useHistory } from 'react-router-dom';

function AddChapter() {
    const history = useHistory()
    const [state, setState] = useState({})
    const handleOnchange = (e) => {
        setState({ ...state, [e.target.name]: [e.target.value][0]})
    }

    const handleCKeditor = (e, editor) => {
        const data = editor.getData();
        setState({ ...state, description: data})
    }

    return (
        <div className="row">
            <div className="col-sm-12 mb-3">
                <div className="row no-gutters">
                    <button type="button" onClick={() => history.push('/adm-panel/novel-archive/')} className="btn btn-sm btn-success d-flex align-items-center">
                        <i className='bx bx-arrow-back mr-1'></i>
                        Back
                    </button>
                </div>
            </div>
            <div className="col-md-12">
                <div className="card strpied-tabled-with-hover">
                    <div className="card-header pb-2">
                        <h4 className="card-title">Add New Chapter</h4>
                        <p className="card-category">Here is a take a new chapter</p>
                    </div>
                    <div className="card-body border-top">
                        <form noValidate>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Select Novel</label>
                                        <select name="slug" className="form-control">
                                            <option value="" disabled>-- Select One --</option>
                                            <option value="WN">Tensei Shitara Slime Detta-ken</option>
                                            <option value="LN">Overlord</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Title</label>
                                        <input type="text" id="title" name="title" onChange={handleOnchange} className="form-control" placeholder="Type title ..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Chapter</label>
                                        <input type="number" id="chapter" name="chapter" className="form-control" min="0" placeholder="0" onChange={handleOnchange} />
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
                                            data="<p>Type description of chapter ...</p>">
                                        </CKEditor>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info float-right">Add Chapter</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddChapter

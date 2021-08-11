import React from 'react'

function AddNovel() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card strpied-tabled-with-hover">
                    <div className="card-header pb-2">
                        <h4 className="card-title">Add New Novel</h4>
                        <p className="card-category">Here is a file-file for novel</p>
                    </div>
                    <div className="card-body border-top">
                        <form noValidate>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Poster Image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="cover" />
                                            <label className="custom-file-label">Choose file</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Novel Name</label>
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Type novel name ..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-4">
                                    <label className="font-weight-6">Type Novel</label>
                                    <select name="type" className="form-control">
                                        <option value="" disabled>-- Select One --</option>
                                        <option value="WN">Web Novel (WN)</option>
                                        <option value="LN">Light Novel (WN)</option>
                                    </select>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <label className="font-weight-6">Language</label>
                                    <select name="type" className="form-control">
                                        <option value="" disabled>-- Select One --</option>
                                        <option value="korean">Korea</option>
                                        <option value="japanese">Japanese</option>
                                        <option value="chinesee">Chinesee</option>
                                    </select>
                                </div>
                                <div className="col-sm-12 col-md-4">
                                    <div className="form-group">
                                        <label className="font-weight-6">Novel Name</label>
                                        <input type="text" id="author" name="author" className="form-control" placeholder="Type author novel ..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Sinopsis</label>
                                        <textarea name="desc" id="desc" cols="30" rows="5" className="form-control"></textarea>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info float-right">Add Novel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNovel

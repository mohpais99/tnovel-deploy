import React, { useState } from 'react';

function Setting() {
    const [tab, setTab] = useState("account-tab")
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card strpied-tabled-with-hover">
                    <div className="card-header pb-2">
                        <h4 className="card-title">Setting</h4>
                        <p className="card-category">Here is a file-file for novel</p>
                    </div>
                    <div className="card-body border-top">
                        <ul role="tablist" className="nav nav-tabs">
                            <li className="nav-item cursor-pointer show active">
                                <a className="nav-link" id="account-tab">Security</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="info-tab">Info</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active">
                                <form noValidate>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label className="font-weight-6">Old-Password</label>
                                                <input type="password" className="form-control" id="old-password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label className="font-weight-6">Re-Password</label>
                                                <input type="password" className="form-control" id="re-password" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label className="font-weight-6">New-Password</label>
                                                <input type="password" className="form-control" id="new-password" />
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-info float-right">Update</button>
                                </form>
                            </div>
                            <div className="tab-pane fade" role="tabpanel" aria-labelledby="account-tab">
                                We are Houses Inc., a group of architects and interior designers based in Chicago and operating for clients worldwide. We’ve been designing stunningly beautiful houses and making clients happy for years.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting

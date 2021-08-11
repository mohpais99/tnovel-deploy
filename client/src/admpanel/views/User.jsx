import React from 'react';

function User() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card strpied-tabled-with-hover">
                    <div className="card-header ">
                        <h4 className="card-title">All Users</h4>
                        <p className="card-category">Here is a subtitle for this table</p>
                    </div>
                    <div className="card-body table-responsive">
                        <table className="table table-hover table-striped no-wrap">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>City</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Dakota Rice</td>
                                    <td>dakota@gmail.com</td>
                                    <td>Niger</td>
                                    <td>Oud-Turnhout</td>
                                    <td className="td-actions text-right">
                                        <button type="button" className="btn btn-info btn-simple mr-1">
                                            <i className="bx bxs-edit-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple">
                                            <i className="bx bx-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Minerva Hooper</td>
                                    <td>mhooper@gmail.com</td>
                                    <td>Curaçao</td>
                                    <td>Sinaai-Waas</td>
                                    <td className="td-actions text-right">
                                        <button type="button" className="btn btn-info btn-simple mr-1">
                                            <i className="bx bxs-edit-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple">
                                            <i className="bx bx-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Sage Rodriguez</td>
                                    <td>rr122@gmail.com</td>
                                    <td>Netherlands</td>
                                    <td>Baileux</td>
                                    <td className="td-actions text-right">
                                        <button type="button" className="btn btn-info btn-simple mr-1">
                                            <i className="bx bxs-edit-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple">
                                            <i className="bx bx-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Philip Chaney</td>
                                    <td>$38,735</td>
                                    <td>Korea, South</td>
                                    <td>Overland Park</td>
                                    <td className="td-actions text-right">
                                        <button type="button" className="btn btn-info btn-simple mr-1">
                                            <i className="bx bxs-edit-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple">
                                            <i className="bx bx-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Doris Greene</td>
                                    <td>$63,542</td>
                                    <td>Malawi</td>
                                    <td>Feldkirchen in Kärnten</td>
                                    <td className="td-actions text-right">
                                        <button type="button" className="btn btn-info btn-simple mr-1">
                                            <i className="bx bxs-edit-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple">
                                            <i className="bx bx-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Mason Porter</td>
                                    <td>$78,615</td>
                                    <td>Chile</td>
                                    <td>Gloucester</td>
                                    <td className="td-actions text-right">
                                        <button type="button" className="btn btn-info btn-simple mr-1">
                                            <i className="bx bxs-edit-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-simple">
                                            <i className="bx bx-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User

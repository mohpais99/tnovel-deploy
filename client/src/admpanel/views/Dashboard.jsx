import React from 'react'

function Dashboard() {
    return (
        <>
            <div className="row mb-4">
                <div className="col-lg-3 col-sm-12 mb-2">
                    <div className="card card-stats shadow">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big text-left">
                                        <i className="bx bxs-book text-warning"></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="numbers">
                                        <p className="card-category">Total Novel</p>
                                        <h4 className="card-title">150 Title</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="stats border-top">
                                <i className="bx bx-refresh"></i> Update Now
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 mb-2">
                    <div className="card card-stats shadow">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big text-left">
                                        <i className="bx bxs-user-badge text-info"></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="numbers">
                                        <p className="card-category">Guest & User</p>
                                        <h4 className="card-title">150 People</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="stats border-top">
                                <i className="bx bx-time-five"></i> In the last hour
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 mb-2">
                    <div className="card card-stats shadow">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big text-left">
                                        <i className='bx bx-user-check text-success'></i>
                                        {/* <i className="bx bxs-message text-success"></i> */}
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="numbers">
                                        <p className="card-category">Visitor</p>
                                        <h4 className="card-title">120 People</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="stats border-top">
                                <i className="bx bx-calendar-alt"></i> Last Day
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-12 mb-2">
                    <div className="card card-stats shadow">
                        <div className="card-body ">
                            <div className="row">
                                <div className="col-5">
                                    <div className="icon-big text-left">
                                        <i className="bx bx-donate-heart text-primary"></i>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="numbers">
                                        <p className="card-category">Donasi</p>
                                        <h4 className="card-title">100k</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="stats border-top">
                                <i className="bx bx-refresh"></i> Update Now
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header ">
                            <h4 className="card-title">Top Novel By Views</h4>
                            <p className="card-category">All novel that were shipped</p>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Novel Name</th>
                                                    <th>View</th>
                                                    <th>Vote</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Tensei Shitara Slime Detta-Ken</td>
                                                    <td>
                                                        2.920
                                                    </td>
                                                    <td>
                                                        53.23%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Jujutsu Kaisen</td>
                                                    <td>
                                                        1.300
                                                    </td>
                                                    <td>
                                                        20.43%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>One Piece</td>
                                                    <td>
                                                        760
                                                    </td>
                                                    <td>
                                                        10.35%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Isekai Meikyuu de Harem Wo</td>
                                                    <td>
                                                        690
                                                    </td>
                                                    <td>
                                                        7.87%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Kage No Jitsuryuo Nattake</td>
                                                    <td>
                                                        600
                                                    </td>
                                                    <td>
                                                        5.94%
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ninkyou Tense:Isekai no Yakuza</td>
                                                    <td>
                                                        550
                                                    </td>
                                                    <td>
                                                        4.34%
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-12 col-md-4">
                            <div className="card card-tasks">
                                <div className="card-header ">
                                    <h4 className="card-title">Tasks</h4>
                                    <p className="card-category">Backend development</p>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-12 table-responsive">
                                            <table className="table table-novel">
                                                <tbody>
                                                    <tr>
                                                        <td>Sign contract for "What are conference organizers afraid of?"</td>
                                                        <td className="td-actions">
                                                            <button type="button" className="btn btn-info btn-link">
                                                                <i className="bx bxs-edit-alt"></i>
                                                            </button>
                                                            <button type="button" className="btn btn-danger btn-link">
                                                                <i className="bx bx-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" className="btn btn-info btn-simple btn-link">
                                                                <i className="bx bxs-edit-alt"></i>
                                                            </button>
                                                            <button type="button" className="btn btn-danger btn-simple btn-link">
                                                                <i className="bx bx-trash"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Unfollow 5 enemies from twitter</td>
                                                        <td className="td-actions text-right">
                                                            <button type="button" className="btn btn-info btn-simple btn-link">
                                                                <i className="bx bxs-edit-alt"></i>
                                                            </button>
                                                            <button type="button" className="btn btn-danger btn-simple btn-link">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;

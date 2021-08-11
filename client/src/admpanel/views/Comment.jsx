import React from 'react'
import tensei from 'assets/images/poster/tensei-shitara.jpg';
import death from 'assets/images/poster/death-march.jpg';
import loghorizon from 'assets/images/poster/log-horizon.jpg';
import user from 'assets/images/devin.jpg';

function Comment() {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header pb-2">
                        <h4 className="card-title">Novel Comment</h4>
                        <p className="card-category">Here is a file-file for novel</p>
                    </div>
                    <div className="card-body p-0">
                        <div className="row no-gutters">
                            <div className="col-md-3 border-right">
                                <div className="head-chat b-right">
                                    <span className="font-rhd-bold">Live Comment</span>
                                    <span className="option">
                                        <i className='bx bx-refresh'></i>
                                    </span>
                                </div>
                                <div className="search-box mb-2">
                                    <div className="input-wrapper p-2">
                                        <i className='bx bx-search'></i>
                                        <input type="text" placeholder="Search novel ..." />
                                    </div>
                                </div>
                                <div className="h6 font-weight-6 pl-3 mb-1">List Novel</div>
                                <ul className="list-novel">
                                    <li className="novel-drawer novel-drawer-onhover">
                                        <div className="poster" style={{width: "40px", height: "60px"}}>
                                            <img src={tensei} alt="novel-poster" className="w-100 img-fluid rounded" />
                                        </div>
                                        <div className="description">
                                            <div className="h6">Tensei Shitara Slime Det...</div>
                                            <p className="">32 Comment</p>
                                        </div>
                                        <span className="time small">13.21</span>
                                    </li>
                                    <li className="novel-drawer novel-drawer-onhover">
                                        <div className="poster" style={{width: "40px", height: "60px"}}>
                                            <img src={death} alt="novel-poster" className="w-100 img-fluid rounded" />
                                        </div>
                                        <div className="description">
                                            <div className="h6">Death March Karra</div>
                                            <p className="">21 Comment</p>
                                        </div>
                                        <span className="time small">13.21</span>
                                    </li>
                                    <li className="novel-drawer novel-drawer-onhover">
                                        <div className="poster" style={{width: "40px", height: "60px"}}>
                                            <img src={loghorizon} alt="novel-poster" className="w-100 img-fluid rounded" />
                                        </div>
                                        <div className="description">
                                            <div className="h6">Log Horizon</div>
                                            <p className="">17 Comment</p>
                                        </div>
                                        <span className="time small">13.21</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-9">
                                <div className="head-chat">
                                    <span className="font-rhd-bold">Tensei Shitara Slime Detta-Ken</span>
                                    <span className="option">
                                        <i className='bx bx-refresh'></i>
                                    </span>
                                </div>
                                <ul className="comment-panel">
                                    <li className="comment-bubble">
                                        <div className="row no-gutters">
                                            <div className="col-auto mr-3">
                                                <img src={user} alt="user-image" className="profile-image" />
                                            </div>
                                            <div className="col">
                                                <div className="h6 mb-1 pb-2 border-bottom font-weight-6">
                                                    <span>Devin Liu</span>
                                                    <i className='bx bx-trash'></i>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus totam quos amet eligendi iure reprehenderit autem, sit rerum numquam non laboriosam accusamus error commodi. Consectetur, culpa fugiat? Repellat, alias aliquid.</p>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus totam quos amet eligendi iure reprehenderit autem, sit rerum numquam non laboriosam accusamus error commodi. Consectetur, culpa fugiat? Repellat, alias aliquid.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="comment-bubble">
                                        <div className="row no-gutters">
                                            <div className="col-auto mr-3">
                                                <img src={user} alt="user-image" className="profile-image" />
                                            </div>
                                            <div className="col">
                                                <div className="h6 mb-1 pb-2 border-bottom font-weight-6">
                                                    <span>Devin Liu</span>
                                                    <i className='bx bx-trash'></i>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus totam quos amet eligendi iure reprehenderit autem, sit rerum numquam non laboriosam accusamus error commodi. Consectetur, culpa fugiat? Repellat, alias aliquid.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="comment-bubble">
                                        <div className="row no-gutters">
                                            <div className="col-auto mr-3">
                                                <img src={user} alt="user-image" className="profile-image" />
                                            </div>
                                            <div className="col">
                                                <div className="h6 mb-1 pb-2 border-bottom font-weight-6">
                                                    <span>Devin Liu</span>
                                                    <i className='bx bx-trash'></i>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur ...</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="comment-bubble">
                                        <div className="row no-gutters">
                                            <div className="col-auto mr-3">
                                                <img src={user} alt="user-image" className="profile-image" />
                                            </div>
                                            <div className="col">
                                                <div className="h6 mb-1 pb-2 border-bottom font-weight-6">
                                                    <span>Devin Liu</span>
                                                    <i className='bx bx-trash'></i>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus totam quos amet eligendi iure reprehenderit autem, sit rerum numquam non laboriosam accusamus error commodi. Consectetur, culpa fugiat? Repellat, alias aliquid.</p>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus totam quos amet eligen...</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="comment-bubble">
                                        <div className="row no-gutters">
                                            <div className="col-auto mr-3">
                                                <img src={user} alt="user-image" className="profile-image" />
                                            </div>
                                            <div className="col">
                                                <div className="h6 mb-1 pb-2 border-bottom font-weight-6">
                                                    <span>Devin Liu</span>
                                                    <i className='bx bx-trash'></i>
                                                </div>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus totam quos amet eligendi iure reprehenderit autem, sit rerum numquam non laboriosam accusamus error commodi. Consectetur, culpa fugiat? Repellat, alias aliquid.</p>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus totam quos amet eligendi iure reprehenderit autem, sit rerum numquam non laboriosam accusamus error commodi. Consectetur, culpa fugiat? Repellat, alias aliquid.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment

import React from 'react';
import noposter from 'assets/images/image-not-available.jpg';

function NovelDetailLeft(props) {
    const novel = props.novel
    return (
        <div className="col-sm-12 col-md-2 pb-2">
            <div className="row">
                <div className="col-12 poster mb-3">
                    {
                        novel.poster ?
                            <img src={`data:image/png;base64,${novel.poster}`} className="img-fluid rounded w-100" alt="poster-img" />
                        :
                            <img src={noposter} className="img-fluid rounded w-100" alt="poster-img" />
                    }
                </div>
                <div className="col-12 mb-2">
                    <div className="h6 mb-0"><b>Type</b></div>
                    <p className="font-16 font-weight-5 mb-1">{novel.type === 'WN' ? 'Web Novel' : 'Light Novel'} ({novel.type})</p>
                </div>
                <div className="col-12 mb-2">
                    <div className="h6 mb-0"><b>Total Chapter</b></div>
                    <p className="font-16 font-weight-5 mb-1">224</p>
                </div>
                <div className="col-12 mb-2">
                    <div className="h6 mb-0"><b>Genre</b></div>
                    <p className="font-16 font-weight-5 mb-1">{
                        novel.genre.map((g, k) => {
                            return <span key={k} className="badge badge-info mr-1">{g}</span>
                        })
                    }</p>
                </div>
                <div className="col-12 mb-2">
                    <div className="h6 mb-0"><b>Language</b></div>
                    <p className="font-16 font-weight-5 mb-1">{novel.language}</p>
                </div>
                <div className="col-12 mb-2">
                    <div className="h6 mb-0"><b>Author</b></div>
                    <p className="font-16 font-weight-5 mb-1">{novel.author}</p>
                </div>
                <div className="col-12 mb-2">
                    <div className="h6 mb-0"><b>Year</b></div>
                    <p className="font-16 font-weight-5 mb-1">{novel.year}</p>
                </div>
            </div>
            {/* <div className="info">
                <div className="w-100">
                    <b>Type</b>
                    <p className="mb-0">{novel.type === 'WN' ? 'Web Novel' : 'Light Novel'} ({novel.type})</p>
                </div>
                <hr className="my-2" />
                <div className="w-100">
                    <b>Total Chapter</b>
                    <p className="mb-0">224</p>
                </div>
                <hr className="my-2" />
                <div className="w-100">
                    <b>Genre</b><br />
                    {
                        novel.genre.map((g, k) => {
                            return <span key={k} className="badge badge-info mr-1">{g}</span>
                        })
                    }
                </div>
                <hr className="my-2" />
                <div className="w-100">
                    <b>Language</b>
                    <p className="mb-0">{novel.language}</p>
                </div>
                <hr className="my-2" />
                <div className="w-100">
                    <b>Author</b>
                    <p className="mb-0">{novel.author}</p>
                </div>
                <hr className="my-2" />
                <div className="w-100">
                    <b>Year</b>
                    <p className="mb-0">{novel.year}</p>
                </div>
            </div> */}
        </div>
    )
}

export default NovelDetailLeft

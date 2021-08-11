import React from 'react'
import useAuth from 'helpers/Context';
// import Showcase from 'app/components/Showcase';
import Banner from 'app/includes/Banner';
// import overlord from 'assets/images/poster/overlord.jpg';
import api from 'services/restapi';
import noposter from 'assets/images/image-not-available.jpg'
import * as g from 'services/global';
import { Link, useHistory } from 'react-router-dom';

function Home() {
    const {user} = useAuth()
    const [novel, setNovel] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        async function loadAllNovel() {
            await api.get('novel/')
                .then(res => {
                    const {data} = res.data
                    setNovel(data)
                })
                .catch(err => {
                    return false
                })
            setLoading(false)
        }
        loadAllNovel()
    }, [])

    const fetchData = (data) => {
        if (data) {
            return data.map((novel, i) => {
                return (
                    <div key={i} className="col-sm-12 col-md-3 my-2">
                        <div className="novel--box">
                            <Link to={`/view/${novel.slug}`} className="box--image cursor-pointer">
                                {
                                    novel.poster ?
                                        <img src={`data:image/png;base64,${novel.poster}`} className="w-100" alt="thumb-novel" />
                                    :
                                        <img src={noposter} className="w-100" alt="thumb-novel" />
                                }
                            </Link>
                            <div className="box--text">
                                <Link to={`/view/${novel.slug}`} className="mb-0 h6"><strong>{g.subStr(novel.name, 19)}</strong></Link>
                                <span className="rating">
                                    <i className="bx bxs-star text-warning mr-1"></i>
                                    <i className="bx bxs-star text-warning mr-1"></i>
                                    <i className="bx bxs-star text-warning mr-1"></i>
                                    <i className="bx bxs-star text-warning mr-1"></i>
                                    <i className="bx bxs-star text-warning mr-1"></i>
                                    (4.0)
                                </span>
                                {/* <p>{g.subStr(ReactHtmlParser(novel.synopsis), 50)}!</p> */}
                                <div className="chapter">
                                    <button className="">
                                        Chapter 01
                                    </button>
                                    <button className="">
                                        Chapter 01
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        } else {
            return null
        }
    }
    return (
        <React.Fragment>
            <Banner />
            <div className="container py-4">
                <div className="row">
                    {
                        loading ?
                            <div className="col-sm-12 text-center">
                                <div className="spinner-border text-success mr-1" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-success mr-1" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="spinner-border text-success" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <div className="h4 mt-3">Sedang memuat halaman...</div>
                            </div>
                        :
                            fetchData(novel)
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home

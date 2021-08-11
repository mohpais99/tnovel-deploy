import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from 'helpers/Context';
import api from 'services/restapi';
// import ReactHtmlParser from 'react-html-parser';
import LoadingCard from 'admpanel/components/LoadingCard';
import NovelDetailLeft from 'admpanel/includes/NovelDetailLeft';
import NovelDetailRight from 'admpanel/includes/NovelDetailRight';

function DetailNovel() {
    const {handleModal, notify} = useAuth()
    const [loading, setLoading] = React.useState(true);
    const [novel, setNovel] = React.useState();
    const history = useHistory()
    const params = useParams()

    React.useEffect(() => {
        async function loadField() {
            await api.put(`novel/${params.novel}`)
                .then(res => {
                    var {data} = res.data
                    setNovel(data)
                })
                .catch(err => {
                    console.log(err);
                    return false
                })

            setLoading(false)
        }
        loadField()
    }, [])
    
    return (
        <div className="row mb-4">
            <div className="col-sm-12 mb-3">
                <div className="row no-gutters">
                    <button type="button" onClick={() => history.push('/adm-panel/novel-archive/')} className="btn btn-sm btn-success d-flex align-items-center">
                        <i className='bx bx-arrow-back mr-1'></i>
                        Back
                    </button>
                </div>
            </div>
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-header pb-2">
                        <div className="row">
                            <div className="col">
                                <h4 className="card-title">Novel Detail</h4>
                                <p className="card-category">Here is a file-file for novel</p>
                            </div>
                            <div className="ml-auto my-auto col-auto d-none d-md-block">
                                <button type="button" onClick={() => handleModal('modal-chapter', novel.id)} className="btn btn-sm btn-primary d-flex align-items-center">
                                    <i className="bx bx-plus-medical mr-1"></i>
                                    Add Chapter
                                </button>
                            </div>
                        </div>
                    </div>
                    {
                        loading ?
                            <LoadingCard />
                        :
                            <div className="card-body border-top">
                                {
                                    novel && 
                                        <div className="row novel-detail">
                                            <NovelDetailLeft novel={novel} />
                                            <NovelDetailRight novel={novel} api={api} notify={notify} />
                                        </div>
                                }
                            </div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default DetailNovel

import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import * as g from 'services/global';

function PageContext(props) {
    const {chapter} = props
    return (
        <div className="row">
            <div className="col-12 pb-2 heading">
                <div className="subtitle">Chapter {chapter.chapter}</div>
                <div className="title font-rhd-bold">{chapter.title}</div>
                <div className="row no-gutters">
                    <div className="text-muted mr-2">
                        <i className='bx bx-user-circle'></i>{' '}
                        Translator {chapter.published_by}
                    </div>
                    <div className="text-muted">
                        <i className='bx bx-calendar'></i>{' '}
                        Rilis pada {g.getDateInd(chapter.published_at)}
                    </div>
                </div>
            </div>
            <div className="col-12 py-2 px-3 font-16 body">
                {ReactHtmlParser(chapter.description)}
            </div>
        </div>
    )
}

export default PageContext

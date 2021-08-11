import React from 'react'

function ButtonBack(props) {
    return (
        <div className="col-sm-12 mb-3">
            <div className="row no-gutters">
                {/* <button type="button" onClick={() => props.useHistory().push(props.route)} className="btn btn-sm btn-success d-flex align-items-center"> */}
                <button type="button" onClick={() => props.useHistory().push(props.route)} className="btn btn-sm btn-success d-flex align-items-center">
                    <i className='bx bx-arrow-back mr-1'></i>
                    Back
                </button>
            </div>
        </div>
    )
}

export default ButtonBack

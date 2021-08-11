import React from 'react';

function LoadingTable(props) {
    return (
        <tr>
            <td colSpan={props.cols} className="text-center">
                <div className="spinner-border text-success mr-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success mr-1" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </td>
        </tr>
    )
}

export default LoadingTable

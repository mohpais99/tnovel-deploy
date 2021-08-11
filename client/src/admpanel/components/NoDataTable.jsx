import React from 'react'

function NoDataTable(props) {
    return (
        <tr>
            <td colSpan={props.cols} className="text-center"><h6>No Data!</h6></td>
        </tr>
    )
}

export default NoDataTable

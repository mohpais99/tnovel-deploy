import React from 'react';

function LoadingCard() {
    return (
        <div className="col-sm-12">
            <div className="card">
                <div className="card-body">
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingCard

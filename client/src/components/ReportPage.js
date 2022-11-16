import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ReportPage = () => {
    return (
        <Fragment>
            <div className="container individual-page">
                <div className="pb-1">
                    <Link to="/"><Button color="bg-primary" className="px-5">Go Back</Button></Link>
                </div>
            </div>
        </Fragment>
    )
}

export default ReportPage;
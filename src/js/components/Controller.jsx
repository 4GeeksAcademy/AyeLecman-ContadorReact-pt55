import React from "react";

const Controller = () => {
    return (
        <div className="d-flex flex-column align-items-center border border-black p-3">
            <h1 className="mb-4">Control the counter</h1>
            <div className="btn-group justify-content-center gap-3" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-dark btn-lg">Stop</button>
                <button type="button" className="btn btn-dark btn-lg">Reboot</button>
                <button type="button" className="btn btn-dark btn-lg">Resume</button>
            </div>
        </div>
    );
};

export default Controller;


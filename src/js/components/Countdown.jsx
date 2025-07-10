import React from "react";

const Countdown = () => {
    return (
        <form className="row g-3 p-1 m-5 justify-content-center align-items-center">
            <div className="col-auto">
                <label for="staticNumber" className="fs-1">Countdown</label>
            </div>
            <div className="col-auto">
                <label htmlFor="inputNumber" className="visually-hidden"></label>
                <input type="number" className="form-control" id="inputNumber" placeholder="tipe here any number" style={{boxShadow: "none", borderColor: "#ccc"}}/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-dark">Start</button>
            </div>
        </form>
    );
};

export default Countdown;
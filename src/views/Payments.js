import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";


export const Payments = () => {
    return (
        <div style={{height: "100vh", width:"100vw", marginTop: "100px"}}>
            <Navbar />
            <div className="container m-auto">
                <div>
                <div className="card w-75 m-auto" >
                    <div className="card-body">
                        <h5 className="card-title" style={{color:"#000"}}>Billing Details</h5>
                        <p className="card-text"  style={{color:"#000"}}>LALAL</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


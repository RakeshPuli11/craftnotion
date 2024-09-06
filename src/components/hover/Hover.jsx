import React from "react";
import "./hover.css";

const Hover = ()=>{
    return(
        <section className="hover">
        <div className="box box-left">
            <p>first</p>
            <p>content</p>
            <p>box</p>
        </div>
        <div className="box box-middle">
        <p>middle</p>
            <p>content</p>
            <p>box</p>
        </div>
        <div className="box box-right">
        <p>right</p>
            <p>content</p>
            <p>box</p>
        </div>
        </section>
    )
}

export default Hover;
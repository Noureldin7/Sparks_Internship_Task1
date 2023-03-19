import React from "react";
import Row from "./Row"
import "../styles/table.css"
import { Link } from "react-router-dom";
function Table({title,labels,data,pages}) {
    console.log(pages)
    return (
        <>
            <div className="table">
                <h1 className="title">{title}</h1>
                <Row data={labels} className="labels"></Row>
                {data?data.map(row => {
                    return <Row data={row} className={title=='Transfers'?"transfer_row":undefined}></Row>
                }):null}
                {pages?<div className='pages'>
                {
                    pages.map((page)=>{
                        return(
                            <Link to={`?pageno=${page+1}`}>{page+1}</Link>
                        )
                    })
                }
                </div>:null}
            </div>
        </>
    );
}

export default Table;

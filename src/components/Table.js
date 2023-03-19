import React, {useState} from "react";
import Row from "./Row"
import "../styles/table.css"
function Table({title,labels,data}) {
    return (
        <>
            <div className="table">
                <h1 className="title">{title}</h1>
                <Row data={labels}></Row>
                {data.map(row => {
                    return <Row data={row}></Row>
                })}
            </div>
        </>
    );
}

export default Table;

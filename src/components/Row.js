import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/row.css"

function Row({data}) {
    const navigate = useNavigate()
    return (
        <div className="row" onClick={()=>navigate("/view/"+data.id)}>
            {Object.keys(data).map((key)=>{
                return <span className="record" id={key}>{data[key]}</span>
            })}
        </div>
    );
}

export default Row;
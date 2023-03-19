import React from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/row.css"

function Row({data,className}) {
    const navigate = useNavigate()
    return (
        <div className={className?'row '+className:'row'} onClick={className?null:()=>navigate("/view/"+data.id)}>
            {Object.keys(data).map((key)=>{
                return <span className="record" id={key}>{data[key]}</span>
            })}
        </div>
    );
}

export default Row;
import React, { useEffect,useState } from 'react'
import Table from "../components/Table"
import { get } from '../utils/APICallers';
function Transfers() {
    const [transfers, setTransfers] = useState([]);
    useEffect(()=>{
        get("http://localhost:3001/api/transfers").then((res)=>{
            res.json().then((data)=>{
                setTransfers(data.result)
            })
        })
    },[])
    return (
        <>
            <Table title="Transfers" labels={{'Sender':'Sender','Recipient':'Recipient','Amount':'Amount','transfer_date':'Transfer Date'}} data={transfers}></Table>
        </>
    )
}
export default Transfers
import React, { useEffect,useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Table from "../components/Table"
import { get } from '../utils/APICallers';
function Transfers() {
    const [transfers, setTransfers] = useState(null);
    const [pages, setPages] = useState(null);
    const [query, setQuery] = useSearchParams()
    const pageno = query.get('pageno') || 1
    useEffect(()=>{
        get("http://localhost:3001/api/transfers",{pageno:pageno}).then((res)=>{
            res.json().then((data)=>{
                setTransfers(data.result)
                setPages([...Array(data.pages).keys()])
            })
        })
    },[pageno])
    return (
        <>
            {(transfers&&pages)?<Table title="Transfers" labels={{'Sender':'Sender','Recipient':'Recipient','Amount':'Amount','transfer_date':'Transfer Date'}} data={transfers} pages={pages}></Table>:<Loading></Loading>}
        </>
    )
}
export default Transfers
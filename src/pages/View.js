import React, { useEffect,useState } from 'react'
import Table from "../components/Table"
import { get } from '../utils/APICallers';
function View() {
    const [customers, setCustomers] = useState([]);
    useEffect(()=>{
        get("http://localhost:3001/api/view").then((res)=>{
            res.json().then((data)=>{
                setCustomers(data.result)
            })
        })
    },[])
    return (
        <>
            <Table title="Customers" labels={{'id':'ID','name':'Name','email':'E-mail','current_balance':'Balance'}} data={customers}></Table>
        </>
    )
}
export default View
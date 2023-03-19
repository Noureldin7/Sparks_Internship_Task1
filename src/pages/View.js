import React, { useEffect,useState } from 'react'
import Loading from '../components/Loading';
import Table from "../components/Table"
import { get } from '../utils/APICallers';
function View() {
    const [customers, setCustomers] = useState(null);
    useEffect(()=>{
        get("/view").then((res)=>{
            res.json().then((data)=>{
                setCustomers(data.result)
            })
        })
    },[])
    return (
        <>
            {customers?<Table title="Customers" labels={{'id':'ID','name':'Name','email':'E-mail','current_balance':'Balance'}} data={customers}></Table>:<Loading></Loading>}
        </>
    )
}
export default View
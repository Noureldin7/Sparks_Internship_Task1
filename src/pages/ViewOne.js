import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from "../components/Card"
import { get } from '../utils/APICallers';
function View() {
    const [customer, setCustomer] = useState({});
    const {id} = useParams();
    useEffect(()=>{
        get(`http://localhost:3001/api/view/${id}`).then((res)=>{
            res.json().then((data)=>{
                setCustomer(data.result[0])
            })
        })
    },[])
    return (
        <Card data={customer}></Card>
    )
}
export default View
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Card from "../components/Card"
import { get } from '../utils/APICallers';
function ViewOne() {
    const [customer, setCustomer] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        get(`/view/${id}`).then((res)=>{
            res.json().then((data)=>{
                setCustomer(data.result[0])
            })
        })
    },[])
    return (
        <>
            {customer?<Card data={customer}></Card>:null}
        </>
    )
}
export default ViewOne
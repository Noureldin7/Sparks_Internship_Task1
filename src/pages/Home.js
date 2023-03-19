import React from 'react'
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate()
    return (
        <>
        <h1>Home Page</h1>
        <button onClick={()=>navigate('/view')}>View Customers</button>
        </>
    )
}
export default Home
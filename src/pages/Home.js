import React from 'react'
import { useNavigate } from 'react-router-dom';

import "../styles/home.css"

function Home() {
    const navigate = useNavigate()
    return (
        <>
        <div className='home'>
            <h1>Banking System</h1>
            <div className='buttons'>
                <button className='button' onClick={()=>navigate('/view')}>Customers</button>
                <button className='button' onClick={()=>navigate('/transfers')}>Transfers</button>
            </div>
        </div>
        </>
    )
}
export default Home
import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Transfers from './pages/Transfers';
import View from './pages/View'
import ViewOne from './pages/ViewOne'
function RouterX(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NavBar/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/view" element={<View/>}/>
                    <Route path="/view/:id" element={<ViewOne/>}/>
                    <Route path="/transfers" element={<Transfers/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<RouterX/>);



/* <Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/reservation" element={<Reservation/>}/>
<Route path="/profile" element={<ViewProfile/>}/>
<Route path="/viewreservations" element={<ViewReservations/>}/>
<Route path="/admin">
    <Route path="/admin/users" element={<AdminUsersView/>}/>
</Route>
<Route path="/stadium">
    <Route path="/stadium/create" element={<StadiumCreate/>}/>
</Route>
<Route path="/match">
    <Route path="/match/create" element={<MatchCreate/>}/>
    <Route path="/match/edit" element={<MatchEdit/>}/>
</Route> */
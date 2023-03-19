import {url} from "./url"
export async function post(route,payload){
    const response = await fetch(url+route,{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(payload)
    });
    return response;
}
export async function put(route,payload){
    const response = await fetch(url+route,{
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(payload)
    });
    return response;
}
export async function get(route,params){
    const urlExtend = params?"?"+new URLSearchParams(params):""
    const response = await fetch(url+route+urlExtend,{
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type':'application/json'
        }
    });
    return response;
}
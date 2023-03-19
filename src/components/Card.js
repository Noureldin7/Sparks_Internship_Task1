import React, {useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import "../styles/card.css"
import { get,put } from "../utils/APICallers";

function Card({data}) {
    const navigate = useNavigate()
    const [recipients, setRecipients] = useState([]);
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState("");
    useEffect(()=>{
        get(`/search/${data.id}`,{'name':""}).then((res)=>{
            res.json().then((data)=>{
                setRecipients(data.result)
            })
        })
    },[])
    function search(txt){
        const newChar = txt[txt.length-1]
        if(recipient.length>txt.length||(newChar>='a'&&newChar<='z')||(newChar>='A'&&newChar<='Z')||(newChar>='0'&&newChar<='9'))
        {
            setRecipient(txt)
            get(`/search/${data.id}`,{'name':txt}).then((res)=>{
                res.json().then((data)=>{
                    setRecipients(data.result)
                })
            })
        }
    }
    function changeAmount(amount){
        if(amount>data.current_balance)
        {
            setAmount(data.current_balance)
        }
        else if(amount<0)
        {
            setAmount(0)
        }
        else
        {
            setAmount(amount)
        }
    }
    function transfer(){
        if(!amount) {alert("Please specify amount");return;}
        const substrs = recipient.split(',')
        if(!substrs[1]) {alert("Please specify recipient");return;}
        put(`/transfer`,{senderId:data.id,recipientId:substrs[0],amount:amount}).then((res)=>{
            navigate('/view')
        })
    }
    return (
        <>
            <div className="card">
                <div className="info">
                    {Object.keys(data).map((key)=>{
                        if(key=='id')return<></>;
                        else if(key=='name')return <span className="field" id={key+"_card"}>{data[key]}</span>
                        else if(key=='email') return <span className="field" id={key}>{`Email: `+data[key]}</span>
                        else if(key=='current_balance') return <span className="field" id={key}>{`Balance: `+data[key]}</span>
                    })}
                </div>
                <div className="transfer">
                    <input list="recip" className="field" placeholder="Recipient" value={recipient} onChange={(e)=>search(e.target.value)}></input>
                    <datalist id="recip" className="field">
                        {recipients.map((one)=>{
                            return(<option value={`${one.id}, ${one.name}`}></option>)
                        })}
                    </datalist>
                    <input className="field" placeholder="Amount" type='number' value={amount} onChange={(e)=>changeAmount(e.target.value)}></input>
                    <button className="button field" onClick={transfer}>Transfer Amount</button>
                </div>
            </div>
        </>
    );
}

export default Card;
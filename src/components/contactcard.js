import React from "react";
import "./contactlist.css";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
    const {id,name,email,image} = props.contact;
    return (
        
        <div className="item">
            <Link to = {'/contact/${id}'}>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="email">{email}</div>
                </div></Link>
                {/* <button className="btn" onClick={ () => props.clickhandler(id)}>
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 2v2h6V2H9zM4 6v16h16V6H4zm2 2h12v12H6V8z"/>
    </svg> 
  </button> */}
  <i className="trash alternate outline icon" style={{color:"red" , marginTop:"2px" ,cursor:"pointer"}} 
      onClick={ () => props.clickhandler(id)}
  ></i>
            </div>
    );

};

export default ContactCard;
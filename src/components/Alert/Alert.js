import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import './Alert.css';

export default function Alert(props) {
  // const capitalizeLetter = (word)=> {
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // }

  return (
    <div style={{height: '25px'}}>
      {props.alert && <div>
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong><BsCheckCircleFill className='alertIcon' /></strong> {props.alert.msg}
        </div>
      </div>}
    </div>
  )
}

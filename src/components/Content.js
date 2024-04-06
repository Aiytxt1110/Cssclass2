import React, { useState } from 'react';
import { FaCopy } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import {Constantsprop} from './Constants'
import Classnamecopy from './Classnamecopy'
import Adddata from './Adddata'

function Popup() {
    return (
      <div className='popupcopied'><FaRegCheckCircle/> Copied </div>
    )
  }

export default function Content({value}) {
  const [selectedProvider, setSelectedProvider] = useState(null);

  // const handleCopyName = (name) => {
  //   navigator.clipboard.writeText(name)
  //   setSelectedProvider(name);
  // };

  const handleClickProvider = (name) => {
    setSelectedProvider(name === selectedProvider ? null : name);
    navigator.clipboard.writeText(name)
    setSelectedProvider(name);
  };

  const filteredConstants = Constantsprop.filter(item => item.type === value);
  return (
    <div style={{width:'100%'}}>  
      <div style={{textAlign:'left'}}>
        <h3>To fuether enhance the desig of the website, we don't have to new CSS files or multiple CSS classes</h3>
        <p>Just&nbsp;<Classnamecopy/>&nbsp;to copy/paste them into the CSS file and apply class here</p>
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>Class Name</th>
              <th>Properties</th>
            </tr>
          </thead>
          <tbody>
            {filteredConstants.map((constant, index) => (
              <tr key={index}>
                <td onClick={() => handleClickProvider(constant.name)}>{constant.name}
                  {selectedProvider === constant.name && <Popup/>} 
                </td>
                <td>{constant.proper}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Adddata/>
    </div>
  )
}

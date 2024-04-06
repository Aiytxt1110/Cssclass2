import React,{ useState,useEffect  } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Select from 'react-select';
import Content from './components/Content'
import {Constantsprop} from './components/Constants'
import DataToDatabase from './components/addDataToDatabase'

export default function App({type}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    const uniqueTypes = [...new Set(Constantsprop.map(item => item.type))];
    const sortedOptions = uniqueTypes.sort((a, b) => a.localeCompare(b));
    const formattedOptions = sortedOptions.map(option => ({
      value: option,
      label: option
    }));
    setOptions(formattedOptions);
    if (formattedOptions.length > 0) {
      setSelectedOption(formattedOptions[0]);
    }
  }, []);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Selected Option:", selectedOption);
  };
  return (
    <div className="container">      
      <div className='header'>
        <DataToDatabase/>
        <h1>CSS Classname</h1>
        <div className="menu">
          <Select 
            className='input' 
            options={options} 
            value={selectedOption} 
            onChange={handleChange} 
            placeholder="Select an Classname"/>
        </div>
        <hr style={{width:'100%', padding:'0 20px'}}/>
      </div>
      <div className='content'>
          <div className='class'>
          {selectedOption && <Content value={selectedOption.value} />}
          </div>
      </div>
    </div>
  );
}
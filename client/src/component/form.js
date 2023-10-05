import React, { useState } from 'react';
import axios from 'axios'
import Youtube from './youtube';
 
const SimpleForm = () => {
  const [inputValue, setInputValue] = useState({link : '', videoId:null, videoready:0});

  const handleInputChange = (e) => {
    const {name, value} = e.target
    setInputValue({
      [name]:value,
      videoId : null,
      videoready : 0
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/", inputValue).then( response=> { 
    setInputValue({...inputValue, videoId: response.data, videoready : 1})
    console.log(inputValue)
    })
    
  };

  return (
    <div>
      <h2>Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          paste the you tube link here:
          <input type="text" name="link" value={inputValue.link} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
        < Youtube videoId={inputValue.videoId} videoready={inputValue.videoready}/>
      </form>
    </div>
  );
};

export default SimpleForm;


const api_key = "AIzaSyB9_kd0EzRjxSY9AIY08vURrMrA0NlYTSE"
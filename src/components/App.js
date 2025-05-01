
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[gender, setGender] = useState("male")
  const[size, setSize] = useState('small')


  function handleGenderChange(e){
    setGender(e.target.value)
    setSize('')
  }
  function handleSizeChange(e){
    setSize(e.target.value)

  }
  console.log(gender);
  console.log(size);
  
  
  return (
    <div>
      <h2>Select Your Gender</h2>
      <label>
        <input type="radio" name="gender" value= "male" checked= {gender=="male"}  onChange={handleGenderChange} />
        Male
      </label>
      <label>
        <input type="radio" name="gender" value= "female" checked = {gender == "female"} onChange={handleGenderChange} />
        Female
      </label>

      {
        gender ==="male" && (
          <div>
            <h2>Select your shirt size:</h2>
            <br />  
            <select name="" id="" value={size} onChange={handleSizeChange}>
              <option value="">Select</option>
              <option value="Small">Small</option>
              <option value="medium">medium</option>
              <option value="large">large</option>
            </select>
          </div>
        )
      }
      {
        gender === "female" && (
          <div>
            <h2>Select your dress size:</h2>
            <br />
            <select name="" id="" value={size} onChange={handleSizeChange}>
            <option value="">Select</option>
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="6">6</option>
            </select>
          </div>
        )
      }

    </div>
  )
}

export default App

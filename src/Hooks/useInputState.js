import {useState} from 'react'; 

export default initilalValue => {
  const [value, setValue] = useState(initilalValue); 
  const handleChange = e => {
    setValue(e.target.value); 
  }
  const reset =()=>{
    setValue(""); 
  }
  return [value,handleChange,reset]; 
}
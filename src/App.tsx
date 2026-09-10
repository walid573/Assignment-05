
import { useState } from 'react';
import './App.css'
import type { devStackType } from './type/type';


const dateFetch = async():Promise<devStackType[]> =>{
    const res = await fetch("../public/data.json");
    const data = await res.json();
    return data
}


function App() {
  
const [promiseData] = useState(()=>dateFetch())
  
  
  return (
    <>
      
    </>
  )
}

export default App

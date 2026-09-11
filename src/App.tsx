
import { Suspense, useState } from 'react';
import './App.css'
import type { devStackType } from './type/type';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Technology from './components/Technology/Technologies';


const dateFetch = async():Promise<devStackType[]> =>{
    const res = await fetch("/data.json");
    const data = await res.json();
    return data
}


function App() {
  
const [promiseData] = useState(()=>dateFetch())
  
  
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Technology promiseData={promiseData}></Technology>
      </Suspense>
    </>
  )
}

export default App

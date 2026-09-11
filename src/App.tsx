
import { Suspense, useState } from 'react';
import './App.css'
import type { devStackType } from './type/type';
import Nav from './components/Nav';
import Banner from './components/Banner';

import Technologies from './components/Technology/Technologies';
import Footer from './components/Footer';


const dataFetch = async():Promise<devStackType[]> =>{
    const res = await fetch("/data.json");
    const data = await res.json();
    return data
}


function App() {
  
const [promiseData] = useState(()=>dataFetch())

const [selectedTech, setSelectedTech] = useState<devStackType[]>([])
  
  return (
    <>
      <Nav ></Nav>
      <Banner></Banner>
      <Suspense fallback={<p>Loading...</p>}>
        <Technologies selectedTech={selectedTech} setSelectedTech={setSelectedTech} promiseData={promiseData}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App

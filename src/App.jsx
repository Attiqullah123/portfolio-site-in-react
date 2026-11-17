import { useEffect } from 'react'
import './App.css'

function App() {
  let posts;

  async function getPosts(){
    const res=await fetch("",{
      method:"GET"
    })
    const data=await res.json();
    console.log(data)
    posts=data;
  }

  useEffect(function(){
    getPosts()
  },[])

  return (
   <>
   <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ea nulla nobis cupiditate eos itaque quia facere magnam reiciendis non, repellendus ullam, voluptate tempore officia quisquam eveniet corporis neque ratione!</h1>
   <h1>{posts}</h1>
   </>
  )
}

export default App

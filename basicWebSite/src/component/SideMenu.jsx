import React ,{useState,useEffect} from 'react'
import './SideMenu.css'

const SideMenu = () => {
  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log('i am fine')
    if(count !==0){
      document.title = `chat (${count})`
    }else{
      document.title = `chat`
    }
  },[count])
  return (

    <div className="container-fluid">
{/* //    <div className="sidebox">
//     <div className="drop">
//         <div className="box1">
//         <div class="scrollmenu">
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   <a href="#home">Home</a>
//   <a href="#news">News</a>
//   <a href="#contact">Contact</a>
//   <a href="#about">About</a>
//   ...
// </div>
//         </div>
//     </div>
//    </div> */}

<div className="div">
<h1>{count}</h1>
<button onClick={()=>{setCount(count +1)}}>increase</button>
<button onClick={()=>{setCount(count -1)}}>increase</button>
<button onClick={()=>{setCount(count*0)}}>increase</button>
</div>

 </div>
  )
}

export default SideMenu

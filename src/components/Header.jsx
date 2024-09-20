import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    const menuItems = [
        {
            title:"Home",
            key:"/"
        },
        {
            title:"Projects",
            key:"/projects"
        },
        {
            title:"Contact",
            key:"/contact"
        },
        {
            title:"Courses",
            key:"/courses"
        }
    ]
  
  return (
    <div className='text-white font-mont'>
      <div className="flex bg-theme justify-between items-center p-2 shadow-lg">
        <div>
         <h1 className='text-4xl font-semibold p-3'>coder<span className="blinking">_🤣</span></h1>
        </div>
        <div>
           {/* {menuItems.map((item) => {
            return <li key={item.key}>
              <Link to={`./${item.key}`}>{item.title}</Link>
            </li>
           })} */}
           <ul className='flex m-4 p-2 space-x-4 '>
           {menuItems.map((item) => {
                return (
                  <li className='list-none p-2' key={item.key}>
                    <Link to={item.key}>{item.title}</Link>
                  </li>
                );
              })}
           </ul>
        </div>
      </div> 
    </div>
  )
}

export default Header
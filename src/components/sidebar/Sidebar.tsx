import React from 'react'
import "./Sidebar.scss"

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarLeft">
            <div className='serverIcon'>
                <img src="./logo192.png" alt="" />
            </div>
            <div className='serverIcon'>
                <img src="./logo192.png" alt="" />
            </div>
        </div>
        <div className="sidebarRight">
            <div className="sidebarTop">
                <h3>ディスコード</h3>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
import React, { useState } from 'react'

function Home() {
    let [data, SetData] = useState([])
    fetch("https://api.github.com/users").then((e)=>e.json()).then((e)=>{console.log(e); SetData(e)})
    return(
        <div className='main_cnt'>
            {
                data.map((e)=>{
                    return(
                        <div className='profile_card'>
                            <img src={e.avatar_url} alt="avatar_image"/>
                            <div className='containt'>
                            <p>UserName : {e.login}</p>
                            <a href="#viewmore">Click to get User Details</a>
                            </div>
                        </div>
                         
                    )
                }

                )
            }
        </div>
    )
    
}

export default Home
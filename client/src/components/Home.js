import React, { useState, useEffect, useContext, Fragment } from 'react';
import { loginInfoContext } from './App'
import Post from './Post'
import $, { getJSON, data } from 'jquery';
import './App.css'
import Friends from './Friends'
import Guest from './Guest'
import Header from './Header'
const axios = require('axios');


function Home() {
    
    const [posts, setPosts] = useState([]);
    const props = useContext(loginInfoContext);

    console.log(posts); 
    useEffect(() => {

        if (props.auth) axios.get(`http://localhost:5000/user/post/get`)
            .then((res) => {
                console.log("Refresh ",props.refresh)
                console.log( "Data received is: ",typeof(res.data)) 
                var tempPost=Array(res.data)

                 setPosts(tempPost[0].data )
                console.log("Post after setost is: ",tempPost[0].data )
                
            })
            .catch((err) => {
                console.log(err);
            }) 
            
    },[props.refresh])
    


   

    const srcCode = <div id='home'>

      
        <div id='container' style={{ display: 'flex', marginTop:'11px'}}>

            <div id='feeds' style={{ width: '100%', height: '800px' }}>
                <div id='post-container'>
                    <ul id='post-container-list'>

                        {

                        posts.map((post) => {
                            return <Post post={post} />
                        })}

                    </ul>
                </div>
            </div>
            
        </div>

    </div>
    
   if(props.auth==0) return <Guest/>
   
   
    return (
        
        
         
       
       <div> 
            <Header/>
            {srcCode} 
        </div>
    );
}

export default Home;


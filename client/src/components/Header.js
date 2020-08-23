import React from 'react'
import home from '../assets/img/home.png'
import chat from '../assets/img/chat.png'
import addImage from '../assets/img/addImage.png'
import Search from './Search'
import notification from '../assets/img/notification.png'
import {Redirect} from 'react-router-dom'
import Avatar from 'react-avatar';
import $ from 'jquery'
import './App.css'
import { loginInfoContext } from './App'

function Header() {

    const onClickHandler=()=>{
        $('#dropdown-on-avatar').toggleClass('Visibility')
        
    }
    const loginInfo = React.useContext(loginInfoContext);
    const signOutUser = () => {

        loginInfo.setAuth(0);
        loginInfo.setUser("");
        localStorage.setItem('user', "")
        localStorage.setItem('auth', 0);
        localStorage.setItem('userDetails',"")
        
    }

    const UserDetails=JSON.parse(localStorage.getItem('userDetails'));
    const _id=UserDetails._id;

    console.log( "UserDetail is: ", typeof(UserDetails));
    return (
        <React.Fragment>
            <div  style={{backgroundColor:'white',display:'flex', justifyContent:'center',padding:'10px', borderBottom:'1px solid lightgrey', position:'fixed', top:'0px', width:'100%'}}>
                <div style={{backgroundColor:'white', display:'flex',justifyContent:'space-between',width:'70%'}}>
                    <div> <span style={{fontFamily:'cursive'}}>Fake Instagram </span> </div>
                    <div > <Search/> </div>
                    <div >
                    
                        <a href='/'> <img src={home} />  </a> 
                        <a href='#'> <img src={chat} />  </a> 
                        <a href='#'> <img src={notification} />  </a> 
                        <a href='/addImage'> <img src={addImage} />  </a> 
                        <Avatar name='shailendra'  round='20px'  size='40px' src='./upload/1590594824018.jpg' onClick={onClickHandler} />
                        
                        <ul id='dropdown-on-avatar' className='Visibility' style={{position:'absolute',right:'13%'}}> 
                            <li className='dropdown-item' ><a href={`/profile/${_id}`}>  My Profile</a></li>
                            <li  className='dropdown-item' ><a href='#' onClick={signOutUser} > Logout</a></li>
                        </ul>

                        
                    </div>

            </div>
            </div>


        </React.Fragment>
    )
}

export default Header

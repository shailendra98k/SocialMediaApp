import React, { Fragment } from 'react'
import {useState,useEffect} from 'react'
import $ from 'jquery'

function Search() {

    

    const onClickHandler=function(e){
        e.preventDefault();
        console.log("Clicked",e.target.value)
        if(e.target.value.length>0) {
            $.get(`http://localhost:5000/search/username/${e.target.value}`,(data,status)=>{
                console.log(data);
                if(data.length>0) {
                  $('#search-results').append(`<li>  <a  href='/profile/${data[0]._id}'> ${data[0].username} </a> </li>`)
                }
                else {
                    $('#search-results').empty();
                }
            })
        }
    } 

    return (
<Fragment>
    
<input onChange={onClickHandler} id='search_user' style={{width:'200px', height:'30px',color:'lightgrey', border:'1px solid lightgrey'}} placeholder='    Search'  type='text'/>
        <ul style={{ position:'absolute'}} id='search-results' >
            
        </ul>

</Fragment>

    )
}

export default Search


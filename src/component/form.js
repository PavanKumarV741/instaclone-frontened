import React,{ useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios'
import "./form.css"

function Form(){
    const [user,setuser]=useState({name:"",location:"",description:""})
    const navigate=useNavigate()
    function handle(e){
            setuser({...user,[e.target.name]:e.target.value})
            console.log(user)
    }
    const onSubmit=async (e)=>{
        e.preventDefault()
        const images=e.target.elements.images.files[0]
            console.log(images)
        const postdata= new FormData()
        postdata.append("images",images)
        postdata.append("name",user.name)
        postdata.append("location",user.location)
        postdata.append("description",user.description)
        console.log(postdata)
        try{
       const res= await axios.post("https://instaclone-backened.onrender.com/insta/data",postdata)
            // setuser({name:"",location:"",description:""})
            console.log(user)
            navigate('/postview')
            console.log(res)
        }
        catch(err){
            console.log(err)
        }
    }
    return(
    <div>
        <form className="form" onSubmit={(e)=>onSubmit(e)} >
            <div className="file">
                <input type="file" name="images" ></input>
            </div>
            <div>
                <label for="name">Name:</label>
            </div>
            <div>
                <input type="text" id="name" value={user.name} name="name" onChange={e=>handle(e)} ></input>
            </div>
            <div>
                <label for="location">Location:</label>
            </div>
            <div>
                <input type="text" id="location" name="location"  value={user.location} onChange={e=>handle(e)}></input>
            </div>
            <div>
                <label for="description">Description:</label>
            </div>
            <div>
                <input type="text" name="description" id="description" value={user.description} onChange={e=>handle(e)}></input>
            </div>
            <button type="submit" className="submit">submit</button>
            
        </form>
    </div>

    )
}
export default Form
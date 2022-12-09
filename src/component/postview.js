import React from "react";
import Camera from "./assets/camera.png"
import Logo from "./assets/logo.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./postview.css"
import axios from "axios";

function Postview() {
    const [userData, setuserData] = useState([]);
    // useEffect(()=> {
    //     fetch('http://localhost:3004/user').then((data)=> {
    //         return (data.json())
    //     }).then((userData)=> {
    //         setUserData(userData);
    //         console.log(userData)
    //     })
    // }, []);
    useEffect(()=>{
        axios.get("https://instaclone-backened.onrender.com/insta/data").then((res)=>{
            console.log(res)
            setuserData(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <div className="container">
            <header>
                <div className="nav">
                    <img src={Logo} alt="logo"></img>
                    <Link to="/form">
                    <img src={Camera} alt="camera"></img>
                    </Link>
                </div>
            </header>
                <hr/>
                <div>
                    {
                        userData.map((user,i)=>{
                            return(
                                <div className="post" key={i}>
                                    <div className="without-postimg">
                                    <div className="use-info" >
                                        <h3>{user.name}</h3>
                                        <span>{user.location}</span>
                                        <div className="dot"><strong>...</strong></div>
                                    </div>
                                    </div>
                                    <div className="user-img">
                                        <img className="post-img" src={"https://instaclone-backened.onrender.com/"+user.images} alt="user-img"></img>
                                    </div>
                                    <div className="without-postimg">
                                    <div className="heart-rocket">
                                        <img src="heart.png" alt="heart" className="h-r"></img>
                                        <img src="rocket.jpg" alt="rocket" className="h-r"></img>
                                    </div>
                                    <div className="user-date">
                                        <span>{user.date}</span>
                                    </div>
                                    <div className="user-likes">
                                        {user.likes} likes
                                    </div>
                                    <div className="user-description">
                                        <h2>{user.description}</h2>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}
export default Postview
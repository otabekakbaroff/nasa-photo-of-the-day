import React,{useState,useEffect} from "react";
import NasaCard from "./nasaCard";
import axios from "axios";

export default function Nasa(){
    const [current,updated]=useState([]);
    useEffect(()=>{
        axios.get("https://api.nasa.gov/planetary/apod?api_key=VaN3YiIxAaC07O9jH48bJ4M6IsbFzVsCjcNqiO8F")
        .then(response=>{
            // console.log([response.data]);
            updated([response.data]);
        })
    },[])
    return(
        <div className="Parent">
            {current.map((item,index) =>{
                return <NasaCard key={index} itemList={item} />;
            })}
        </div>
    );
}
import React,{useState,useEffect} from "react";



const NasaCard=function(props){
    return (
        <div className="child">
            <h2>{props.itemList.title}</h2>
            {console.log(props)}
            <img className="nasa-img" src={props.itemList.url}/>
             <p>date: {props.itemList.date}</p>
             <p>{props.itemList.explanation}</p>
             <footer>copyright: {props.itemList.copyright}</footer>
        </div>
    );
}
export default NasaCard;
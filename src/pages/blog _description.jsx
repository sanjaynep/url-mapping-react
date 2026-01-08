import React from "react";
import { useState } from "react";
import Pages from '../assets/pages.jsx';
import { useLocation } from "react-router";

export default function Blog_details() {
   
//let [index,setIndex] = useState(0);
    let location = useLocation();
    let pathId = location.pathname.split("/")[2];
    console.log(pathId);
        
    return (
        <div>
        <h1 className="text-center text-light">{Pages[pathId - 1]?.title}</h1>
        <h3 className="text-light ps-5">{Pages[pathId - 1]?.message}</h3>
        <p className="text-light  pt-4 ps-5 pe-5 fs-6">{Pages[pathId - 1]?.descriptions}</p>
        

        </div>
    );
}
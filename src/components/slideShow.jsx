import { useEffect } from "react";
import { useState } from "react";

export default function SlideShow({imgSrcArr}){
    const arr = imgSrcArr
    const [imgSrc, setImgSrc] = useState(arr[0]);
    useEffect(()=>{
        setTimeout(()=>{
            const lastElm = arr.shift()
            arr.push(lastElm);
            setImgSrc(arr[0]);
        },4000);
        setTimeout(()=>{
            (document.querySelector(`#${arr[0].id}`)).setAttribute("style","opacity:100%");
        },1)
        setTimeout(()=>{
            document.querySelector(`#${arr[0].id}`).setAttribute('style','opacity:0%;')
        },3700);
    },[imgSrc])
    
    return (
        <>
         <img className={arr[0].classname} id={arr[0].id} src={arr[0].src} alt={arr[0].alt} />
        </>
    )
}
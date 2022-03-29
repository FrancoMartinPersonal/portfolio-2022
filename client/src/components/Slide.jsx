import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { Link } from "react-router-dom";

function Slide({ slides, backColor, url }) {
  let slides1 = slides
  let [first, setfirst] = useState()
  const handlerSlide = (e) => {


  }

  return (
    <SlideDiv >
      <SlidesDiv backColor={backColor} >

        {slides?.map(function (img, index) {

          return (
            <>
              <Link to={url} style={{}}>
                <SlideImg key={index}
                  id={index}
                  src={img}

                  onClick={(e) => handlerSlide(e)} >

                </SlideImg>
              </Link>
            </>
          )
        })}


      </SlidesDiv>
    </SlideDiv>
  )
}

let appearHistorial = keyframes`
0%{
/* transform:translateZ(0px) ; */
opacity:.1 ;

}
50%{
    opacity:2 ;
    /* transform:translateZ(50px) */
}
100%{
    opacity:5 ;
    /* transform:translateZ(0px); */
    
}

`

const SlideDiv = styled.div`
align-self: center;
   display:flex; 
   justify-content:center ;
   width: 800px;
   margin:10px;

   /* @media (max-width: 768px) {
     
     height:800px;
 } */
  `
const SlidesDiv = styled.div`
//background-color: ${props => props.backColor} ;

border-radius: 6px;
padding:5px ;
   display:flex;
   justify-content:center;
   width: 80%;
/*appearHistorial */
  animation: ${appearHistorial} 3s linear var(--article-load-delay);
  animation-iteration-count:initial;

  @media (max-width: 768px) {
    /* overflow:scroll; */
      max-width:min-content;
      height:900px;
    flex-direction: column;
  }
    `
const SlideImg = styled.img`

  filter: grayscale(100%);
  width:170px;
  height:300px ;
  margin:10px;
  transition: all .3s ease;
  border-radius: 6px;

&:hover {
    filter:grayscale(0);
    width:200px;
}
  cursor: pointer;
 

`

export default Slide
import styled, { keyframes } from 'styled-components'

export function AppearAnimations( props) {

    let appearAnimation
    let {
        InitialX = 'none',
    } = props
   
   
        appearAnimation = keyframes`
        0% {
           
            transform: translateX(${InitialX})  rotatey(0);;
              opacity: 0.2;
              }
      
        100% {
            
            transform: translateX(0)  rotatey(360deg);;
             opacity:1;
            }
        
        `
  


 

    return appearAnimation
}

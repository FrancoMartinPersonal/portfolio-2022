import React from 'react'
import styled, { keyframes } from 'styled-components'
import { AppearAnimations } from '../components/animations/AppearAnimations'
import Present from '../components/Present'
import design from '../img/ovalo.svg'
import IndiSection from '../components/indiSection'
import BarPage from '../components/BarPage'
function Homescreen() {
  return (
    <MainDiv>
      <PresentDiv>
        <Present />
        <DesignImg src={design}>
        </DesignImg>
      </PresentDiv >
      <BarPage />
      <IndiSection />
      {/* <div style={{width:'100px',height:'10px'}}></div> */}
    </MainDiv>
  )
}
const MainDiv = styled.div`
display:flex;
width:100% ;
margin-top:50px;
flex-direction:column;
`

const PresentDiv = styled.div`
display:flex;
width:100% ;
justify-content:space-between ;

`


//   console.log(appearAnimation,"c")
let appearRes = AppearAnimations({
  InitialX: "500px",
})



const DesignImg = styled.img`

  width: 55%;
z-index: 0;
animation-name: ${appearRes};
animation-duration:1s;
animation-iteration-count: initial;
  `

export default Homescreen
import React from 'react'
import styled, { keyframes } from 'styled-components'
import Foodox1 from '../img/Foodox.png'
import Foodox2 from '../img/Foodox1.png'
import Foodox3 from '../img/Foodox2.png'
import BudgetMind1 from '../img/BudgetMind.png'
import BudgetMind2 from '../img/BudgetMind1.png'
import BudgetMind3 from '../img/BudgetMind2.png'
import Slide from './Slide'
import Heart from '../img/heart.svg'
import { Link } from 'react-router-dom'
function  indiSection() {
  let slides = [Foodox1, Foodox2, Foodox3]
  let slides1 = [BudgetMind1, BudgetMind2, BudgetMind3]
  return (
    <MainSection>
      <LeyendText>
        let's talk ambicious and achievements...
      </LeyendText>
      <MainTitle>personal proyects</MainTitle>
      <ContentDiv>
        <Slide
          url={"https://pi-dogs-phi.vercel.app/"}
          backColor={'#158498'}
          slides={slides}
        />
        <LeyendText>
          this is my first and complex proyect develop and I have special appreciation for it <HeartImg src={Heart} />.
          Worked in PostgreSQL and NodeJS

             
        </LeyendText>
      </ContentDiv>
      <ContentDiv>
        <Slide
           url={"https://github.com/FrancoMartinPersonal/budgetMind"}
          backColor={'#181'}
          slides={slides1}
        />
        <LeyendText>
          the second proyect where i implement different databases tecnologies, developing
          an application to register differents types of concepts and amounts of this.
          with entry and user admissions with accounts
          worked in PostgreSQL and NodeJS
        </LeyendText>
      </ContentDiv>
    </MainSection>
  )
}
let HeartAnim = keyframes`
0%{

width:20px ;

}
100%{

width:18px ;

}

`

const MainSection = styled.section`
display:flex ;
flex-direction:column;
justify-content:center ;
`

const HeartImg = styled.img `
width:20px;
animation:${HeartAnim} 1s infinite ;
`
const ContentDiv = styled.div`
display:flex ;
flex-direction:row;
justify-content:center ;
@media (max-width: 768px) {
    flex-direction: column;
  }

`
const LeyendText = styled.div`
align-self: center;
font-size:large;
padding:0 50px ;
//font-weight:600 ;
`

const MainTitle = styled.h2`
font-size:250%;
padding:10px 0;
background-color:#9A565644 ;
`
export default indiSection
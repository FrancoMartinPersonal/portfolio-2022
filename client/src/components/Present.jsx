import React from 'react'
import styled from 'styled-components'
import { AppearAnimations } from './animations/AppearAnimations'

function Present() {
    return (
        <GreetingsDiv>
            <Greetings>
                greetings!,i'm Franco Martin,
            </Greetings>
            <Greetings>
                junior full-stack developer
            </Greetings>
        </GreetingsDiv>
    )
}

let appearRes = AppearAnimations({
    InitialX: "-500px",
})

const GreetingsDiv = styled.div`
display:flex;
justify-content:flex-start ;
flex-direction:column;
align-self:center;
margin-left:40px;
animation-name: ${appearRes};
animation-duration:2s;
animation-delay:0;
animation-iteration-count: inherit;

`

const Greetings = styled.h3`
color:#070944 ;
margin:.5px;
font-size:2.5vw;

`

export default Present
import React from 'react';
import styled from 'styled-components'
function nav() {
  return <MainNav>

  </MainNav>;
}

const MainNav = styled.div`
background-color: #FC9700;
position:fixed ;
z-index:10000 ;

opacity: 0.5;
width: 100%;
height: 50px;
`

export default nav;

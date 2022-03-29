import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function BarPage() {

    let [bar, setBar] = useState()

    useEffect(() => {
        barFun()
        console.log(window.scrollY)
        console.log(bar)

    }, [window.scrollY])

    const barFun = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        console.log(scrollPercentRounded)
        scrollPercentRounded==0?setBar('0%'):setBar(scrollPercentRounded+"%")
    }

    return (
        <div>BarPage</div>
    )
}

export default BarPage
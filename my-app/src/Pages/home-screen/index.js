import React from "react";
import style from './style.module.scss'

const HomeScreen =()=>{
    return(
        <div className={style.homeContainer}>
            <h2 className={style.homeTitle}>Welcome!</h2>
            <h3 className={style.homeSubTitle}>Portfolio of Adrian Colter</h3>
            <p className={style.homePara}></p>
        </div>
        
    )
}
export default HomeScreen;
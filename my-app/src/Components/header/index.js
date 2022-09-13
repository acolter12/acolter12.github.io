import React from "react";
import style from './style.module.scss';

const Header=()=>{
    return(
        <header className={style.header}>
            <nav className={style.navBar}>
                <a href="/"><h2 className={style.logo}>Adrian Colter</h2></a>
                <div className={style.pages}>
                <a href="/about"><h2 className={style.pageLink}>About Me</h2></a>
                <a href="/my-projects"><h2 className={style.pageLink}>Projects</h2></a>
                <a href="/contact"><h2 className={style.pageLink}>Connect</h2></a>
                </div>
            </nav>
        </header>
    )
}
export default Header;
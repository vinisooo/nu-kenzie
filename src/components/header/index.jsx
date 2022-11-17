import nuLogo from "../../assets/Nu-Kenzie-black.png"
import "./style.css"

const Header = ()=>{

    return (
        <header className="main-header">
            <div className="container main-header-content">
                <img src={nuLogo} alt="logo" />
                <button className="default-btn">Início</button>
            </div>
        </header>
    )

}

export default Header
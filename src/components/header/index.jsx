import nuLogo from "../../assets/Nu-Kenzie-black.png"
import "./style.css"

const Header = ({leave})=>{

    return (
        <header className="main-header">
            <div className="container main-header-content">
                <img src={nuLogo} alt="logo" />
                <button className="default-btn grey-btn" onClick={leave}>Início</button>
            </div>
        </header>
    )

}

export default Header
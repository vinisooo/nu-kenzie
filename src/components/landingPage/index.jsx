import "./style.css"
import nuLogo from "../../assets/Nu-Kenzie.png"
import landingIllustration from "../../assets/illustration.svg"

const LandingPage = ({enter})=>{

    return(
        <main className="landing-page container">
            <div className="container landing-content">
                <div className="cta">
                    <img className="nu-kenzie-logo" src={nuLogo} alt="logo" />
                    <h1 className="landing-title">Centralize o controle das suas finanças</h1>
                    <button className="default-btn" onClick={()=>enter()}>Iniciar</button>
                </div>
                <figure className="landing-figure">
                    <img src={landingIllustration} alt="" />
                </figure>
            </div>
        </main>
    )

}

export default LandingPage
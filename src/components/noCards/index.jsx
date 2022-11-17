import "./style.css"
import noCard from "../../assets/NoCard.png"

const NoCard = ()=>{

    return (
        <div className="no-card-div">
            <h2 className="no-card-msg">Você ainda não possui nenhum lançamento</h2>
            <img className="no-card-illustration" src={noCard} alt="" />
        </div>
    )

}

export default NoCard
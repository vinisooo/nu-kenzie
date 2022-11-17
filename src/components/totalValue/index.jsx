import "./style.css"

const TotalValue = ({totalValue})=>{

    return (
        <div className="total-value-card">
            <div className="total-value-div">
                <h3>Valor Total</h3>
                <span className="total-value">$ {totalValue}</span>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )

}

export default TotalValue
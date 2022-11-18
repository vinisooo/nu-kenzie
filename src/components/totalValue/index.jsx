import "./style.css"

const TotalValue = ({totalValue})=>{

    return (
        <div className="total-value-card">
            <div className="total-value-div">
                <h3 className="total-value-title">Valor Total</h3>
                <span className="total-value">$ {totalValue}</span>
            </div>
            <p className="total-value-p">O valor se refere ao saldo</p>
        </div>
    )

}

export default TotalValue
import "./style.css"

const Transaction=({description, value, type})=>{

    return (
        <li className={type == "entrada" ? "entry transaction":"debit transaction"}>
            <div className="transaction-div">
                <h3>{description}</h3>
                <div>
                    <span>{value}</span>
                    <button>Lixeira</button>
                </div>
            </div>
            <span>{type}</span>
        </li>
    )

}

export default Transaction
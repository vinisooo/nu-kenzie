import "./style.css"
import deleteIcon from "../../assets/trash.png"

const Transaction=({description, value, type, id, transactions, setTransactions})=>{

    function removeTransaction(id){
        setTransactions(transactions.filter(el=> el.id != id))
    }

    return (
        <li className={type == "entrada" ? "entry transaction":"debit transaction"}>
            <div className="transaction-div">
                <h3>{description}</h3>
                <div>
                    <span>{value}</span>
                    <button className="delete-btn" id={id} onClick={(e)=>removeTransaction(e.target.id)}>
                        <img src={deleteIcon} alt="" />
                    </button>
                </div>
            </div>
            <span>{type}</span>
        </li>
    )

}

export default Transaction
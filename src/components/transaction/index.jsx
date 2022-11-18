import "./style.css"
import deleteIcon from "../../assets/trash.png"

const Transaction=({description, value, type, id, transactions, setTransactions})=>{

    function removeTransaction(id){
        setTransactions(transactions.filter(el=> el.id != id));

        if(transactions.length == 1){
            localStorage.removeItem("@nu-kenzie: transactions");
        }
    }

    const transactionsStr = JSON.stringify(transactions);
    localStorage.setItem("@nu-kenzie: transactions", transactionsStr);

    return (
        <li className={type == "entrada" ? "entry transaction":"debit transaction"}>
            <div className="transaction-div">
                <h3 className="transaction-desc">{description}</h3>
                <div>
                    <span className="transaction-value">R$ {value}</span>
                    <button className="delete-btn" id={id} onClick={(e)=>removeTransaction(e.target.id)}>
                        <img src={deleteIcon} alt="" />
                    </button>
                </div>
            </div>
            <span className="transaction-type">{type}</span>
        </li>
    )

}

export default Transaction
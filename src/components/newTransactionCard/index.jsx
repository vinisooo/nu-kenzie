import { useState } from "react"
import "./style.css"

const NewTransaction = ({transactions, setTransactions})=>{
    const [ description, setDescription ] = useState("");
    const [ value, setValue ] = useState(0);
    const [ type, setType ] = useState("");

    function addTransaction(event){
        const id = transactions.length == 0? 1: transactions[transactions.length -1].id + 1;

        const transaction = {
            "description": description,
            "value": value,
            "type": type,
            "id": id,
        }

        setTransactions([...transactions, transaction])
        console.log(transactions)
    }

    return (

        <form className="new-transaction">
            <div className="transaction-desc">
                <label htmlFor="description">Descrição</label>
                <input id="description" placeholder="Digite aqui sua descrição" onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div className="value-info">
                <div>
                    <label htmlFor="value">Valor</label>
                    <input id="value" type="number" placeholder="Digite aqui sua descrição" onChange={(e)=>setValue(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="select-type">Tipo de valor</label>
                    <select id="select-type" onChange={(e)=> setType(e.target.value)}>
                        <option value="">Tipo do valor</option>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>
            </div>
            <button className="default-btn" onClick={(e)=>{
                e.preventDefault();
                addTransaction();
            }}>Inserir valor</button>

        </form>
    )
}

export default NewTransaction
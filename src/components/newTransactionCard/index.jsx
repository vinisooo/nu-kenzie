import { useState } from "react"
import "./style.css"

const NewTransaction = ({transactions, setTransactions})=>{
    const [ description, setDescription ] = useState("");
    const [ value, setValue ] = useState(0);
    const [ type, setType ] = useState("");

    function addTransaction(event){
        event.preventDefault();
        if(description.trim() !="" && type.trim() !=""){
            const id = transactions.length == 0? 1: transactions[transactions.length -1].id + 1;

            const transaction = {
                "description": description,
                "value": parseFloat(value).toFixed(2),
                "type": type,
                "id": id,
            }
            setTransactions([...transactions, transaction]);
    
            setDescription("");
            setValue(0);
            setType("")
        }
    }

    return (

        <form className="new-transaction" onSubmit={addTransaction}>
            <div className="transaction-desc">
                <label htmlFor="description">Descrição</label>
                <input id="description" placeholder="Digite aqui sua descrição" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <small>Ex: Compra de roupas</small>
            </div>
            <div className="value-info">
                <div>
                    <label htmlFor="value">Valor</label>
                    <input id="value" type="number" placeholder="Digite aqui sua descrição" value={value} onChange={(e)=>setValue(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="select-type">Tipo de valor</label>
                    <select id="select-type" value={type} onChange={(e)=> setType(e.target.value)}>
                        <option value="">Tipo do valor</option>
                        <option value="entrada">Entrada</option>
                        <option value="saida">Saída</option>
                    </select>
                </div>
            </div>
            <button className="default-btn" type="submit">Inserir valor</button>
        </form>
    )
}

export default NewTransaction
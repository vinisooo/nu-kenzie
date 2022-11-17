import Header from "../header"
import "./style.css"
import { useState } from "react"
import NewTransaction from "../newTransactionCard"
import TotalValue from "../totalValue"
import Transaction from "../transaction"

const MainPage = ()=>{

    const [ transactions, setTransactions ] = useState([]);

    function getTotalValue(){
        if(transactions.length == 0){
            return "0.00"
        }
        const entry = transactions.filter(el=> el.type == "entrada");
        const debits = transactions.filter(el=> el.type == "saida");

        const entryValue = entry.map(el=>parseFloat(el.value)).reduce((a,b)=>{return a+b},0);
        const debitsValue = debits.map(el=>parseFloat(el.value)).reduce((a,b)=>{return a+b},0);
        
        console.log(entryValue, debitsValue)
        return (entryValue - debitsValue).toFixed(2)
    }

    return (
        <>
            <Header/>
            <main className="container main-content">
                <aside>
                    <NewTransaction
                    transactions={transactions}
                    setTransactions={setTransactions}
                    />
                    <TotalValue totalValue={getTotalValue()}/>
                </aside>
                <section className="transactions-section">
                    <ul className="transactions-list">
                        {
                            transactions.map((el, index)=>{
                                return <Transaction
                                        key={index}
                                        description={el.description}
                                        value={el.value}
                                        type={el.type}/>
                            })
                        }
                    </ul>
                </section>
            </main>
            
        </>

    )

}

export default MainPage
import Header from "../header"
import "./style.css"
import { useState } from "react"
import NewTransaction from "../newTransactionCard"
import TotalValue from "../totalValue"
import Transaction from "../transaction"
import NoCard from "../noCards"
import FilterTransactions from "../filter"

const getTransactionsFromLocalStorage =()=>{

    const transactions = localStorage.getItem("@nu-kenzie: transactions");
    if(transactions){
        const transactionsParse = JSON.parse(transactions);
        return transactionsParse;
    }
    return [];
}

const MainPage = ({leave})=>{

    const [ transactions, setTransactions ] = useState(getTransactionsFromLocalStorage());

    function getTotalValue(){
        if(transactions.length == 0){
            return "0.00"
        }
        const entry = transactions.filter(el=> el.type == "entrada");
        const debits = transactions.filter(el=> el.type == "saida");

        const entryValue = entry.map(el=>parseFloat(el.value)).reduce((a,b)=>{return a+b},0);
        const debitsValue = debits.map(el=>parseFloat(el.value)).reduce((a,b)=>{return a+b},0);

        return (entryValue - debitsValue).toFixed(2)
    }

    return (
        <>
            <Header leave={leave}/>
            <main className="container main-content">
                <aside>
                    <NewTransaction
                    transactions={transactions}
                    setTransactions={setTransactions}
                    />
                    <TotalValue totalValue={getTotalValue()}/>
                </aside>
                <section className="transactions-section">
                    <FilterTransactions/>
                    <ul className="transactions-list">
                        {
                            transactions.length == 0 ?
                            <NoCard/>

                            :
                            transactions.map((el, index)=>{
                                return <Transaction
                                        key={index}
                                        description={el.description}
                                        value={el.value}
                                        type={el.type}
                                        id={el.id}
                                        transactions={transactions}
                                        setTransactions={setTransactions}/>
                            })
                        }
                    </ul>
                </section>
            </main>
            
        </>

    )

}

export default MainPage
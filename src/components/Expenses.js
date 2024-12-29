
import './Expenses.css'

import ExpenseItem from "./ExpenseItem"
import ExpenseForm from './ExpenseForm'

function linkToName(dogImageLink) {
    let start = dogImageLink.indexOf("breeds/") + 7;
    let end = dogImageLink.indexOf("/", start);
    return(
        dogImageLink.substring(start, end)
    )
}

function Expenses(props) {

    return (

        <div >
            <ExpenseForm />
            {props.items.map((item, index) => (
                <ExpenseItem

                dogName={linkToName(item.dogImageLink)}
                dogImage={item.dogImage}
                key={index}
                />
            ))}


        </div>

    )
}


export default Expenses
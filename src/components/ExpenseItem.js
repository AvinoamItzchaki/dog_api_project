import './ExpenseItem.css'

function getRandomDate() {
    const start = new Date(2004, 0, 1);
    const end = new Date(2022, 11, 31);
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    return new Date(randomTime);
}

function ExpenseItem(props) {
    const randomDate = getRandomDate();

    return (
        <div className='expense-item'>
            <img src={props.dogImage} alt={props.dogName}/>
            <div className='expense-item__description'><h3>{props.dogName} </h3></div>
            <div className='expense-item__date'>  {randomDate.toLocaleDateString()} </div>
        </div>
    )
}

export default ExpenseItem
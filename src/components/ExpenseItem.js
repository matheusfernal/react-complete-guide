import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>28 de março de 2021</div>
      <div className="expense-item__description">
        <h2>Seguro do caro</h2>
        <div className="expense-item__price">R$ 698,67</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

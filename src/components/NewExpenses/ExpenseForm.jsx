import './ExpenseForm.css';

const ExpenseForm = () => {
    return <form>
        <div className="new-expense__control">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2021-01-01" step="2023-03-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;
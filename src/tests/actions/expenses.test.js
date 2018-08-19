import configureMockStore from 'redux-mock-store';
import thunk from "redux-thunk";
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses } from "../../actions/expenses";
import { expenses } from "../fixtures/expenses";
import database from "../../firebase/firebase";

const uid = 'this is my test uid';
const deafultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description, note, createdAt, amount};
  });
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => {done()});
});

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', {
    description: 'this is my new phone'
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      description: 'this is my new phone'
    }
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(deafultAuthState);
  const expenseData = {
    description: 'Mouse',
    amount: 3500,
    note: 'I have bought mouse',
    createdAt: 100
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(deafultAuthState);
  const expenseDefaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0 
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaultData
      }
    });

    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDefaultData);
    done();
  });
});

test('should setup set expenses action action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch expenses from firebase', (done) => {
  const store = createMockStore(deafultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });

});
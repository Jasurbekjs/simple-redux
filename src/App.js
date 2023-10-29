import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './api/customers';

function App() {

  const dispatch = useDispatch() // диспатсчер, функция изменяющая состояние
  const cash = useSelector(state=> state.cash.cash) // селектор для получения текущего состояния переменной
  const customers = useSelector(state=> state.customers.customers)

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id))
  }
  const addManyCustomers = () => {
    dispatch(fetchCustomers())
  }

  return (
    <>
      <div className='app'>
        <div style={{fontSize: '20px'}}>
          {cash}
        </div>
        <div style={{display: 'flex', gap: '10px'}}>
          <button onClick={()=>addCash( Number(prompt()) )}>Пополнить счет</button>
          <button onClick={()=>getCash( Number(prompt()) )}>Снять со счета</button>
        </div>
        <div style={{display: 'flex', gap: '10px'}}>
          <button onClick={()=>addCustomer( prompt() )}>Добавить клиента</button>
          <button onClick={()=>addManyCustomers()}>Добавить клиентов из базы</button>
        </div>
        {customers.length > 0 ? 
          <div>
            {customers.map(customer => 
                <div key={customer.id}>
                  <span> {customer.name} </span>
                  <button onClick={()=>removeCustomer( customer.id )}>Удалить клиента</button> 
                </div>
            )}
          </div>
          : 
          <div style={{fontSize: '2rem', marginTop: 20}}>
            Клиенты отсутствуют!
          </div>
        }
      </div>
    </>
  );
}

export default App;

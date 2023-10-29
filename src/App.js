import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  const dispatch = useDispatch() // диспатсчер, функция изменяющая состояние
  const cash = useSelector(state=> state.cash) // селектор для получения текущего состояния переменной
  
  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
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
      </div>
    </>
  );
}

export default App;

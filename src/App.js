import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { AsyncDecrementCreator, AsyncIncrementCreator, decrementCreator, incrementCreator } from './store/countReducer';
import { AsyncUsersCreator } from './store/userReducer';

function App() {

  const dispatch = useDispatch() // диспатсчер, функция изменяющая состояние
  const count = useSelector(state=> state.countReducer.count) // селектор для получения текущего состояния переменной
  const users = useSelector(state=> state.usersReducer.users)
  
  return (
    <>
      <div className="app">
            <div className="count">{count}</div>
            <div className="btns">
                <button className="btn" onClick={() => dispatch(AsyncIncrementCreator())}>ИНКРЕМЕНТ++</button>
                <button className="btn" onClick={() => dispatch(AsyncDecrementCreator())}>ДЕКРЕМЕНТ--</button>
                <button className="btn" onClick={() => dispatch(AsyncUsersCreator())}>ПОЛУЧИТЬ ЮЗЕРОВ--</button>
            </div>
            <div className="users">
                {users.map(user =>
                    <div className="user" key={user.id}>
                        {user.name}
                    </div>
                )}
            </div>
        </div>
    </>
  );
}

export default App;

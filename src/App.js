import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementCreator, incrementCreator } from './store/countReducer';

function App() {

  const dispatch = useDispatch() // диспатсчер, функция изменяющая состояние
  const count = useSelector(state=> state.countReducer.count) // селектор для получения текущего состояния переменной
  const users = useSelector(state=> state.usersReducer.users)

  return (
    <>
      <div className="app">
            <div className="count">{count}</div>
            <div className="btns">
                <button className="btn" onClick={() => dispatch(incrementCreator())}>ИНКРЕМЕНТ++</button>
                <button className="btn" onClick={() => dispatch(decrementCreator())}>ДЕКРЕМЕНТ--</button>
                <button className="btn">ПОЛУЧИТЬ ЮЗЕРОВ--</button>
            </div>
            <div className="users">
                {users.map(user =>
                    <div className="user">
                        {user.name}
                    </div>
                )}
            </div>
        </div>
    </>
  );
}

export default App;

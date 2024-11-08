import './App.css';
import Board from './components/Board';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <>
          <Provider store={store}>
            <Board/>
          </Provider>
    </>
  );
}

export default App;
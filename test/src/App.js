import Form from './components/Form'
import './App.css';
import Grid from './components/Grid';


// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (

    <Provider store={store}>
      <div className="container mt-5">
        <Form />
        <Grid />
      </div>

    </Provider>
  );
}

export default App;

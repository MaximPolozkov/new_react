
import  ReactDOM  from 'react-dom/client';
import App from './App';
import './index.scss';
import spisok from './spisok_array';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';



//const rootElement = document.getElementById('root');
//const root = createRoot(rootElement);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
  <StrictMode>
    <App spisok={spisok} />
  </StrictMode>
  </Provider>
);





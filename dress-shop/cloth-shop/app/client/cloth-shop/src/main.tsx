import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import UserStore from './store/userStore.tsx';
import ClothStore from './store/clothStore.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';


interface IContextValue {
  user: UserStore;
  clothes: ClothStore;
}

export const Context = React.createContext<IContextValue | null>(null);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context.Provider value = {{
      user: new UserStore(),
      clothes: new ClothStore()
    }}>
      <App />
    </Context.Provider>
  </React.StrictMode>,
);

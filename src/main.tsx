import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App.tsx'
import { Provider } from "react-redux";
import {store} from './../services/Store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)

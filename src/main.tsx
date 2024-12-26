import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "@/components/ui/provider"
import './index.css'
import './demos/ipc'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <Provider>
        <App />
      </Provider>
  </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')

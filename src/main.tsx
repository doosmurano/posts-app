import App from './app/App.tsx'
import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import { store } from './app/providers/store/store.ts'

const root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

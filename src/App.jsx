import { BrowserRouter, Route, Routes } from 'react-router'
import { MantineProvider } from '@mantine/core'
import './App.css'
import Login from './pages/login'
import '@mantine/core/styles.css';
import PageContext from './context/Pagecontext';

function App() {

  return (
    <PageContext.Provider>
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </PageContext.Provider>
  )
}

export default App

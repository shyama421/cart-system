import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core'
import './App.css'
import Login from './pages/login'
import Home from './pages/home';
import '@mantine/core/styles.css';
import PageContext from './context/Pagecontext';

function App() {

  return (
    <PageContext.Provider>
      <MantineProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </PageContext.Provider>
  )
}

export default App

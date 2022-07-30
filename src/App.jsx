import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from './pages/Weather';
import Victim from './pages/Victim';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()



const App = () => {
  const [count, setCount] = useState(0)

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
          <Routes>
            <Route path="/" element={<Weather />} />
            <Route path="/victim" element={<Victim />} />
          </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App

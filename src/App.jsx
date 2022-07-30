import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Weather from './pages/Weather';
import Victim from './pages/Victim';
import Report from './pages/Report';
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
            <Route path="/report" element={<Report />} />
          </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App

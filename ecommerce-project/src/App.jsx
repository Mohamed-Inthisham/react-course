import { Route, Routes } from 'react-router'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import './App.css'
import { OrdersPage } from './pages/OrdersPage'
import { TrackingPage } from './pages/TrackingPage'


function App() {
  

  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />}></Route>
      <Route path="tracking" element={<TrackingPage />}></Route>
    </Routes>
    
  )
}

export default App

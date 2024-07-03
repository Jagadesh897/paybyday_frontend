import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import TransactionUnsuccessful from "./pages/TransactionUnsuccessful";

function App() {

  return (
    <div>
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Signup/>}/>
          <Route path="/signin" element ={<Signin/>} />
          <Route path="/signup" element ={<Signup/>} />
          <Route path="/dashboard" element ={<Dashboard/>} />
          <Route path="/send" element ={<SendMoney/>} />
          <Route path="/PaymentConfirmation" element={<PaymentConfirmation/>}/>
          <Route path="/TransactionUnsuccessful" element={<TransactionUnsuccessful/>}/>
        </Routes>
        </BrowserRouter>
        </>
    </div>
  )
}

export default App

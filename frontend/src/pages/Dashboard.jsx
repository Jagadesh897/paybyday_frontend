import { useNavigate } from "react-router-dom"
import Appbar from "../components/Appbar"
import Balance from "../components/Balance"
import Users from "../components/Users"
import { useEffect } from "react"


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/signup");
    }
  }, [navigate]);
  return (
    <div>
      <Appbar/>
      <div className="m-8">
        <Balance value={1000}/>
        <Users/>
      </div>
    </div>
  )
}

export default Dashboard
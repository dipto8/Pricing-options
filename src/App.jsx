
import Nav from "./components/DaisyNav/Nav"
import NavBar from "./components/Navbar/NavBar"
import PriceOptions from "./components/PriceOptions/PriceOptions"
import LineChart from "./components/LineChart/LineChart"
import Phones from "./components/Phones/Phones"


function App() {
 

  return (
    <>

    
      <NavBar></NavBar>

      <Phones></Phones>

      <div className="">
        <PriceOptions> </PriceOptions>
      </div>
      <LineChart></LineChart>
     

       

      {/* <Nav></Nav> */}

      

    </>
  )
}

export default App

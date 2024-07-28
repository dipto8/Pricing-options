
import Nav from "./components/DaisyNav/Nav"
import NavBar from "./components/Navbar/NavBar"
import PriceOptions from "./components/PriceOptions/PriceOptions"
import LineChart from "./components/LineChart/LineChart"


function App() {
 

  return (
    <>

    
      <NavBar></NavBar>

      <div className="">
        <PriceOptions> </PriceOptions>
      </div>
      <LineChart></LineChart>

       

      {/* <Nav></Nav> */}

      

    </>
  )
}

export default App

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Homepage from "../components/Home";
const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin" element={<Dashboard />}/>

      </Routes>
    </BrowserRouter> 
  )
}
export default App;
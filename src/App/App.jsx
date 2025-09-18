import Main from "../components/Main/Main"
import { MobileHeader } from "../components/MobileHeader/MobileHeader";
import Sidebar from "../components/Sidebar/Sidebar"
import './App.scss';
import { useWindowSize } from "usehooks-ts";


function App() {
  const {width} = useWindowSize();

  return (
    <div className="app container">
      {
        width > 768 ?   <Sidebar /> : <MobileHeader />
      }
      
        <Main />
    </div>

  )
}

export default App

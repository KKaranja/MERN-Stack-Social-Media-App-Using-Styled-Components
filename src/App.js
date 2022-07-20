import "./App.css";
import Home from "./pages/home/Home";
import ProfilePage from "./pages/profile/ProfilePage";
function App() {
  return (
    <div className='App'>
      <div className='blur' style={{ top: "-18%", right: "0" }}></div>
      <div className='blur' style={{ top: "36%", left: "-8rem" }}></div>
      {/* <Home/> */}
      <ProfilePage />
    </div>
  );
}

export default App;

import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Users from './pages/list/List'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

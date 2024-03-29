import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Users from './pages/list/List'
import Single from './pages/single/Single';
import List from './pages/list/List';
import New from './pages/new/New';
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
          <Route path="users">
            <Route index element={<List />} />
            <Route path=':userId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=':productId' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

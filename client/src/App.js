import './App.css';
import RegisterForm from './RegisterForm/RegisterForm';
import LoginForm from './LoginForm/LoginForm';
import ProfileUpdate from './ProfileUpdate/ProfileUpdate';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import MyCalendar from './Calander/MyCalander';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/register' element={<RegisterForm />} />
      <Route path='/update' element={<ProfileUpdate />} />
      <Route path='/' element={<MyCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

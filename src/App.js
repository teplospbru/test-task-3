import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// Components
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";

// Screens
import Users from './screens/Users';
import UsersInfo from './screens/UsersInfo';
import UserPosts from './screens/UserPosts';
import UserPost from './screens/UserPost';

function App() {

  const users = useSelector(state => state.users);
  const [mobileMenuToggle, setMobileMenu] = useState(false); // Состояние меню при мобильном разрешении

  return (
    <Router>
      <Header click={ () => setMobileMenu(!mobileMenuToggle) }/>
      <MobileMenu click={ () => setMobileMenu(false) } mobileMenuToggle={ mobileMenuToggle }/>
      <Routes>
        {/* Чтобы приложение не ломалось при обновлении страницы, добавил проверку на наличие выбранного пользователя
         и, если его нет, редиректна /users, чтобы его выбрать */}
        <Route path='/user-info' element={ users.userId ? (<UsersInfo menu={ 'info' }/>) : (<Users /> ) } />
        <Route path='/user-post' element={ users.userId ? (<UserPost menu={ 'post' }/>) : (<Users /> ) } />
        <Route path='/user-posts' element={ users.userId ? (<UserPosts menu={ 'post' }/>) : (<Users /> ) } />
        <Route path='/users' element={ <Users /> } />
        <Route path='/' element={ <Users /> } />
      </Routes>
    </Router>
  );
}

export default App;
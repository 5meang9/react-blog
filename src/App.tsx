import './App.css';
import Router from './components/Router';
import { useState, useEffect, useContext } from 'react';
import { app } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';
import ThemeContext from 'context/ThemeContext';

function App() {
  const context = useContext(ThemeContext);
  const auth = getAuth(app);
  // firebase Auth 가 인증되었으면 true로 변경해주는 로직 추가
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  // auth 를 체크하기 전에 (initialize 전)에는 loader 를 띄워주는 용도
  const [init, setInit] = useState<boolean>(false);

  useEffect(() => {
    // 현재 로그인 한 사용자 가져오기
    onAuthStateChanged(auth, (user) => {
      if(user){
        setIsAuthenticated(true);
      }else{
        setIsAuthenticated(false);
      }
      setInit(true);
    })
  })

  return (
    <div className={context.theme === 'light' ? 'white' : 'dark'}>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated}/> : <Loader />}
    </div>
  );
}

export default App;

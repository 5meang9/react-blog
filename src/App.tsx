import './App.css';
import Router from './components/Router';
import { useState, useEffect } from 'react';
import { app } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader';

function App() {
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
    <>
      <ToastContainer />
      {init ? <Router isAuthenticated={isAuthenticated}/> : <Loader />}
    </>
  );
}

export default App;

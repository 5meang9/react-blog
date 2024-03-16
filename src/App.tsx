import './App.css';
import { Route, Routes, Navigate, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/posts/:id'>Posts Detail</Link>
        </li>
        <li>
          <Link to='/posts/new'>Posts New</Link>
        </li>
        <li>
          <Link to='/posts/edit/:id'>Posts Edit</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/posts' element={<h1>Post List Page</h1>} />
        <Route path='/posts/:id' element={<h1>Post Detail Page</h1>} />
        <Route path='/posts/new' element={<h1>Post New Page</h1>} />
        <Route path='/posts/edit/:id' element={<h1>Post Edit Page</h1>} />
        <Route path='/profile' element={<h1>Profile Page</h1>} />
        {/* 정의하지 않은 path 를 입력했을 때 디폴트 루트 페이지 */}
        <Route path='*' element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;

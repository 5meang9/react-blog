import { Route, Routes, Navigate} from 'react-router-dom'

export default function Router() {
  return (
    <>
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
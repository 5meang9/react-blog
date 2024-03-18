import { Link } from "react-router-dom"

export default function PostDetail(){
  return(
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">블로그 페이지 작성부분</div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">오지원</div>
            <div className="post__date">2024.03.16 토요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to={`/posts/edit/1`}>수정</Link>
            </div>
          </div>
          <div className="post__text">
            만나서 반가워요
            만나서 반가워요
            만나서 반가워요
            만나서 반가워요
            만나서 반가워요
            만나서 반가워요
            만나서 반가워요
          </div>
        </div>
      </div>
    </>
  )
}
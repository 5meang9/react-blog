import { Link } from "react-router-dom";

interface PostListProps{
  hasNavigation?: boolean;
}

export default function PostList({ hasNavigation = true }: PostListProps){
  return(
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div className="post__navigation--active">전체</div>
          <div>나의 글</div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">오지원</div>
                <div className="post__date">2024.03.16 토요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                만나서 반가워요
                만나서 반가워요
                만나서 반가워요
                만나서 반가워요
                만나서 반가워요
                만나서 반가워요
                만나서 반가워요
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
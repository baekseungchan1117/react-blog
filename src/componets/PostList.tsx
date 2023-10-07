import { Link } from "react-router-dom";
import { useState } from "react";

interface PostListPros {
    hasNavigation?: boolean;
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }) {
  const [activeTap, setActiveTab] = useState<TabType>("all");
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div role="presentation" onClick={()=> setActiveTab("all")} className={activeTap === "all" ? "post__navigation--active" : ""}>전체</div>
          <div role="presentation" onClick={()=> setActiveTab("my")} className={activeTap === "my" ? "post__navigation--active" : ""}>나의 글</div>
        </div>
      )}
      <div className="post__list">
        {[...Array(10)].map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">백승찬</div>
                <div className="post__date">2023.10.02 월요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
                possimus error dignissimos laudantium ducimus doloribus rem
                molestiae, saepe quas facere atque dolor earum explicabo,
                perferendis aliquid doloremque magni quidem obcaecati.
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
  );
}

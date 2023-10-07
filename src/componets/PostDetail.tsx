import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">백승찬</div>
            <div className="post__date">2023.10.02 월요일</div>
          </div>
          <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">
                  <Link to={'/posts/edit/1'}>수정</Link>
                </div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
            possimus error dignissimos laudantium ducimus doloribus rem
            molestiae, saepe quas facere atque dolor earum explicabo,
            perferendis aliquid doloremque magni quidem obcaecati.
          </div>
        </div>
      </div>
    </>
  );
}

import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        alt=""
        className="postImage"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, rem
        tempore repellendus hic sunt placeat asperiores natus quaerat quas
        voluptatem at molestias atque nobis dolorem est vitae excepturi quidem
        veniam! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Doloribus, rem tempore repellendus hic sunt placeat asperiores natus
        quaerat quas voluptatem at molestias atque nobis dolorem est vitae
        excepturi quidem veniam! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Doloribus, rem tempore repellendus hic sunt placeat
        asperiores natus quaerat quas voluptatem at molestias atque nobis
        dolorem est vitae excepturi quidem veniam!
      </p>
    </div>
  );
}

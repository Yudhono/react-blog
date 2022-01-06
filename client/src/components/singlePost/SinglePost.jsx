import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Autor: <b>Yudhono</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          recusandae, esse eligendi blanditiis facilis cumque, incidunt
          consequatur ab aperiam, quae commodi consectetur iure autem obcaecati
          explicabo aspernatur dolore. Cupiditate, quaerat! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nobis recusandae, esse eligendi
          blanditiis facilis cumque, incidunt consequatur ab aperiam, quae
          commodi consectetur iure autem obcaecati explicabo aspernatur dolore.
          Cupiditate, quaerat!Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nobis recusandae, esse eligendi blanditiis facilis cumque,
          incidunt consequatur ab aperiam, quae commodi consectetur iure autem
          obcaecati explicabo aspernatur dolore. Cupiditate, quaerat!Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nobis recusandae, esse
          eligendi blanditiis facilis cumque, incidunt consequatur ab aperiam,
          quae commodi consectetur iure autem obcaecati explicabo aspernatur
          dolore. Cupiditate, quaerat!
        </p>
      </div>
    </div>
  );
}

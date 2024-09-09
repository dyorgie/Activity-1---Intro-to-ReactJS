import "./UserProfile.css";

function UserProfile(props) {
  return (
    <>
      <div className="wrapper">
        <div class="container">
          <img src={props.img} className="img" alt="member"></img>
          <h1>{props.name}</h1>
          <h3>{props.birthday}</h3>
          <h3>{props.role}</h3>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

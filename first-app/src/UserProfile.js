import "./UserProfile.css";

function UserProfile(props) {
  return (
    <>
      <div className="wrapper">
        <div class="container">
          <img className="img" src="./picture/john.jpg" alt="john"></img>
          <h1>John Lennon</h1>
          <h3>October 9, 1940</h3>
          <h3>Vocalist & Rhythm Guitarist</h3>
        </div>

        <div class="container">
          <img className="img" src="./picture/paul.jpg" alt="paul"></img>
          <h1>Paul McCartney</h1>
          <h3>June 18, 1942</h3>
          <h3>Vocalist & Bassist</h3>
        </div>
      </div>

      <div class="container">
        <img className="img" src="./picture/george.jpg" alt="george"></img>
        <h1>George Harrison</h1>
        <h3>February 25, 1943</h3>
        <h3>Vocalist & Lead Guitarist</h3>
      </div>

      <div class="container">
        <img className="col-3 img" src="./picture/ringo.jpg" alt="ringo"></img>
        <h1>Ringo Starr</h1>
        <h3>July 7, 1940</h3>
        <h3>Drummer</h3>
      </div>
    </>
  );
}

export default UserProfile;

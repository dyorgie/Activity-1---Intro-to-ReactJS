import "./App.css";
import UserProfile from "./UserProfile";
import JOHN from "./picture/john.jpg";
import PAUL from "./picture/paul.jpg";
import GEORGE from "./picture/george.jpg";
import RINGO from "./picture/ringo.jpg";

function App() {
  return (
    <div className="App">
      <UserProfile
        img={JOHN}
        name="John Lennon"
        birthday="October 9, 1940"
        role="Vocalist & Rhythm Guitarist"
      ></UserProfile>

      <UserProfile
        img={PAUL}
        name="Paul McCartney"
        birthday="June 18, 1942"
        role="Vocalist & Bassist"
      ></UserProfile>

      <UserProfile
        img={GEORGE}
        name="George Harrison"
        birthday="February 25, 1943"
        role="Vocalist & Lead Guitarist"
      ></UserProfile>

      <UserProfile
        img={RINGO}
        name="Ringo Starr"
        birthday="July 7, 1940"
        role="Vocalist & Drummer"
      ></UserProfile>
    </div>
  );
}

export default App;

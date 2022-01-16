import { Link } from "react-router-dom";
import Manifestation from "./routes/Manifestation/manifestation"
import TaskManager from "./routes/TaskManager/taskManager"
import Habits from "./routes/Habits/habits"
import Header from "./routes/header";
import Lotus from "./routes/Lotus/lotus";


// export default function App() {
//   return (
//     <div>
//       <Header/>
//       <nav
//         style={{
//           borderBottom: "solid 1px",
//           paddingBottom: "1rem"
//         }}
//       >
//         {/* <Link to="/manifestation">manifestation</Link> |{" "}
//         <Link to="/taskManager">taskmanager</Link> |{" "}
//         <Link to="/affirmation">affirmation</Link> |{""} */}
        
//       </nav>
//     </div>
//   );
// }


export default function App() {
  return (
    <TaskManager/>
  );
}
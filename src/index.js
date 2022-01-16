import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Manifestation from "./routes/Manifestation/manifestation"
import TaskManager from "./routes/TaskManager/taskManager"
import Habits from "./routes/Habits/habits"
import Lotus from "./routes/Lotus/lotus"


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="manifestation" element={<Manifestation/>} />
      <Route path="taskManager" element={<TaskManager />} />
      <Route path="Habits" element={<Habits/>} />
      <Route path="Lotus" element={<Lotus/>} />

    </Routes>
  </BrowserRouter>,
  rootElement
);
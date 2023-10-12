import { Route, Routes } from "react-router-dom"
import Connexion from "./Pages/Connexion"
import AdminLayout from "./Pages/AdminLayout"
import AdminAffectation from "./Pages/AdminAffectation"
import AdminNotification from "./Pages/AdminNotification"
import AdminTeacher from "./Pages/AdminTeacher"
import NotFound from "./Pages/NotFound"
import AdminTimetable from "./Pages/AdminTimetable"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Connexion/>} />
      <Route path="/Admin" element={<AdminLayout/>}>
        <Route index element={<AdminTimetable />} />
        <Route path="AdminAffectation" element={<AdminAffectation/>} />
        <Route path="AdminNotification" element={<AdminNotification/>} />
        <Route path="AdminTeacher" element={<AdminTeacher/>} />
      </Route>
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  )
}

export default App

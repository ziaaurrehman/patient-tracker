import SideBar from "./components/Sidebar/SideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import AllPatientData from "./pages/AllPatientData";
import Login from "./Login";
import Addnewpatient from "./pages/Addnewpatient";
export default function routes() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
      <SideBar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-patient-data" element={<AllPatientData />} />
          {/* <Route path="*" element={<> not found</>} /> */}
          <Route path="/add-new-patient" element={<Addnewpatient />} />
        </Routes>
      </SideBar>
    </>
  );
}

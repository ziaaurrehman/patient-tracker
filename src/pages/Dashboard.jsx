import DashboardHeader from "../components/DashboardHeader";
import Userdata from "../components/Userdata";
import MapingData from "../components/Patient-appointment/MapingData";
const Dashboard = () => {
  return (
    <div className="">
      <DashboardHeader />
      <p
        className="dash_title
      pt-2"
      >
        Dashboard
      </p>
      <Userdata />
      <MapingData />
    </div>
  );
};

export default Dashboard;

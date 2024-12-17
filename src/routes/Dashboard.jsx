import BreadCrumb from "../Components/PageComponents/BreadCrumb";
import DashboardCards from "../Components/PageComponents/Cards";
import Chart from "../Components/PageComponents/Chart";
import DashboardHeader from "../Components/PageComponents/DashboardHeader";
import DashboardTable from "../Components/PageComponents/DashboardTable";

export default function Dashboard() {

  return (
    <div className='dashboard'>
      <BreadCrumb />
      <DashboardHeader />
      <DashboardCards />
      <Chart />
      <DashboardTable />
    </div>
  );
}
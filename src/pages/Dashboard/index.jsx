<<<<<<< HEAD
import CardPerfil from "../../components/molecules/CardPerfil";
=======
import DashboardHeader from "../../components/organisms/DashboardHeader";
>>>>>>> 5ea2469bbe48d0cd5882543b56b8954501b6a9e5
import StoreSection from "../../components/organisms/StoresSection";
import Meet from "../../components/molecules/Meet";
import { GridContainer } from "./styles";

const Dashboard = () => {
  return (
<<<<<<< HEAD
    <div>
      DashBoard
      {/* <StoreSection /> */}
      <CardPerfil />
    </div>
=======
    <GridContainer>
      <div className="SidebarContainer">
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quam
          similique aliquam quibusdam aut! Dignissimos maiores sapiente,
          consequatur veritatis ratione id officiis odit necessitatibus sed,
          pariatur doloribus corrupti, provident saepe!
        </div>
      </div>
      <div className="HeaderContainer">
        <DashboardHeader />
      </div>
      <div className="SectionContainer">
        <StoreSection />
      </div>
    </GridContainer>
>>>>>>> 5ea2469bbe48d0cd5882543b56b8954501b6a9e5
  );
};

export default Dashboard;

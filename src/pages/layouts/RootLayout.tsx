import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header";
import Footer from "../../components/Footer";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};

export default RootLayout;

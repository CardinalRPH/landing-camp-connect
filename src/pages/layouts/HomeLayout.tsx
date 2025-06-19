import { Outlet } from "react-router-dom";
import HomeInspSection from "../../components/HomeInspSection";

const HomeLayout = () => {
    return (
        <main>
            <Outlet/>
            <HomeInspSection/>
        </main>
    )
};

export default HomeLayout;

import { Navbar } from "../../components/Navbar.tsx";
import { HomeBody } from "./HomeBody/HomeBody.tsx";
import { HomeHeader } from "./HomeHeader/HomeHeader"
import { HomeSignup } from "./HomeSignup/HomeSignup"
import "./index.tsx"

export const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <HomeHeader/>
            <HomeBody/>
            <HomeSignup/>
        </div>
    );
}

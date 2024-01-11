import { Navbar } from "../../components/Navbar/Navbar.tsx";
import { HomeBody } from "./HomeBody/HomeBody.tsx";
import { HomeHeader } from "./HomeHeader/HomeHeader"
import { HomeSignup } from "./HomeSignup/HomeSignup"
import "./index.tsx"

//home component consisting of a navbar, home header, body and signup section
export const Home = () => {
    return (
        <div className="home">
            <Navbar onHomePage={true} onForumPage={false}/>
            <HomeHeader/>
            <HomeBody/>
            <HomeSignup/>
        </div>
    );
}

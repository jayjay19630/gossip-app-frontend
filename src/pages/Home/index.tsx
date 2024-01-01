import { HomeHeader } from "./HomeHeader/HomeHeader"
import { HomeSignup } from "./HomeSignup/HomeSignup"
import "./index.tsx"

export const Home = () => {
    return (
        <div className="home">
            <HomeHeader/>
            <HomeSignup/>
        </div>
    );
}

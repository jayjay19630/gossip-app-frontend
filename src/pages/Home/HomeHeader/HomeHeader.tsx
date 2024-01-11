import "./HomeHeader.css"

//home header section with catchy headline
export const HomeHeader = () => {
    return (
        <div className="home-header">
            <div className="home-text">
                <div className="home-title">grapevine</div>
                <div className="home-subtitle">a web forum for all things NUS</div>
            </div>
            <img src="src/assets/images/gossip-ear.jpeg"></img>
        </div>
    );
}

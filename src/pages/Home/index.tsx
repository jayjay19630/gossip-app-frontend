import "./index.css"

export const Home = () => {
    return (
        <div className="home">
            <div className="home-header">
                <div className="home-text">
                    <div className="home-title">Welcome to The <span className="grape-text">GRAPEVINE</span>🍇</div>
                    <div className="home-subtitle">A web forum for all things NUS</div>
                </div>
                <img src="src/assets/gossip-ear.jpeg"></img>
            </div>
            <div className="home-signup">
                <div>Ready to make rumors come to life?</div>
                <button>SIGN UP</button>
            </div>
        </div>
    );
}

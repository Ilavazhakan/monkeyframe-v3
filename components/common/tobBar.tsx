import Lottie from "react-lottie-player";
import animationData from "../../public/lottie/MF Logo.json"
interface topBarProps{
    page?:string
}
const TopBar = ({page}:topBarProps) => {
    return (
        <div>
            <nav className="navbar main-navbar">
                <div className="full-length-menu">
                    <div className="navbar-left">

                        <a className="navbar-brand" href="/">
                            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
                            <Lottie
                                loop
                                animationData={animationData}
                                play
                                style={{ width: 60, height: 60 }}
                            />
                            <img src="images/svg/logo-text.svg" alt="Monkeyframes logo" />
                        </a>
                        {page=="App"? <input className="input-elevated" type="text" placeholder="Search" />:null}

                       

                    </div>
                    <div className="navbar-right">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/icons">App</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">What's new</a>
                            </li>
                        </ul>

                        <div className="dropdown">
                            <button className="mobile-menu dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 18V20H5V18H16ZM21 11V13H3V11H21ZM19 4V6H8V4H19Z"></path></svg>
                            </button>
                            <div className="mobile-menu-card dropdown-menu dropdown-menu-end">
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <a className="nav-link" href="app.html">App</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">What's new</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default TopBar;
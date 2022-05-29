import{Link} from "react-router-dom";


function Menu () {
    return (
        <div className="flex-container">
          
            <Link className="logo" to="/">Study English</Link>
                <nav className="nav">
                    <ul className="flex-cont-menu">
                        <li className="home">
                            <Link className="home__link" to="/">Home</Link>
                        </li>
                        <li className="game">
                            <Link className="game__link" to="/game">Game</Link>
                        </li>
                    </ul>
                </nav>
              
        
        </div>
    )
}

export default Menu;
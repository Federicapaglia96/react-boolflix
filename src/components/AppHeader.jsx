import { NavLink } from "react-router-dom";

function AppHeader() {
    return (
        <>
            <main className="header">
                <ul className="navlinklista">
                    <li className="navlink">
                        <NavLink className={({ isActive }) =>
                            isActive ? "activeLink" : ""
                        } to="/home">Home</NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink className={({ isActive }) =>
                            isActive ? "activeLink" : ""
                        } to="/serietv">Serie Tv</NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink className={({ isActive }) =>
                            isActive ? "activeLink" : ""
                        } to="/Film">Film</NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink className={({ isActive }) =>
                            isActive ? "activeLink" : ""
                        } to="/Originali">Orignali</NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink className={({ isActive }) =>
                            isActive ? "activeLink" : ""
                        } to="/aggiuntidirecente">Aggiunti di recente </NavLink>
                    </li>
                    <li className="navlink">
                        <NavLink className={({ isActive }) =>
                            isActive ? "activeLink" : ""
                        } to="/lamialista">La mia lista</NavLink>
                    </li>

                </ul>
            </main>
        </>
    )
}

export default AppHeader
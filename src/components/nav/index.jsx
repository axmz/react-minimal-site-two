import React  from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import routes from '../../routes'

const Submenu = () => {
    const match = useRouteMatch(["/events", "/places", "/"])

    return (
        <div className="nav__submenu">
            {routes[match.path].map((r) => {
                const to = match.path === "/" ? match.path + r : match.path + "/" + r
                return (<Link key={r} className="nav__button" to={to}>{r}</Link>)
            })}
        </div>
    )
}

const Nav = () => {
    return (
        <nav className="nav">
            <Link className="nav__button" to={"/"}>home</Link>
            <Link className="nav__button" to={"/events"}>events</Link>
            <Link className="nav__button" to={"/places"}>places</Link>
            {<Submenu />}
        </nav>
    )
}

export default Nav
import { Link } from "react-router-dom";
import style from './Nav.module.css'

import { breadcrumbsLinks} from './breadcrumbsLinks'

function Nav() {
  return (<>
    <nav className={style.nav}>
        <ul className={style.breadcrumbs__list}>
          {breadcrumbsLinks.map(items => {
            return (
            <li key = {items.text}>
              <Link to ={items.link} >{items.text}</Link>
            </li>
          )})}
        </ul>
    </nav>
  </>);
}

export default Nav;
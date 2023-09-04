import { Link } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs'
import './Breadcrumbs.css'
const routes = [
  { path: '/users/:userId', breadcrumb: 'Example 1' },
  { path: '/data', breadcrumb: 'Example 2' }
];

function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes);
  console.log(breadcrumbs)

  return (
    <nav className='bread-cum-bar'>
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <Link className='breadcum-text-style' key={match.url} to={match.url}>
          {breadcrumb} /
        </Link>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
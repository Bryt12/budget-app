import { Link, routes } from '@redwoodjs/router'

const BudgetLayout = ({ children }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
          <li>
            <Link href="/timeframes">Timeframes</Link>
          </li>
          <li>
            <Link href="/planned-transactions">Planned Transactions</Link>
          </li>
          <li>
            <Link href="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default BudgetLayout

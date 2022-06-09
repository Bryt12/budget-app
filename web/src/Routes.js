// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import TimeframesLayout from 'src/layouts/TimeframesLayout'
import PlannedTransactionsLayout from 'src/layouts/PlannedTransactionsLayout'
import CategoriesLayout from 'src/layouts/CategoriesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={TimeframesLayout}>
        <Route path="/timeframes/new" page={TimeframeNewTimeframePage} name="newTimeframe" />
        <Route path="/timeframes/{id:Int}/edit" page={TimeframeEditTimeframePage} name="editTimeframe" />
        <Route path="/timeframes/{id:Int}" page={TimeframeTimeframePage} name="timeframe" />
        <Route path="/timeframes" page={TimeframeTimeframesPage} name="timeframes" />
      </Set>
      <Set wrap={PlannedTransactionsLayout}>
        <Route path="/planned-transactions/new" page={PlannedTransactionNewPlannedTransactionPage} name="newPlannedTransaction" />
        <Route path="/planned-transactions/{id:Int}/edit" page={PlannedTransactionEditPlannedTransactionPage} name="editPlannedTransaction" />
        <Route path="/planned-transactions/{id:Int}" page={PlannedTransactionPlannedTransactionPage} name="plannedTransaction" />
        <Route path="/planned-transactions" page={PlannedTransactionPlannedTransactionsPage} name="plannedTransactions" />
      </Set>
      <Set wrap={CategoriesLayout}>
        <Route path="/categories/new" page={CategoryNewCategoryPage} name="newCategory" />
        <Route path="/categories/{id:Int}/edit" page={CategoryEditCategoryPage} name="editCategory" />
        <Route path="/categories/{id:Int}" page={CategoryCategoryPage} name="category" />
        <Route path="/categories" page={CategoryCategoriesPage} name="categories" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

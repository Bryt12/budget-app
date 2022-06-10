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
import BudgetLayout from 'src/layouts/BudgetLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Route path="/create-planned-transaction" page={CreatePlannedTransactionPage} name="createPlannedTransaction" />
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
      <Set wrap={BudgetLayout}>
        <Route path="/" page={CreatePlannedTransactionPage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

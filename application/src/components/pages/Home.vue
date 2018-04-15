<template>
  <main class="l-home-page">
    <div class="l-home">
      <h4 class="white--text text-xs-center my-0">Budget Manager</h4>

      <budget-list>
        <budget-list-header slot="budget-list-header"></budget-list-header>
        <budget-list-body slot="budget-list-body" :budgets="budgets"></budget-list-body>
      </budget-list>
    </div>
  </main>
</template>

<script>
import Axios from 'axios'
import Auth from '@/components/pages/auth'
import BudgetList from '@/components/budget/BudgetList'
import BudgetListHeader from '@/components/budget/BudgetListHeader'
import BudgetListBody from '@/components/budget/BudgetListBody'

const BudgetManagerAPI = `http://${window.location.hostname}:3001`

export default {
  components: { BudgetListHeader, BudgetListBody, BudgetList },
  data () {
    return {
      budgets: []
    }
  },
  methods: {
    getAllUsers (context) {
      Axios.get(`${BudgetManagerAPI}/api/v1/budget`, {
        headers: { 'Authorization': Auth.getAuthHeader(this) },
        params: { user_id: this.$cookie.get('budget_user_id') }
      }).then(({ data }) => (this.budgets = data))
    }
  },
  mounted () {
    this.getAllUsers()
  }
}
</script>

<style lang="scss" scoped>
  @import "./../../assets/styles";

  .l-home {
    background-color: $background-color;
    margin: 25px auto;
    padding: 15px;
    min-width: 272px;
  }
</style>

import Axios from 'axios'
import router from '@/router'
import getCookie from '@/utils/getCookie'

const BudgetManagerAPI = `http://${window.location.hostname}:3001`

export default {
  user: { authenticated: false },
  authenticate (context, credentials, redirect) {
    Axios.post(`${BudgetManagerAPI}/api/v1/auth`, credentials)
      .then(({ data }) => {
        context.$cookie.set('budget_token', data.token, '1D')
        context.$cookie.set('budget_user_id', data.user._id, '1D')
        context.validLogin = true
        this.user.authenticated = true

        if (redirect) router.push(redirect)
      }).catch(e => {
        context.snackbar = true
        context.message = e.response ? e.response.data.message : e.message
      })
  },
  signup (context, credentials, redirect) {
    Axios.post(`${BudgetManagerAPI}/api/v1/signup`, credentials)
      .then(() => {
        context.validSignUp = true
        this.authenticate(context, credentials, redirect)
      }).catch(({ response: { data } }) => {
        context.snackbar = true
        context.message = data.message
      })
  },
  signout (context, redirect) {
    context.$cookie.delete('budget_token')
    context.$cookie.delete('budget_user_id')
    this.user.authenticated = false

    if (redirect) router.push(redirect)
  },
  checkAuth () {
    this.user.authenticated = !!getCookie('budget_token')
  },
  getAuthHeader (context) {
    return `Bearer ${context.$cookie.get('budget_token')}`
  }
}

<template>
  <div class="row mt-5 justify-content-center">
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">Hi Please Login</div>
        <div class="card-body">
          <form method="POST" @submit.prevent="login">
            <input type="hidden" name="_hidden" value="POST">
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" v-model="email" name="email" class="form-control" id="exampleInputEmail1" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" v-model="password" name="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" v-model="is_remember" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Axios from 'axios'
import auth from '@/auth'

export default {
  data: () => ({
    email: '',
    password: '',
    is_remember: false,
  }),
  methods: {
    login() {
      const creds = {
        email: this.email,
        password: this.password
      }

      auth.login(creds)
        .then((response) => {
          // eslint-disable-next-line no-console
          console.log('success', response)

          localStorage.setItem('userToken', response.data.api_token)
          this.$parent.userToken = response.data.api_token
          this.$parent.setNotification('success', 'Login Successfully - Welcome, '+ response.data.name)

          this.$router.push({ name: 'home' })
        })
        .catch((error) => {
          // eslint-disable-next-line no-console
          // console.log('error woi', error, self.$parent.notification)

          this.password = ''
          this.$parent.setNotification('danger', error.response.data.message)
        })
    }
  }
}
</script>

<style>
</style>
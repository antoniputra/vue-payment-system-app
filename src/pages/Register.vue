<template>
  <div class="row mt-5 justify-content-center">
    <div class="col-md-5">
      <div class="card">
        <div class="card-header">Register Yourself</div>
        <div class="card-body">
          <form method="POST" @submit.prevent="register">
            <input type="hidden" name="_hidden" value="POST">
            
            <div class="form-group">
              <label for="inputName">Name</label>
              <input type="text" v-model="name" name="name" class="form-control" id="inputName" />
            </div>
            
            <div class="form-group">
              <label for="inputEmail">Email address</label>
              <input type="email" v-model="email" name="email" class="form-control" id="inputEmail" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            <div class="form-group">
              <label for="inputPassword1">Password</label>
              <input type="password" v-model="password" name="password" class="form-control" id="inputPassword1" />
            </div>

            <div class="form-group">
              <label for="inputPassword2">Password Confirmation</label>
              <input type="password" v-model="password_confirmation" name="password_confirmation" class="form-control" id="inputPassword2" />
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '@/auth'

export default {
  data: () => ({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  }),
  methods: {
    register() {
      // eslint-disable-next-line no-console
      // console.log('hi')

      const creds = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation,
      }

      auth.register(creds)
        .then((response) => {
          // eslint-disable-next-line no-console
          // console.log(response)

          localStorage.setItem('userToken', response.data.api_token)

          this.$parent.userToken = response.data.api_token
          this.$parent.setNotification('success', 'Register Successfully - Welcome, '+ response.data.name)

          this.$router.push({ name: 'home' })
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          // console.log(error)

          this.$parent.setNotification('danger', error.response.data.errors, error.response.data.message)
        })
    }
  }
}
</script>

<style>

</style>
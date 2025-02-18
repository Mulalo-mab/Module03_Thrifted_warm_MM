<template>

<h1>LOGIN</h1>
<div>
    <form @submit.prevent="handleLogin">
        <div class="mb-3">
  <label for="formGroupExampleInput" class="form-label">Email:</label>
  <input type="email" class="form-control" id="formGroupExampleInput" v-model="email" placeholder="jonh.doe@example.com">
</div> <br>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">Password:</label>
  <input type="password" class="form-control" id="formGroupExampleInput2" v-model="password" placeholder="password">

  </div> <br> <br>
  <div class="col-auto">
    <button type="submit" class="btn btn-primary">Login</button>
  </div>
</form>
   
</div>
</template>

<script>
export default {
  data() {
    return {
        users:[
            {email: 'mulalo@gmail.com',
      password: 'password1'},
      {email: 'sia@gmail.com',
      password: 'password2'}
        ],
      formData:{
        email: '',
        password:''
      }
    };
  },
  methods: {
    handleLogin() {
        const email= this.formData.email.trim();
        const password = this.formData.password.trim();

        const user= this.users.find(user => user.email === email && user.password === password)
      // Check if the user is an existing user
      if (user) {
        alert(`You are logged in.`)
        this.$router.push({name:'home'});
      } else {
        alert('Invalid email or password');
        this.$router.push({name:'register'});
      }
    }
  }
};
</script>
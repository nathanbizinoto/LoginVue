const LoginComponent = {
    template: `
      <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="login">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="credentials.email" required>
  
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="credentials.password" required>
  
          <button type="submit">Entrar</button>
        </form>
      </div>
    `,

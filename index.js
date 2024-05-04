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
    data() {
        return {
          credentials: {
            email: '',
            password: ''
          }
        };
      },
      methods: {
        login() {
          console.log('Dados de login:', this.credentials);
        }
      }
    };
    
    const SigninComponent = {
      template: `
        <div class="container">
          <h1>Cadastro</h1>
          <form @submit.prevent="register">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="user.email" required>
    
            <label for="password">Senha:</label>
            <input type="password" id="password" v-model="user.password" required>
    
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      `,
      data() {
        return {
          user: {
            email: '',
            password: ''
          }
        };
      },
      methods: {
        register() {
          console.log('Dados de cadastro:', this.user);
        }
      }
    };
    
    const app = Vue.createApp({});
    app.component('login-component', LoginComponent);
    app.component('signin-component', SigninComponent);
    app.mount('#app');
    
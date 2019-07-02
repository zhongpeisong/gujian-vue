<template>
  <div>
    <div class="components-input-demo-size" style="margin: 0 55%;padding: 25vh">
      <a-card>
        <a-form :form="form"
                :layout="formLayout"
                class="login-form"
                style="width: 300px"
                @submit="handleSubmit"
                id="components-form-demo-normal-login">
          <a-form-item>
            <a-input
              placeholder="please input your userName"
              v-model="form.userName"
            >
              <a-icon
                slot="prefix"
                type="user"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input placeholder="please input your password"
                     type="password"
                     v-model="form.userPassword">
              <a-icon
                slot="prefix"
                type="lock"
                style="color: rgba(0,0,0,.25)"
              />
            </a-input>
          </a-form-item>
          <a-button @click="login" class="login-form-button">登录</a-button>
        </a-form>
      </a-card>
    </div>
  </div>
</template>

<script>
  import Config from '../Config'
  import AFormItem from "ant-design-vue/es/form/FormItem";

  export default {
    name: "Login",
    components: {AFormItem},
    data() {
      return {
        form: {
          userName: '',
          userPassword: '',
        },
        formLayout: 'horizontal',
      }
    },
    mounted() {

    },

    computed: {},

    methods: {

      login: function () {
        this.$http.post(Config.login, this.form).then((response => {
          if (response.data.code == '200') {
            const a = response.data.data.message;
            sessionStorage.setItem("token", a);
            this.$router.push({path: '/menu'})
            console.log(a)
            console.log("success")
          } else {
            console.log("error")
          }
        }))
      },

      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
    }
  }
</script>

<style scoped>
  #components-input-demo-size {
    width: 300px;
  }

  #components-input-demo-size .ant-input {
    width: 300px;
    margin: 0 0px 0px 0;
  }

  #components-form-demo-normal-login .login-form {
    width: 300px;
  }

  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }

  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>

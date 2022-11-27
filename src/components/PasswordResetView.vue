<template>
    <BackgroundView />
    <div class="index">
        <v-container fill-height fluid id="login-contain">
            <v-card id="login_box">
                <v-col cols="12" md="5">
                    <v-card-text>
                        <br>
                        <h1 class="text-center">设置新密码</h1>
                        <br><br>
                        <v-form>
                            <v-text-field label="用户名" v-model="username" name="username" prepend-icon="mdi-account"
                                disabled type="text" />
                            <br>
                            <v-text-field label="新密码" v-model="password" id="password" name="password"
                                prepend-icon="mdi-lock" type="password" />
                        </v-form>
                    </v-card-text>
                    <div class="text-center">
                        <v-btn color="primary" @click="do_reset_pwd">确定</v-btn>
                    </div><br>
                </v-col>
                <v-col cols="12" md="6">
                    <!--                            <img src="http://192.168.13.68/logo.png" id="right_img">-->
                </v-col>
            </v-card>
        </v-container>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import global_ from '../components/GLOBAL.vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import BackgroundView from './BackgroundView.vue';
export default defineComponent({
    components: {
        BackgroundView,
    },
    data: () => ({
        login_reseting_pwd: 0,
        username: "",
        password: "",
        token: "",
    }),
    methods: {
        get_url_param() {
            let url = new URL(window.location.href);
            return new URLSearchParams(url.search.slice(1));
        },
        do_reset_pwd() {
            global_.$axios.post('user/user_reset_password', {
                username: this.username,
                token: this.token,
                password: this.password,
            }
            ).then((response: any) => {
                createToast("密码已更改！",
                    { showIcon: true, timeout: 2000, position: 'top-right', hideProgressBar: true, type: 'success' });
                this.$router.push('/login')
            }).catch((error: any) => {
                if (error && error.response) {
                    if (error.response.status === 401) {
                        createToast("链接有误，请重新申请。",
                            { showIcon: true, timeout: 2000, position: 'top-right', hideProgressBar: true, type: 'danger' });
                    }
                    else if (error.response.status === 403) {
                        createToast("尝试错误过多，请稍后再试。",
                            { showIcon: true, timeout: 2000, position: 'top-right', hideProgressBar: true, type: 'danger' });
                    }
                }
            })
        },
    },
    created: function () {
        this.username = this.get_url_param().get("username") || "";
        this.token = this.get_url_param().get("token") || "";
    }
});
</script>
<style scoped>
#right_img {
    max-width: 100%;
    max-height: 100%;
    display: block;
    margin: auto;
}

#login-contain {
    /*    background-image: url("https://d2ph5fj80uercy.cloudfront.net/04/cat4575.jpg");
    background-size: cover;
    background-attachment: fixed;*/
    height: 100%;
    background-color: #fafafa;
}

.index {
    padding: 0px;
    margin: 0px;
    height: 100%;
}

#login-contain {
    display: flex;
    flex-direction: column;
    padding-top: 4%;
    padding-bottom: 4%;
    justify-content: center;
    padding-left: 15%;
    padding-right: 15%;
    box-sizing: border-box;
    font-family: "Microsoft YaHei", "Segoe UI", "Lucida Grande", Helvetica, Arial, FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif;
    margin: 0;
}
</style>
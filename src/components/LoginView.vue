<template>
    <BackgroundView />
    <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="10">
            <div class="index">
                <v-container id="login-contain">
                    <v-card id="login_box">
                        <v-row>
                            <v-col v-if="login_reseting_pwd === 0" cols="12" md="5">
                                <v-card-text>
                                    <h1 class="text-center">登录</h1>
                                    <br><br>
                                    <v-form>
                                        <v-text-field label="用户名" v-model="username" name="username"
                                            prepend-icon="mdi-account" type="text" />
                                        <br>
                                        <v-text-field label="密码" v-model="password" id="password" name="password"
                                            prepend-icon="mdi-lock" type="password" />
                                    </v-form>
                                </v-card-text>
                                <a href="javascript:void(0)" @click="reset_pwd">重置密码</a>
                                <div class="text-center">
                                    <v-btn color="primary" @click="login">登录</v-btn>
                                </div><br>
                            </v-col>
                            <v-col v-else-if="login_reseting_pwd === 1" cols="12" md="5">
                                <v-card-text>
                                    <h1 class="text-center">重置密码</h1>
                                    <br><br>
                                    <v-form>
                                        <v-text-field label="用户名" v-model="username" name="username"
                                            prepend-icon="mdi-account" type="text" />
                                        <br>
                                        <v-text-field label="邮箱" v-model="email" id="email" name="email"
                                            prepend-icon="mdi-email" type="text" />
                                    </v-form>
                                </v-card-text><a href="javascript:void(0)" @click="cancel_reset_pwd">返回</a>
                                <div class="text-center">
                                    <v-btn color="primary" @click="user_reset_pwd">确定</v-btn>
                                </div><br>
                            </v-col>
                            <v-col cols="12" md="6">
                                <PieChart :chart-data="chartData" />
                                <!--                            <img src="http://192.168.13.68/logo.png" id="right_img">-->
                            </v-col>
                        </v-row>
                    </v-card>
                </v-container>
            </div>
        </v-col>
        <v-col cols="1"></v-col>
    </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
import global_ from '../components/GLOBAL.vue'
import BackgroundView from './BackgroundView.vue';
import PieChart from './Charts/PieChart.vue';
export default defineComponent({
    components: {
        BackgroundView,
        PieChart,
    },
    data: () => ({
        chartData: {
            labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
            datasets: [
                {
                    backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                    data: [40, 20, 80, 10]
                }
            ]
        }, chartOptions: {
            responsive: true,
            maintainAspectRatio: false
        },
        login_reseting_pwd: 0,
        username: "",
        password: "",
        email: "",
    }),
    methods: {
        reset_pwd() {
            this.login_reseting_pwd = 1;
        },
        on_login_complete() {
            this.$router.push('/main')
        },
        cancel_reset_pwd() {
            this.login_reseting_pwd = 0;
        },
        login() {
            global_.$axios.post('user/login',
                {
                    username: this.username,
                    password: this.password
                }
            ).then((response: any) => {
                (this as any).$store.dispatch("isLogin").then(() => {
                    var user_info = (this as any).$store.getters.user;
                    createToast("欢迎回来，" + user_info.nickname + "！",
                        { showIcon: true, timeout: 2000, position: 'top-right', hideProgressBar: true, type: 'success' });
                    setTimeout(() => {
                        this.on_login_complete();
                    }, 1000);
                })
            }).catch((error: any) => {
                if (error && error.response) {
                    if (error.response.status === 401) {
                        createToast("用户名或密码错误！",
                            { showIcon: true, timeout: 2000, position: 'top-right', hideProgressBar: true, type: 'danger' });
                    }
                    else if (error.response.status === 403) {
                        createToast("密码错误过多，请稍后再试。",
                            { showIcon: true, timeout: 2000, position: 'top-right', hideProgressBar: true, type: 'danger' });
                    }
                }
            });
        },
        user_reset_pwd() {
            global_.$axios.post('user/send_reset_password_mail', {
                username: this.username,
                email: this.email
            }
            ).then((response: any) => {
                createToast({ title: "申请成功", description: "若未收到，请检查用户名与邮件地址是否匹配。" },
                    { showIcon: true, timeout: 3000, position: 'top-right', hideProgressBar: true, type: 'success' });
            });
        },
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
    box-sizing: border-box;
    font-family: "Microsoft YaHei", "Segoe UI", "Lucida Grande", Helvetica, Arial, FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif;
    margin: 0;
}
</style>
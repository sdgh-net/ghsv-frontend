<script lang="ts">
import axios from 'axios';
import qs from 'qs';
import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'
const TITLE = "监督系统"
const BACKEND = "http://127.0.0.1:9805/api/"
var $axios = axios.create({
    baseURL: BACKEND,
    timeout: 2000,
    withCredentials: true,
    headers: {},
});

$axios.interceptors.request.use(config => {
    if (config.method?.toLowerCase() === "post") {
        config.headers = config.headers || {};
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        config.data = qs.stringify(config.data)
    }
    return config
})
$axios.interceptors.response.use(function (response) {
    return response;
}, function (error: any) {
    if (!error.response) {
        createToast("服务器炸了，土豆熟了！",
            { showIcon: true, timeout: 10000, position: 'top-right', hideProgressBar: true, type: 'danger', showCloseButton: true });
    }
    return Promise.reject(error);
});
function getRandColor() {
    return;
}
export default
    {
        TITLE,
        BACKEND,
        $axios,
        getRandColor,
    }
</script>
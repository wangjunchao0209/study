<template>
    <div>
        <div class="catch">
            <el-input v-model="inputs" placeholder="请输入抓取站点"></el-input>
            <el-button type="primary" @click="catchHand()">主要按钮</el-button>
        </div>
        <div>
            <pre>
                前端代码：
                <code>
                    data() {
                        return {
                            inputs: 'http://johnyu.cn:3000/albums'
                        }
                    },
                    methods: {
                        async catchHand () {
                            if (this.inputs === '') {
                                this.$message.error('内容不能为空')
                                return
                            }
                            const res = await catchService({ interName: 'http://johnyu.cn', path: '/albums', port: 3000 })
                        }
                    }
                </code>
            </pre>
            <pre>
                后台代码：
                <code>
                    app.js
                        var catchServerRouter = require('./routes/catchServers');
                        app.use('/catchServer', catchServerRouter)

                    catchServer.js
                        var express = require('express');
                        var router = express.Router();
                        const http = require('http');
                        console.log(21312345234)
                        /* GET users listing. */
                        router.post('/', function(req, res, next) {
                            const options = {
                                host: req.body.interName,
                                port: req.body.port,
                                path: req.body.path
                            }
                            const reqs = http.request(options);
                            reqs.end();
                            reqs.on('response', (info) => {
                                info.on('data', function (chunk) {
                                    res.send(chunk.toString());
                                })
                            });
                        });
                        module.exports = router;
                </code>
            </pre>
        </div>
    </div>
</template>
<script>
import { catchService } from '@/service/service.js'
export default {
    data() {
        return {
            inputs: 'http://johnyu.cn:3000/albums'
        }
    },
    methods: {
        async catchHand () {
            if (this.inputs === '') {
                this.$message.error('内容不能为空')
                return
            }
            const res = await catchService({ interName: 'http://johnyu.cn', path: '/albums', port: 3000 })
        }
    },
}
</script>
<style lang="scss" scoped>
    .catch {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        div {
            margin: 0 .5rem;
        }
    }
</style>
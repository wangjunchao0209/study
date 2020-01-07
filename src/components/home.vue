<template>
    <header>
        <div>登录成功</div>
        <div @click="loginOut">退出</div>
    </header>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        if (!sessionStorage['user']) {
            this.$message.error('请先登录')
            this.$router.replace({path: '/'})
            return
        }
        this.$message.success('欢迎您')
    },
    methods: {
        loginOut () {
            this.$confirm('退出?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                })
                sessionStorage.clear()
                this.$router.replace({path: '/'})
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });          
            });
        }
    },
}
</script>
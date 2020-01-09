<template>
    <div>
        <Header
            @changLink="changLink"
        />
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
        
</template>
<script>
import Header from './Header'
export default {
    components: {
        Header
    },
    methods: {
        changLink (path) {
            this.$router.replace({path})
        }
    },
}
</script>
<style lang="scss" scoped>
    .content {
        width: 98%;
        margin: 2rem auto;
        flex: 1;
    }
</style>
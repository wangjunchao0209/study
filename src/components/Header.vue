<template>
    <header>
        <div
            v-for="(item, index) in titleList"
            :key="index"
            :class="[{'active': isThisCLass === index}]"
            @click="link(index, item.path)"
        >{{item.name}}</div>
    </header>
</template>
<script>
export default {
    props: [],
    data() {
        return {
            isThisCLass: (sessionStorage['pos']&&JSON.parse(sessionStorage['pos'])) || 0,
            titleList: [
                {
                    name: '音乐管理',
                    path: '/home/music-control'
                },
                {
                    name: '爬虫程序',
                    path: '/home/catch-data'
                },
                {
                    name: '存储程序',
                    path: '/home/save-data'
                },
                {
                    name: 'mocha测试',
                    path: '/home/mocha-check'
                },
                {
                    name: '音乐接口测试',
                    path: '/home/music-test'
                }
            ]
        }
    },
    methods: {
        link (i, path) {
            sessionStorage['pos'] = i
            this.isThisCLass = i
            this.$emit('changLink', path)
        }
    },
}
</script>
<style lang="scss" scoped>
    .active {
        color: #1884fd;
        border-bottom-color: #1884fd!important;
    }
    header {
        padding: 0 2rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 1.4rem;
        max-width: 100%;
        height: 5rem;
        background-color: aliceblue;
        div {
            height: 100%;
            width: 10rem;
            line-height: 2;
            display: flex;
            align-items: center;
            justify-content: center;
            border-bottom: 2px solid transparent;
        }
    }
</style>
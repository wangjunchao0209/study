<template>
    <div>
        <div>
            <strong>
                <el-button @click="addRow()" type="success" size="small">添加</el-button>
            </strong>
        </div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="album_id" label="album_id" width="250"></el-table-column>
            <el-table-column prop="album_name" label="专辑名" width="200"></el-table-column>
            <el-table-column prop="public_time" label="价格" width="200"></el-table-column>
            <el-table-column prop="week" label="价格" width="200"></el-table-column>
            <el-table-column prop="price" label="价格" width="200"></el-table-column>
            <el-table-column prop="week" label="价格" width="200"></el-table-column>
            <el-table-column prop="cover" label="价格" width="200"></el-table-column>
            <el-table-column prop="singers" :formatter="formatCon" label="歌手" width="200"></el-table-column>
            <el-table-column fixed="right" label="操作" width="300">
                <template slot-scope="scope">
                <el-button @click="see(scope.row)" type="text" size="small">详细内容</el-button>
                <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="add(scope.row)" type="text" size="small">追加歌手</el-button>
                <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Edit
            v-if="seeThis"
            :val="seeThis"
            :isSee="isSee"
            :dialogFormVisible.sync="dialogFormVisible"
        />
    </div>
</template>
<script>
import Edit from './Edit'
import { getSingService } from '@/service/service.js'

export default {
    components: {
        Edit
    },
    data() {
        return {
            isSee: false,
            seeThis: null,
            dialogFormVisible: false,
            tableData: [
                {
                    album_id: "3751508",
                    album_name: "A.I. 爱",
                    public_time: "2017-12-11",
                    week: 50,
                    price: 89,
                    cover: "http://imgcache.qq.com/music/photo/album_300/08/300_albumpic_3751508_0.jpg",
                    singers: [
                        {
                        singer_id: "265",
                        singer_name: "王力宏"
                        }
                    ]
                },
                {
                    album_id: "3327203",
                    album_name: "Dreamer (梦想家)",
                    public_time: "2017-12-08",
                    week: 49,
                    price: 102,
                    cover: "http://imgcache.qq.com/music/photo/album_300/03/300_albumpic_3327203_0.jpg",
                    singers: [
                        {
                        singer_id: "941206",
                        singer_name: "Axwell Λ Ingrosso"
                        },
                        {
                        singer_id: "159855",
                        singer_name: "Trevor Guthrie"
                        }
                    ]
                },
                {
                    album_id: "3766915",
                    album_name: "Don't Don't Do It!",
                    public_time: "2017-12-13",
                    week: 50,
                    price: 65,
                    cover: "http://imgcache.qq.com/music/photo/album_300/15/300_albumpic_3766915_0.jpg",
                    singers: [
                        {
                        singer_id: "13317",
                        singer_name: "N.E.R.D"
                        },
                        {
                        singer_id: "28021",
                        singer_name: "Kendrick Lamar (肯德里克·拉马尔)"
                        }
                    ]
                },
                {
                    album_id: "3324740",
                    album_name: "Trigger Bang",
                    public_time: "2018-01-05",
                    week: 1,
                    price: 123,
                    cover: "http://imgcache.qq.com/music/photo/album_300/40/300_albumpic_3324740_0.jpg",
                    singers: [
                        {
                            singer_id: "5125",
                            singer_name: "Lily Allen (莉莉·艾伦)"
                        },
                        {
                            singer_id: "49917",
                            singer_name: "Giggs"
                        }
                    ]
                }
            ]
        }
    },
    mounted(){
        this.request()
    },
    methods: {
        addRow () {

        },
        see (s) {
            this.seeThis = s
            this.isSee = true
            this.dialogFormVisible = true
        },
        edit () {
            this.dialogFormVisible = true
        },
        add () {

        },
        del () {

        },
        async request () {
            const res = await getSingService()
            console.log(res, 888)
        },
        formatCon (row, column, cellValue, index) {
            let y = cellValue[0].singer_name
            if (cellValue.length === 1) {
                return y
            } else {
                return y + ' 等歌手'
            }
        }
    },
}
</script>
<style lang="scss" scoped>
    strong {
        display: inline-block;
        margin: 1rem 0;
        text-align: right;
    }
</style>
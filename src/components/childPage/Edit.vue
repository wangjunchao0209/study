<template>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="id" label-width="120px">
                <el-input v-if="!isSee" v-model="form.album_id" autocomplete="off"></el-input>
                <span v-else>{{form.album_id}}</span>
            </el-form-item>
            <el-form-item label="歌名" label-width="120px">
                <el-input v-if="!isSee" v-model="form.album_name" autocomplete="off"></el-input>
                <span v-else>{{form.album_id}}</span>
            </el-form-item>
            <el-form-item label="时间" label-width="120px">
                <el-input v-if="!isSee" v-model="form.public_time" autocomplete="off"></el-input>
                <span v-else>{{form.album_id}}</span>
            </el-form-item>
            <el-form-item label="周" label-width="120px">
                <el-input v-if="!isSee" v-model="form.week" autocomplete="off"></el-input>
                <span v-else>{{form.album_id}}</span>
            </el-form-item>
            <el-form-item label="价格" label-width="120px">
                <el-input v-if="!isSee" v-model="form.price" autocomplete="off"></el-input>
                <span v-else>{{form.album_id}}</span>
            </el-form-item>
            <el-form-item label="海报" label-width="120px">
                <img v-if="isSee" :src="form.cover" alt="">
                <el-input v-else v-model="form.singers" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="歌手" label-width="120px">
                <el-input v-if="!isSee" v-model="form.singers" autocomplete="off"></el-input>
                <span v-else>{{form.album_id}}</span>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel()">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    props: ['val', 'dialogFormVisible', 'isSee'],
    data() {
        return {
            form: {
                album_id: '',
                album_name: '',
                public_time: '',
                week: '',
                price: '',
                cover: '',
                singers: ''
            }
        }
    },
    mounted() {
        if (this.val) {
            this.form = JSON.parse(JSON.stringify(this.val))
        }
    },
    methods: {
        cancel () {
            this.$emit('update:dialogFormVisible', false)
        },
        sure () {

            this.cancel()
        }
    },
}
</script>
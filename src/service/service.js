import Vue from 'vue'
const me = new Vue()


export const userLogin = async param => {
    let url = 'https://api.myjson.com/bins/1c79v4'
    const res = await me.$http.get(url)
    return res.data
}
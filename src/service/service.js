import Vue from 'vue'
const me = new Vue()
const urls = 'http://locahost:8080'
let isDev = process.env.NODE_ENV === "development"
const addurl = u => {
    if (!isDev) {
        return u
    }
    return urls + u
}

export const catchService = async param => {
    let url = addurl('/catchServer')
    const res = await me.$http.post(url, param)
    return res
}

export const getSingService = async param => {
    let url = addurl('/getSing')
    const res = await me.$http.get(url)
    return res
}

export const delSingService = async param => {
    let url = addurl('/delSing')
    const res = await me.$http.post(url, param)
    return res
}

export const seeSingService = async param => {
    let url = addurl('/seeSing')
    const res = await me.$http.post(url, param)
    return res
}

export const addSingService = async param => {
    let url = addurl('/addSing')
    const res = await me.$http.post(url, param)
    return res
}

export const editSingService = async param => {
    let url = addurl('/editSing')
    const res = await me.$http.post(url, param)
    return res
}
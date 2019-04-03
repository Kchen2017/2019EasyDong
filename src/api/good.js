import { resolve } from "path";
import { rejects } from "assert";

export default {
    getList(url){
        return new Promise((resolve, rejects) => {
            fetch(url).then(res => {
                return res.json()
            }).then(data => {
                resolve(data)
            })
        })
    },

    getDetail(url){
        return new Promise((resolve)=>{
            fetch(url).then(res => {
                return res.json()
            }).then(data => {
                resolve(data)
            })
        })
    }
}
import service from "../../request"

export const artList = (data) =>{
    return service({
        url:'/api/gold',
        method:'post',
        data
    })
}
import service from "@/utils/request"

// 获取数据列表
export function getData(type, params) {
    // 获取全部数据
    if (type == 1) return service({
        url: '/products',
        method: 'GET',
    })
    // 获取指定id数据
    else return service({
        url: '/product',
        method: 'GET',
        params
    })
}

export function getUser(data) {
    return service({
        url: '/api/users',
        method: 'post',
        data
    })
}
export const isPC = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(userAgent)) {
        //移动端页面
       return false
    } else {
        //pc端页面
        return true
    }
}
import Cookie from "js-cookie";
export function isLogin(){
    return Cookie.get('chelun_acToken')
}
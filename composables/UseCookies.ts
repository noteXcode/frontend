import * as cryptoJs from 'crypto-js';
import Cookies from 'js-cookie';
let key="$*llin&$*rvic*$"

async function GetCookie(_cname:string) {
    let cookie:string = (Cookies.get(_cname) ? Cookies.get(_cname) : '')+''
    let decrypt = cryptoJs.AES.decrypt(cookie, key).toString(cryptoJs.enc.Utf8);
    return decrypt
}
async function SetCookie(_cname:string, _cvalue:any, _exdays:number) {
    let encrypted = cryptoJs.AES.encrypt(_cvalue, key).toString();
    const date = new Date();
    date.setTime(date.getTime() + (_exdays * 24 * 60 * 60 * 1000));
    let Expires = date
    Cookies.set(_cname, encrypted, {
        expires: Expires
    })
}

function DeleteCookie(_cname:string) {
    Cookies.remove((_cname + '')?.trim())
}


function DeleteAllCookies() {
    let cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        DeleteCookie(name);
    }
}

export default {
    get:GetCookie,set:SetCookie,delete:DeleteCookie,deleteAll:DeleteAllCookies
}
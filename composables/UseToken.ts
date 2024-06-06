
let UserToken:string=''
async function GetUserToken() {
    if (UserToken==='')
        return await UseCookies.get("U$3rT0x3Z");
    else
        return UserToken;
}

async function SetUserToken(_token:string) {
    await new Promise((resolve:any) => setTimeout(() => {
       UseCookies.set("U$3rT0x3Z", _token, 1);
        resolve();
    }, 2000));
}

export default{
    set:SetUserToken,
    get:GetUserToken
}
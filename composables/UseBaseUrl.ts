
//const runLocaly:boolean=true
export default function(){
    let BaseUrl:string=''
    const config = useRuntimeConfig()
   if(config.public.APPMODE =='development'){
            BaseUrl= config.public.LOCALURL
    } else {
        if ((window.location.origin.indexOf('https') > -1)) {
               BaseUrl= config.public.HTTPSURL
        } else {
                BaseUrl= config.public.HTTPURL
        }
    }
    return BaseUrl
}
import axios from 'axios';
import UserToken from './UseToken';
import type { NotificationColor } from '@nuxt/ui/dist/runtime/types';

let BaseUrl: string = ''

type RESPONSE = {
    data: {
        resCode: number,
        data: [],
        messages: MESS[]
    }
}
type RESULT = {
    isok: Boolean,
    data?: Array<any>,
    messages: MESS[]

}

type MESS = { type: string, text: string, color?: NotificationColor }

async function SetHeadConfig(_isaut: boolean) {
    type c = {
        'content-type': string,
        'Authorization'?: string
    }
    let config: c = {
        'content-type': 'application/json'
    };
    if (_isaut) {
        let AuthStr: string = 'Bearer ' + await UserToken.get();
        config = {
            'content-type': 'application/json',
            'Authorization': AuthStr
        };
    }
    return config;
}


function errorHandle(error: { message: String }):RESULT {

    if (error.message.trim() == 'Request failed with status code 404') {
        return {
            isok: false,
            messages: [{ text: 'خطای مسیر', color: 'red',type:'error' }]

        }
    }
    else {
        return {
            isok: false,
            messages: [{ text: 'سرور در دسترس نمیباشد .', color: 'red' ,type:'error'}]

        }
    }
}

function responseHandle(response: RESPONSE):RESULT {
    response.data.messages.map((item:MESS) => {
        item.color = getColor(item.type)
    })
    if (response.data.resCode == 0) {
        return {
            isok: true,
            ...response.data
        }
    }
    else {
        return {
            isok: false,
            ...response.data
        }
    }
}

function getColor(type: string):NotificationColor {
    switch (type) {
        case ('info'): {
            return 'blue'
        }
        case ('warning'): {
            return 'yellow'
        }
        case ('error'): {
            return 'red'
        }
        case ('delete'): {
            return 'rose'
        }
        case ('success'): {
            return 'green'
        }
        default:
        return 'green'
    }
}

async function PostApi(_url: string, _isaut: boolean, _data: string | null) {
    // let signal = _options.controller ? _options.controller.signal : ''
    let config = await SetHeadConfig(_isaut);
    const res = await axios.post(_url, _data, {
        headers: config,
        // signal: signal
    })
        .then(response => {
            return responseHandle(response)
        })
        .catch(error => {
            console.log("🚀 ~ PostApi ~ error:", error)
            return errorHandle(error)
        });
    return res;
}

async function PutApi(_url: string, _isaut: boolean, _data: string | null) {
    let config = await SetHeadConfig(_isaut);
    const res = await axios.put(_url, _data, {
        headers: config
    })
        .then(response => {
            return responseHandle(response)
        })
        .catch(error => {
            return errorHandle(error)
        });
    return res;
}

async function GetApi(_url: string, _isaut: boolean):Promise<RESULT> {
    let config = await SetHeadConfig(_isaut);
    console.log("🚀 ~ GetApi ~ config:", config)
    // let restype:ResponseType= _url.includes('download') ? 'blob' : ''
    // let signal = _options.controller ? _options.controller.signal : ''
    const res=  await axios.get(_url, {
        headers: config,
        // responseType:restype,
        // signal: signal
    })
        .then(response => {
            return responseHandle(response)
        })
        .catch(error => {
            return errorHandle(error)
        });
    return res;
}

async function DeleteApi(_url: string, _isaut: boolean) {
    let config = await SetHeadConfig(_isaut)
    const res = await axios.delete(_url, {
        headers: config
    })
        .then(response => {
            return responseHandle(response)
        }).catch(error => {
            return errorHandle(error)
        })
    return res
}


export default async function (_method: String, _url: string, _isaut: boolean, _data: string | null = null):Promise<RESULT>{
    if (BaseUrl === '')
        BaseUrl = UseBaseUrl()
    let result:RESULT;
    let Url = BaseUrl + _url;
    if (Url == _url)
        _method = ''
    switch (_method.toLowerCase()) {
        case "get":
            result = await GetApi(Url, _isaut);
            break;
        case "post":
            result = await PostApi(Url, _isaut, _data);
            break;
        case "put":
            result = await PutApi(Url, _isaut, _data);
            break;
        case "delete":
            result = await DeleteApi(Url, _isaut);
            break;
        default:
            alert('خطای دریافت api رخ داده است');
            return {
                isok: false,
                data: [],
                messages:[]
            };
    }
    // if (result && !result.isok && _options.showalert) {
    //     try {
    //         let text = result.data[0].value;
    //         alert(text);
    //     } catch {
    //         alert('خطای نامشخص رخ داده است');
    //     }
    // }
    // } else
    //     result = {
    //         isok: false,
    //         data: ''
    //     }

    return result;

}
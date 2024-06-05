import fa from '../assets/lang/fa'
import en from '../assets/lang/en'
export const useLanguage = defineStore('language', () => {
    let Main = { fa, en }
    type TLanguage = "fa" | "en"
    type TList= {
        menu: {
            home: string;
            posts: string;
            about: string;
            contact: string;
        },
        filds:{
            email:string,
            firstName:string,
            lastName:string,
            password:string,
            confirmPassrord:string,
            verify:string
        },
        btn:{
            save:string,
            authGoogle:string,
            signin:string,
            signup:string,
            cancel:string
        },
        title:{
            signup:string,
            signin:string,
            verify:string
        }
    }
    const lang = ref<TLanguage>('fa')
    function changeLang(_lang: TLanguage) {
        lang.value = _lang
    }
    
    const list = computed<TList>(()=>{
        return Main[lang.value]as TList}
        )



    return { list, changeLang, lang }
})
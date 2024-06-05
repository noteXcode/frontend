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
        };
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
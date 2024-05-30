export const useLang=()=>{
    type TLanguage="fa"|"en"
    const lang= useState<TLanguage>('Lang', () => 'fa')
}
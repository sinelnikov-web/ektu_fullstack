import {APIInstance} from "./base";


export type SocialType = {
    id: number
    icon: string
    link: string
}

export const socialAPI = {
    getSocials: () => {
        return APIInstance.get<Array<SocialType>>('socials', {
            headers: {
                'Accept-Language': localStorage.getItem('currentLanguage')
            }
        }).then(r => r.data)
    }
}
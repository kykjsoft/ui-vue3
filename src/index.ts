import { App,AppConfig,Component,defineAsyncComponent } from 'vue'
import icons from './svgs'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'

import KjProSelect from '@/components/ProSelect.vue'
import KjThemeSwitch from '@/components/ThemeSwitch.vue'

console.log(icons);

const components:{[name:string]:Component} = {
    KjProSelect,
    KjThemeSwitch,
    ...icons
}



function install(app:App,config:AppConfig){
    for(const name in components){
        app.component(name,components[name])
    }
}

export {
    icons,
    KjProSelect,
    KjThemeSwitch,
    install
}

export default {
    ...components,
    icons,
    install
}
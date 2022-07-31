import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDiscord, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const app = createApp(App)

library.add(faGithub)
library.add(faDiscord)
library.add(faTwitter)
library.add(faLinkedin)
library.add(faGraduationCap)

app.use(router)

app
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app')

import { App } from "vue";
import { talcArr } from '../plugins/talc'

export const registerTalc = (app: App) => {
  for (let i = 0; i < talcArr.length; i++) {
    app.component(talcArr[i].name, talcArr[i])
  }
}
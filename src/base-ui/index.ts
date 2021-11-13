import Explain from './explain'
import Attribute from './attribute'
import { App } from 'vue'

export const registerBaseUi = (app: App) => {
  app.component(Explain.name, Explain)
  app.component(Attribute.name, Attribute)
}

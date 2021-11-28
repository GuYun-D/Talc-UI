import Explain from './explain'
import Attribute from './attribute'
import Event from './event'
import { App } from 'vue'

export const registerBaseUi = (app: App) => {
  app.component(Explain.name, Explain)
  app.component(Attribute.name, Attribute)
  app.component(Event.name, Event)
}

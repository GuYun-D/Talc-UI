import { director, dotType, trigger, carouselDirectionEnum } from './types'

export const TCarouselProps = {
  autoplay: {
    type: Boolean,
    default: true,
  },
  duration: {
    type: Number,
    default: 3000,
  },
  initial: {
    type: Number,
    default: 0,
  },
  dot: {
    type: Boolean,
    default: true,
  },
  director: {
    type: Boolean,
    default: true,
  },
  dotBgColor: {
    type: String,
    default: "#fff",
  },
  direction: {
    type: String,
    default: "next",
    validator: (value: any) => {
      if (director[value]) {
        return true;
      } else {
        throw Error(
          `There are only two choices for the direction of the carousel,
           next or prev, and what you pass in is ${value}`
        );
      }
    },
  },

  dotType: {
    type: String,
    default: 'circle',
    validator: (value: any) => {
      if (dotType[value]) {
        return true
      } else {
        throw Error(`The types of indicators are only circle and rectangle, 
          but you want ${value}. carousel does not support this type`)
      }
    }
  },

  trigger: {
    type: String,
    default: 'click',
    validator: (value: string) => {
      if (trigger[value]) {
        return true
      } else {
        throw Error(`The types of trigger are only click and hover, 
          but you want ${value}. carousel does not support this type`)
      }
    }
  },

  carouselDirection: {
    type: String,
    default: 'transverse',
    validator: (value: string) => {
      if (carouselDirectionEnum[value]) {
        return true
      } else {
        throw Error(`The types of carouselDirection are only transverse and vertical, 
          but you want ${value}. carousel does not support this type`)
      }
    }
  }
}
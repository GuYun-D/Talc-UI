import { director } from './types'

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
}
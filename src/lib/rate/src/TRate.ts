export default {
  num: {
    type: Number,
    default: 0,
  },
  size: {
    type: Number,
    default: 16,
  },
  starColr: {
    type: String,
    default: "#fbab06",
  },
  auxiliaryText: {
    type: Array,
    default: ["极差", "失望", "一般", "满意", "惊喜"],
    validator: (text: string[]) => {
      if (text.length === 5 && text.length > 4) return true;
      console.warn(
        "Rate Component warn: Auxiliary text needs to be a string array containing five elements. If there are more than five elements, the elements other than the fifth will no longer be used"
      );
    },
  },
  readonyRate: {
    type: Number,
    validator: (value: number) => {
      if (value < 5 && value >= 0) return true;
      console.warn("Rate Component warn: the score ranges from 0 to 5");
    },
  },
  auxiliaryTextVisible: {
    type: Boolean,
    default: false
  }
}
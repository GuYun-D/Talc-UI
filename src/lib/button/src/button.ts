export const TBProps = {
  theme: {
    type: String,
    default: "button",
  },

  size: {
    type: String,
    default: "normal",
  },

  level: {
    type: String,
    default: "normal",
  },

  disabled: {
    type: Boolean,
    default: false,
  },

  loading: {
    type: Boolean,
    default: false,
  },

  ripple: {
    type: Boolean,
    default: false,
  },

  icon: String,

  iconPosition: {
    type: String,
    default: "left",
    validator: function (value: string) {
      return ["left", "right"].includes(value);
    },
  },
};

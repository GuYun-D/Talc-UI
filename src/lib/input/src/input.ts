export const inputProps = {
  value: String,
  disable: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  error: String,
  placeholder: String,
  type: String,
  size: {
    type: String,
    default: "normal",
  },
  prefixIcon: {
    type: String,
    default: "",
  },
  suffixIcon: {
    type: String,
    default: "",
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  shadow: {
    type: Boolean,
    default: false,
  },
  maxLength: {
    type: String,
  },
  name: String,
}
const tagTypes = {
  normal: {
    color: "#2177b8",
    bgc: "#e3f3ff"
  },
  success: {
    color: "#248067",
    bgc: '#d9ffcb'
  },
  danger: {
    color: "#f40",
    bgc: "#ffd2c1"
  },
  info: {
    color: "#666",
    bgc: "#c3c3c3"
  },
  warning: {
    color: "#bfc134",
    bgc: "#fdffce"
  }
}

export function useTagType(type: string) {
  return [tagTypes[type].color, tagTypes[type].bgc]
}
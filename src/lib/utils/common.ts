export const getElement = (elementInfo: any) => {
  return elementInfo.uid ? elementInfo.proxy.$el : elementInfo
}
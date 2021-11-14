import { ref } from 'vue'

export function useRate(num: number, cb?: () => void) {
  let starNum = ref(num)
  const setStarNum = (num: number) => {
    starNum.value = num
    cb()
  }

  return [starNum, setStarNum]
}
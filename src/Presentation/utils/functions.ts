export const onlyNumber = (value: string) => (
  value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')
)

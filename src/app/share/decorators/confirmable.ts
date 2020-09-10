export function Confirmable (message: string) {
  return (target: object, key: string, descriptor: PropertyDescriptor) => {
    const origin = descriptor.value
    descriptor.value = function (...args: any) {
      const res = window.confirm(message)
      if (res) {
        return origin.apply(this, args)
      } else {
        return null
      }
    }
    return descriptor
  }
}

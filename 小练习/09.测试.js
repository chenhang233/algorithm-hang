const a = {
  key1: 'asd',
  form: {
    key2: 'zx',
  },
}

const b = { ...a }
b.key1 = 'zxc'
b.form.key2 = '132'

console.log(a, b)
console.log('test')

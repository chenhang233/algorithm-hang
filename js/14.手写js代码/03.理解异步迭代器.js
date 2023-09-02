class Emitter {
  constructor(max) {
    this.max = max
    this.asyncId = 0
  }
  *[Symbol.asyncIterator]() {
    while (this.asyncId <= this.max) {
      yield new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.asyncId++)
        }, Math.floor(Math.random() * 1000))
      })
    }
  }
}

const emit = new Emitter(5)

async function asyncCount() {
  const asyncC = emit[Symbol.asyncIterator]()
  for await (const iterator of asyncC) {
    console.log(iterator)
  }
}

asyncCount()

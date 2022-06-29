let p = new Promise(() => {})
setTimeout((t) => console.log(t), 0, p)

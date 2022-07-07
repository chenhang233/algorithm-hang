var F = (function (FooModule) {
  //   FooModule.bar = 'baz'
  FooModule.baz = function () {
    console.log(FooModule.bar)
  }
  return FooModule
})({})

console.log(F)

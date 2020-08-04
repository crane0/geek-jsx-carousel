function createElement(Cls, attributes, ...child) {
  /* 
    ƒ Child() {_classCallCheck(this, Child);} null []
    ƒ Child() {_classCallCheck(this, Child);} null []
    ƒ Parent() {_classCallCheck(this, Parent);} {id: "a", class: "b"} [Child, Child]
    
    注意，在组件没有属性时，attributes 是 null
    并且有第3个参数，可以看到 jsx 中，父子树的构建关系，先子后父。
  */
  console.log(Cls, attributes, child)
  let o = new Cls
  for (const name in attributes) {
    // attribute 和 class 设置为等效
    o[name] = attributes[name]
  }
  return o
}

class Parent {
  // 该方法会被执行
  set class(value) {
    console.log('parent:value=', value)
  }

}

class Child {
  
}

let component = <Parent id="a" class="c">
  <Child></Child>
  <Child></Child>
</Parent>
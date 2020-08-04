/* 
  和 main2.js 的区别：attribute 和 class 设置为不等效
  可以看到执行 component.class = 'd' 时，才会执行 set class 的方法。
*/
function createElement(Cls, attributes, ...children) {
  /* 
    ƒ Child() {_classCallCheck(this, Child);} null []
    ƒ Child() {_classCallCheck(this, Child);} null []
    ƒ Parent() {_classCallCheck(this, Parent);} {id: "a", class: "b"} [Child, Child]
    
    注意，在组件没有属性时，attributes 是 null
    并且有第3个参数，可以看到 jsx 中，父子树的构建关系，先子后父。
  */
  // console.log(Cls, attributes, children)
  let o = new Cls({
    time: 13456
  })
  for (const name in attributes) {
    o.setAttribute(name, attributes[name])
  }

  for (const child of children) {
    o.appendChild(child)
  }
  return o
}

class Parent {
  constructor(config) {
    console.log('config', config)
  }
  set class(value) { // property
    console.log('parent:value=', value)
  }

  setAttribute(name, value) { // attribute
    console.log(name, value)
  }

  appendChild(child) { // children
    console.log('child', child)
  }
}

class Child {
  
}

let component = <Parent id="a" class="c">
  <Child></Child>
  <Child></Child>
</Parent>

component.class = 'd'
/* 
  和 main3.js 的区别：组件树挂载到DOM上
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
  constructor() {
    this.root = document.createElement('div')
  }
  set class(value) { // property
    console.log('parent:value=', value)
  }

  setAttribute(name, value) { // attribute
    this.root.setAttribute(name, value)
  }

  appendChild(child) { // children
    child.mountTo(this.root)
  }

  mountTo() {
    document.body.appendChild(this.root)
  }
}

class Child {
  constructor() {
    this.root = document.createElement('div')
  }

  setAttribute(name, value) {
    this.root.setAttribute(name, value)
  }

  appendChild(child) {
    child.mountTo(this.root)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

let component = <Parent id="a" class="c">
  <Child></Child>
  <Child></Child>
</Parent>

component.class = 'd'

component.mountTo()
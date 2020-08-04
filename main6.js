/* 
  和 main5.js 的区别：处理了传入小写时的问题。
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
  let o
  if (typeof Cls === 'string') {
    o = new Wrapper(Cls)
  } else {
    o = new Cls
  }
  for (const name in attributes) {
    o.setAttribute(name, attributes[name])
  }

  for (const child of children) {
    o.appendChild(child)
  }
  return o
}

class Wrapper {
  constructor(type) {
    this.children = []
    this.root = document.createElement(type)
  }
  set class(value) { // property
    console.log('parent:value=', value)
  }

  setAttribute(name, value) { // attribute
    this.root.setAttribute(name, value)
  }

  appendChild(child) { // children
    this.children.push(child)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
    // child 等 parent 挂载后，延迟挂载。
    for (const child of this.children) {
      child.mountTo(this.root)
    }
  }
}

class Div {
  constructor() {
    this.children = []
    this.root = document.createElement('div')
  }
  set class(value) { // property
    console.log('parent:value=', value)
  }

  setAttribute(name, value) { // attribute
    this.root.setAttribute(name, value)
  }

  appendChild(child) { // children
    this.children.push(child)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
    // child 等 parent 挂载后，延迟挂载。
    for (const child of this.children) {
      child.mountTo(this.root)
    }
  }
}

let component = <div id="aa" class="e" style="width: 100px;height: 100px; background-color: salmon;">
  <div></div>
  <p></p>
  <div></div>
</div>

component.mountTo(document.body)
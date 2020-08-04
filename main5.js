/* 
  和 main4.js 的区别：使用一个组件，Parent 和 Child 通用。
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

let component = <Div id="a" class="e" style="width: 100px;height: 100px; background-color: salmon;">
  <Div></Div>
  <Div></Div>
</Div>

component.mountTo(document.body)
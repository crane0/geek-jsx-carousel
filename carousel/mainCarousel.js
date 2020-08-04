/* 
  以 main7.js 最终的 jsx 语法模型和 carousel.html 为基础，将其合并起来。
  - 没有动画，也没有分割函数
*/
function createElement(Cls, attributes, ...children) {
  /* 
    ƒ Child() {_classCallCheck(this, Child);} null []
    ƒ Child() {_classCallCheck(this, Child);} null []
    ƒ Parent() {_classCallCheck(this, Parent);} {id: "a", class: "b"} [Child, Child]
    
    注意，在组件没有属性时，attributes 是 null
    并且有第3个参数，可以看到 jsx 中，父子树的构建关系，先子后父。
  */
  console.log(Cls, attributes, children)
  let o
  if (typeof Cls === 'string') {
    o = new Wrapper(Cls)
  } else {
    o = new Cls
  }
  for (const name in attributes) {
    o.setAttribute(name, attributes[name])
  }

  let visit = (children) => {
    for (const child of children) {
      if (typeof child === 'string') {
        child = new Text(child)
      }
      if (typeof child === 'object' && child instanceof Array) {
        visit(child)
        continue
      }
      o.appendChild(child)
    }
  }

  visit(children)
  
  return o
}

class Text {
  constructor(text) {
    this.children = [] 
    this.root = document.createTextNode(text)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class Wrapper {
  constructor(type) {
    this.children = []
    this.root = document.createElement(type)
  }

  setAttribute(name, value) { // attribute
    this.root.setAttribute(name, value)
  }

  appendChild(child) { // children
    this.children.push(child)
  }

  addEventListener() {
    this.root.addEventListener(...arguments)
  }

  mountTo(parent) {
    parent.appendChild(this.root)
    // child 等 parent 挂载后，延迟挂载。
    for (const child of this.children) {
      child.mountTo(this.root)
    }
  }
}

class Carousel {
  constructor() {
    this.children = []
  }

  setAttribute(name, value) {
    this[name] = value
  }

  appendChild(child) {
    this.children.push(child)
  }

  render() {
    return <div class="carousel">
      { 
        this.data.map(url => {
          let element =  <img src={url} />
          element.addEventListener('dragstart', event => event.preventDefault())
          return element
        })
      }
    </div>
  }

  mountTo(parent) {
    this.render().mountTo(parent)
  }
}

let component = <Carousel data={[
  'https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg',
  'https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg',
  'https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg',
  'https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg',
]} />

component.mountTo(document.body)

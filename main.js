
function createElement(Cls, attributes) {
  /* 
    ƒ Div() {
      _classCallCheck(this, Div);
    }
    {id: "a", class: "b"}
  */
  console.log(Cls, attributes)
}

class Div {}
// jsx 的组件名，第1个字母是大写，解析时会被认为是 class 或 function。如果是小写，会被认为是 字符串。
// React.createElement(Co) 小写时：React.createElement('co')
let component = <Div id="a" class="b"/>;
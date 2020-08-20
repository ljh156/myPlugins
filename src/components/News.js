import React from "react";
class News extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "新闻",
      list: ["1111111", "222222222", "333333333333"],
      list2: [<h2 key='1'>新闻111111</h2>, <h2 key='2'>新闻22222</h2>, <h2 key='3'>新闻33333</h2>],
    };

  }
  // 通过事件对象可以获取到目标身上的自定义属性
  run = (e) => {
    alert('我是一个run方法')
    console.log(e.target.getAttribute('data-id'));

  }
  getData() {
    // 注意，这里的this指向不是当前组件，必须改变this指向当前组件才能获取到数据
    alert(this.state.msg);
  }
  // 也可以通过箭头函数的方式改变this指向
  getMessage = () => {
    alert(this.state.msg)
  }
  setMessage = (str) => {
    this.setState({
      msg: str
    })
  }
  inputChange = (e) => {
    console.log(e.target.value);
    // 在输入框改变时将数据同步到username中
    this.setState({
      username: e.target.value
    })
  }
  render() {
    return (
      <div className='news'>
        {/* react中的数据可以直接以html标签的形式出现并渲染到页面  */}

        {this.state.list2}
        <ul>
          {
            this.state.list.map((val, key) => {
              return <li key={key}>{val}</li>
            })
          }
        </ul>
        <h1>{this.state.msg}</h1>
        <button data-id='123' onClick={this.run}>点击触发run方法</button>
        <button onClick={this.getData.bind(this)}>第一种改变this的方法</button>
        <button onClick={this.getMessage}>第二种改变this的方法</button>
        {/* 通过bind的方式传递参数 */}
        <button onClick={this.setMessage.bind(this, '张三')}>点击执行方法传值</button>
        <input onChange={this.inputChange} type="text" />
        <hr />
      </div>
    );
  }
}
export default News;

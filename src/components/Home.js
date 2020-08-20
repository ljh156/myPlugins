import React from "react";
import "../index.css";
class Home extends React.Component {
  constructor(props) {
    // 这里的super指的是父类的this，props用于父子组件传值
    super(props);
    // 定义数据
    this.state = {
      name: "我是一个home组件",
      title: "我是一个title",
      className: "red",
      style: {
        color: "red",
        padding: 15 + "px",
      },
    };
  }
  render() {
    return (
      <div>
        {/* 在react中class和style，label标签的for属性的写法与html不同 */}
        {this.state.name}
        <div className={this.state.className} title={this.state.title}>
          {this.state.name}
        </div>
        <label htmlFor="name">姓名</label>
        <input id="name" type="text" />
        <div style={{ color: "red", padding: 15 + "px" }}>1111111</div>
        <div style={this.state.style}>1111111</div>
      </div>
    );
  }
}
export default Home;

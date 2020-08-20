import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "111",
      msg: "react表单",
      name: "",
      sex: "1",
      city: "",
      citys: ["北京", "上海", "深圳"],
      hobby: [
        {
          title: "睡觉",
          checked: true,
        },
        {
          title: "睡觉",
          checked: true,
        },
        {
          title: "睡觉",
          checked: true,
        },
      ],
    };
  }
  inputChange = (e) => {
    // 通过this.refs可以获取到dom节点
    // console.log(this.refs.username.value);
    console.log(e.target.value);
    this.setState({
      username: e.target.value,
    });
  };
  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleSex = (e) => {
    this.setState({
      sex: e.target.value,
    });
    console.log(e.target);
  };
  handleCity = (e) => {
    this.setState({
      city: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      this.state.username,
      this.state.sex,
      this.state.city,
      this.state.hobby
    );
  };
  handleHobby(index) {
    var hobby = this.state.hobby;
    // 通过传过来的index找到对应的hobby的checked取反
    hobby[index].checked = !hobby[index].checked;

    this.setState({
      hobby: hobby,
    });
  }
  render() {
    return (
      <div>
        {/* 约束性组件和非约束性组件
        非约束性组件：defaultValue,这个defaultValue其实是原生DOM中的value，
        这样的value值就是用户输入的内容，react完全不管理输入的过程。
        约束性组件：这样的value不再是一个写死的值，而是由this.handleChange管理的
         */}

        {this.state.username}
        <br />
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          男
          <input
            type="radio"
            checked={this.state.sex === "1"}
            onChange={this.handleSex}
            value="1"
          />
          女
          <input
            type="radio"
            checked={this.state.sex === "2"}
            onChange={this.handleSex}
            value="2"
          />
          <br />
          居住城市
          <select name="" id="" onChange={this.handleCity}>
            {this.state.citys.map((val, key) => {
              return <option key={key}>{val}</option>;
            })}
          </select>
          <br />
          爱好
          {this.state.hobby.map((val, key) => {
            return (
              <span key={key}>
                {val.title}
                <input
                  type="checkbox"
                  checked={val.checked}
                  onChange={this.handleHobby.bind(this, key)}
                />
              </span>
            );
          })}
          <input defaultValue="提交" type="submit" />
        </form>
      </div>
    );
  }
}

export default Form;

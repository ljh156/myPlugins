import React, { Component } from "react";
import "./index.css";
import "./iconfont.css";
var timer = null;
export default class MySwiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: props.imgList,
    };
  }
  componentDidMount() {
    timer = setInterval(() => {
      this.next();
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(timer);
  }
  // 控制下面横线的高亮
  lineHigh = (i) => {
    const { imgList } = this.state;
    // 设置高亮前，先清除已经高亮的元素
    for (let i = 0; i < imgList.length; i++) {
      imgList[i].lineActive = false;
    }
    imgList.forEach((item, index) => {
      if (i === index) {
        item.lineActive = true;
      }
    });
  };
  // 切换上一张图片
  prev = () => {
    console.log("上一张");
    const { imgList } = this.state;
    const len = imgList.length;
    for (let i = 0; i < len; i++) {
      if (imgList[i].status === "before") {
        // 每次切换之前清除所有status
        for (let i = 0; i < len; i++) {
          imgList[i].status = "";
        }
        // 切换到最后一张时;
        if (i === len - 1) {
          imgList[i].status = "now";
          imgList[i - 1].status = "before";
          imgList[0].status = "after";
          break;
        } else if (i === 0) {
          imgList[0].status = "now";
          imgList[1].status = "after";
          imgList[len - 1].status = "before";
          break;
        } else {
          imgList[i].status = "now";
          imgList[i + 1].status = "after";
          imgList[i - 1].status = "before";
          console.log(i);
          break;
        }
      }
    }

    console.log("切换后", imgList);
    const index = imgList.findIndex((item) => {
      return item.status === "now";
    });
    this.lineHigh(index);
    this.setState({
      imgList,
    });
  };
  next = (now) => {
    console.log("下一张");
    const { imgList } = this.state;
    const len = imgList.length;
    if (typeof now === "number") {
      console.log(now);
      // 每次切换之前清楚所有status
      for (let i = 0; i < len; i++) {
        imgList[i].status = "";
      }
      let before = now - 1;
      let after = now + 1;
      if (before < 0) {
        before = len - 1;
      }
      if (after > len - 1) {
        after = 0;
      }
      console.log(before, after);
      for (let i = 0; i < len; i++) {
        imgList[now].status = "now";
        imgList[after].status = "after";
        imgList[before].status = "before";
      }
      console.log(imgList);
      // 获取当前展示的索引
      const index = imgList.findIndex((item) => {
        return item.status === "now";
      });
      this.lineHigh(index);
      this.setState({
        imgList,
      });
      return;
    }

    for (let i = 0; i < len; i++) {
      if (imgList[i].status === "after") {
        // 每次切换之前清楚所有status
        for (let i = 0; i < len; i++) {
          imgList[i].status = "";
        }
        // 切换到最后一张时;
        if (i === len - 1) {
          imgList[i].status = "now";
          imgList[i - 1].status = "before";
          imgList[0].status = "after";
          console.log(i);
          break;
        } else if (i === 0) {
          imgList[0].status = "now";
          imgList[1].status = "after";
          imgList[len - 1].status = "before";
          console.log(i);
          break;
        } else {
          imgList[i].status = "now";
          imgList[i + 1].status = "after";
          imgList[i - 1].status = "before";
          console.log(i);
          break;
        }
      }
    }
    console.log("切换后", imgList);
    // 获取当前展示的索引
    const index = imgList.findIndex((item) => {
      return item.status === "now";
    });
    this.lineHigh(index);
    this.setState({
      imgList,
    });
  };
  // 鼠标悬浮轮播
  overMove = (e) => {
    // 定义一个索引，用于存储类名为active的元素在lines数组中的位置
    var index = 0;
    // 找到鼠标悬浮的line
    if (e.target.className === "line") {
      var lines = document.getElementsByClassName("line");
      for (let i = 0; i < lines.length; i++) {
        lines[i].className = "line";
      }
      e.target.className = "active-line line";
      console.log(lines);
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].className === "active-line line") {
          index = i;
        }
      }
      this.next(index);
    }
  };
  render() {
    const { imgList } = this.state;

    return (
      <div
        onMouseEnter={() => {
          clearInterval(timer);
        }}
        onMouseLeave={() => {
          timer = setInterval(() => {
            this.next();
          }, 3000);
        }}
        className="carousel"
      >
        <ul
          onClick={(e) => {
            console.log(e.target.parentNode);
            if (e.target.parentNode.className === "after") {
              this.next();
            }
            if (e.target.parentNode.className === "before") {
              this.prev();
            }
          }}
        >
          <span
            onClick={() => {
              this.prev();
            }}
            className="iconfont prev"
          >
            &#xe600;
          </span>
          <span
            onClick={() => {
              this.next();
            }}
            className="iconfont next"
          >
            &#xe601;
          </span>
          {imgList.map((item, index) => {
            return (
              <li className={item.status} key={index}>
                <img src={imgList[index].imgUrl} alt="" />
              </li>
            );
          })}
        </ul>
        <div onMouseOver={this.overMove} className="lines">
          {imgList.map((item, index) => {
            return (
              <div
                key={index}
                className={item.lineActive ? "active-line line" : "line"}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }
}

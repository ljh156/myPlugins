import React from "react";
import "./App.css";
// import Home from "./components/Home";
// import News from "./components/News";
// import Form from "./components/Form";
import MySwiper from "./components/wyMusicSwiper/MySwiper";
function App() {
  /*
  定义轮播图数据数组：每个字段意义：
  imgUrl：图片路径
  title：标题
  status：当前图片状态（now:当前是否展示，before前一张，after后一张）
  lineActive：控制轮播图下方小圆点是否高亮
  */

  const imgList = [
    {
      imgUrl: require("./components/wyMusicSwiper/imgs/1.jpg"),
      title: "1111",
      status: "now",
      lineActive: true,
    },
    {
      imgUrl: require("./components/wyMusicSwiper/imgs/2.jpg"),
      title: "1111",
      status: "after",
      lineActive: false,
    },
    {
      imgUrl: require("./components/wyMusicSwiper/imgs/3.jpg"),
      title: "1111",
      status: "",
      lineActive: false,
    },
    {
      imgUrl: require("./components/wyMusicSwiper/imgs/4.jpg"),
      title: "1111",
      status: "",
      lineActive: false,
    },
    {
      imgUrl: require("./components/wyMusicSwiper/imgs/5.jpg"),
      title: "1111",
      status: "",
      lineActive: false,
    },
    {
      imgUrl: require("./components/wyMusicSwiper/imgs/5.jpg"),
      title: "1111",
      status: "",
      lineActive: false,
    },
    {
      imgUrl: require("./components/wyMusicSwiper/imgs/6.jpg"),
      title: "1111",
      status: "before",
      lineActive: false,
    },
  ];
  return (
    <div className="App">
      {/* 
      <Home />
      <News />
      <Form /> */}
      {/* <img src={logo} alt="" />
      <img src={require("./logo.svg")} alt="" /> */}
      <MySwiper imgList={imgList} />
    </div>
  );
}

export default App;

import { useRoutes } from "react-router-dom";
import { router } from "@/config/router";
import "antd/dist/antd.less";
import "./App.css";
import "style/index.scss"; 

function App() {
  let element = useRoutes(router);
  return element;
}

export default App;

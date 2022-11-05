#!/usr/bin/env node
/*
 * @Author: liu71
 * @Date: 2022-11-05 09:19:01
 * @Last Modified by: liu71
 * @Last Modified time: 2022-11-05 09:32:58
 */
const args = process.argv.slice(2);
const type = args[0];
const pkg = require("./package.json");
const { gReact } = require("./template/react");

if (!type) {
  console.log("请输入相关操作指令: e.g. qi_cil --h");
  return;
}

const types = [
  {
    id: "--p",
    msg: "qi_cli --p {projectName}",
  },
];

if (type === "--p") {
  gReact();
}

if (type === "--v") {
  console.log(pkg.version);
}

if (type === "--h") {
  types.forEach((item) => {
    console.log(`${item.id}:${item.msg}`);
    console.log("\n");
  });
}

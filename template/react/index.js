const path = require("path");
const fse = require("fs-extra");
const inquirer = require("inquirer");
const { to } = require("await-to-js");

const args = process.argv.slice(2);
const projectName = args[1];

async function gReact() {
  if (!projectName) {
    console.error("请输入项目名称e:g qi_cli --p my-app");
    process.exit(-1);
  }

  const [err, res] = await to(
    inquirer.prompt([
      {
        type: "list",
        name: "build",
        message: "请选择构建工具",
        choices: [
          { value: 0, name: "vite" },
          { value: 1, name: "webpack" },
        ],
        default: 0,
      },
      {
        type: "list",
        name: "type",
        message: "请选择创建模式",
        choices: [
          { value: 0, name: "创建pc端" },
          { value: 1, name: "创建h5端" },
        ],
        default: 0,
      },
    ])
  );

  switch (res.build) {
    case 0:
      {
        switch (res.type) {
          case 0:
            {
              const workPath = process.cwd();

              fse
                .copy(
                  path.resolve(__dirname, "./vite/pc"),
                  `${workPath}/${projectName}`
                )
                .then((res) => {
                  console.log(
                    `创建成功!\n cd ${projectName} \n pnpm i \n pnpm run dev`
                  );
                })
                .catch((e) => {
                  console.log(e);
                  process.exit(-1);
                });
            }
            break;
        }
      }
      break;
  }
}

module.exports = { gReact };

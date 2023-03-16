# 代码风格, 纠错, 格式化

通过 eslint 来帮助规范编码规范并发现语法中潜在的错误, 使用 prettier 格式化代码.

## Step 1: 安装 prettier

```sh
npm install --save-dev --save-exact prettier
```

```sh
yarn add --dev --exact prettier
```

## Step 2: 安装 eslint

```sh
npm init @eslint/config
```

根据指引初始化 eslint 配置文件

## Step 3: 禁用冲突规则

prettier 默认规则可能与选定的 eslint 预置编码规范存在冲突, 在 eslint 配置文件中添加配置禁用冲突的规则

```js
module.exports = {
  extends: ["prettier"],
};
```

## 完整配置文件

以 js 配置文件为例

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
};
```

# Linter与Code Style

## 概述

编码风格是个很简单但是又很严肃的事情. 在代码开发的过程中应将主要的精力放在程序的编写上, 
而不是将大量的时间耗费在代码格式上. 

但是不注重代码风格, 会极大的影响团队的协作开发与工程的维护, 增加了后期的交流与代码阅读的成本.

由此便是引入ESLint 和 Prettier

## Linter - 代码审查工具

当前前端方面最主流的Linter是ESLint

>ESLint 是一个开源项目，可以帮助你发现并修复 JavaScript 代码中的问题。 不论你的 JavaScript 是在浏览器还是在服务器，是否使用框架，ESLint 都可以帮助你的代码变得更好。

- ESLint是一个插件形式的代码审查工具, 有着众多框架适配的可调整配置.
- ESLint在各个主流编辑器和部分小众编辑器中都有着良好的支持. 
- JavaScript是一种运行时语言编程语言, ESLint可在编写代码时就提供代码审查, 提高开发效率.

## Formatter - 代码格式化工具

在项目依赖中配置使用统一的格式化工具, 可以保证相同的代码风格,
Prettier便是其中的佼佼者,

>Prettier 是什么？
一个“有态度”的代码格式化工具,
支持大量编程语言,
已集成到大多数编辑器中,
几乎不需要设置参数.

## 安装

### [ESLint](https://zh-hans.eslint.org/)

ESLint的配置十分的简单, 在项目根目录中执行命令:

```PowerShell
npm init @eslint/config
```

然后根据项目架构, 跟随CLI创建基础配置

```PowerShell
? How would you like to use ESLint? ...
  To check syntax only
  To check syntax and find problems
> To check syntax, find problems, and enforce code style
```

```PowerShell
? What type of modules does your project use? ...
> JavaScript modules (import/export)
  CommonJS (require/exports)
  None of these
```

```PowerShell
? Which framework does your project use? ...
> React
  Vue.js
  None of these
```

```PowerShell
? Does your project use TypeScript? » No / Yes
```

```PowerShell
? Where does your code run? ...  (Press <space> to select, <a> to toggle all, <i> to invert selection)
√ Browser
√ Node
```

```PowerShell
? How would you like to define a style for your project? ...
> Use a popular style guide
  Answer questions about your style
```

```PowerShell
? Which style guide do you want to follow? ...
> Standard: https://github.com/standard/eslint-config-standard-with-typescript
  XO: https://github.com/xojs/eslint-config-xo-typescript
```

```PowerShell
? What format do you want your config file to be in? ...
> JavaScript
  YAML
  JSON
```

```PowerShell
? Would you like to install them now? » No / Yes
```

```PowerShell
? Which package manager do you want to use? ...
> npm
  yarn
  pnpm
```

### [Prettier](https://www.prettier.cn/)
使用包管理工具安装Prettier

:::code-group

```PowerShell [npm]
npm install --save-dev --save-exact prettier
```

```PowerShell [yarn]
yarn add --dev --exact prettier
```

:::

在项目根目录创建Prettier配置文件

```PowerShell
echo {}> .prettierrc.json
```

### 编辑器

on processing...

## 配置
单独的ESLint或Prettier各自都能很好的工作, 但是两个相结合会有部分冲突, 主要在于Prettier
格式化后的代码如不匹配ESLint的规则, ESLint依然会报错.


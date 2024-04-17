# fluttermvvmexample

## 插件描述

该插件是一个用于在VS Code中开发Flutter MVVM模式的示例插件。

    提示：仅用于基于view_model_provider 框架构建模版项目使用

#### view_model_provider

基于Provider实现MVVM框架，常用的方式是 ViewModel 继承 ChangeNotifier ，再通过 ChangeNotifierProvider 提供给子Widget，ViewModel数据刷新通过调用 notifyListeners() 来通知Widget进行刷新，Widget 通过 Provider.of 、Consumer、Selector 来监听数据变化重新 build 更新UI。这种方式存在的问题有：

* ViewModel数据刷新需要每次调用 notifyListeners()容易被遗漏
* notifyListeners()作用在整个ViewModel，不方便进行局部UI刷新控制
* Selector 虽然可以控制局部刷新，但需要需要自定义 shouldRebuild 要去了解Provider原理
* 缺少 ViewModel 和 Widget 生命周期的管理

ViewModelProvider 在兼容现有功能基础刷，实现最小改动、不需要每次调用notifyListeners()、支持局部刷新UI和生命周期管理的框架

#### 它提供了以下功能：

- 在指定目录下创建文件和文件夹结构
- 替换模板文件中的占位符

## 安装

1. 在VS Code中打开扩展面板（`Ctrl+Shift+X`）
2. 搜索并找到 "fluttermvvmexample" 插件
3. 点击安装按钮

## 使用

1. 安装

![avatar](https://github.com/BMWB/fluttermvvmexample/blob/main/res/1.png)

2. 打开目标项目的工作区

![avatar](https://github.com/BMWB/fluttermvvmexample/blob/main/res/2.png)

2. 选择模版
![avatar](https://github.com/BMWB/fluttermvvmexample/blob/main/res/3.png)

3. 输入类名并按回车键
![avatar](https://github.com/BMWB/fluttermvvmexample/blob/main/res/4.png)

4. 插件将会在指定目录下创建文件和文件夹结构，并替换模板文件中的占位符
![avatar](https://github.com/BMWB/fluttermvvmexample/blob/main/res/5.png)

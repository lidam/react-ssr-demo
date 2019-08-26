# react-ssr-demo
React SSR项目结构
1. 生成react项目；
2. 配置client和server端的入口文件；
3. 配置webpack；
    1）babel
    2）客户端：css-loader和style-loader
    3）服务端：css-loader和isomorphic-style-loader
4. 编写应用组件，并添加样式，由于componentWillMount将来会被弃用，因此将组合样式的代码放到constructor中处理；
5. 加入redux，从服务端获取数据（axios）；
6. 数据的脱水与注水，默认客户端的数据；
7. 使用react-helmet来提高搜索引擎搜索出来的内容的转换率；

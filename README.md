# travel-memo

## NOTES
### VUE
- `props`定义组件属性时可以加上类型限制，例如`String` `Number`，还可以设置默认值`default`，当限制类型为**引用类型**时，默认值必须由匿名函数返回。例如：
```
props: [{
  name: 'test',
  type: Array,
  default: () => []
}]
```

- `keep-alive`，组件没有该属性时，当前页面不包含该组件时，会被销毁，下一次将会重新创建。如果假如该属性，组件会保留在内存中，状态为`inactive`，下次显示时会被激活，不需要再创建。常用于`<router-view>`中

- 组件通信

### CSS
- `<button>`会有一个`:active`伪类，当按钮被点击之后，生效的不是`:focus`，而是`:active`
- 手机端超链接点击后状态依然为`:hover` 

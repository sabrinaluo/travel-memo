# travel-memo [![LICENSE MIT](https://img.shields.io/badge/LICENSE-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## START
- `data/*.yml`，修改相应的yml文件
- `node app`，程序将会根据`.yml`文件中的地址通过google map API获取坐标信息
  - **此过程可能会因为短时间内请求次数过多而失败**，解决方法是多跑几次这个命令，直到所有地址的坐标都获取到
  - 地址坐标可能存在不准确的情况，例如输入“南极”，谷歌返回的结果并不是有企鹅的那个南极，这种情况需要手动修改`src/data/geo.json`中相应的地址坐标，否则将会显示错误的地址和坐标
- `npm run build`，生成最终可用的代码，存放于`dist`文件夹中。可能会有reference的路径问题，请看[important](#important)部分

## DEV
```
npm run dev
```

## IMPORTANT!
`config/index.js`中的`assetsPublicPath: '/'`会影响最终生成的html中reference的路径，如果是`./`则生成相对路径，如果是`/`则生成绝对路径

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

- `keep-alive`，组件没有该属性时，当前页面不包含该组件时，会被销毁，下一次将会重新创建。如果有该属性，组件会保留在内存中，状态为`inactive`，下次显示时会被激活，不需要再创建。常用于`<router-view>`中。可以通过chrome <kbd>F12</kbd>里的vue tool看到组件的状态

- 组件通信。由于地图使用了`vue-google-map`这个第三方组件，所以有些方法要在事件trigger的时候才调用，于是会使用到`event bus`，通过`$emit`和`$on`来实现简单的通信。比如`fitBounds`……其实具体的我已经忘记了

- v-ref和$ref
当在应用中引用了组件的时候，又想要获取这个组件实例时，在组件的markup中使用v-ref属性，指定一个**名称**，例如`v-ref:aaa`之后在js中可以使用`this.$refs.aaa`得到这个实例。需要注意：
> - v-ref后面使用**冒号**而不是等号，并且之后跟的名称**不加引号**
> - vue2.0中使用的是`ref="xxx"`来定义名称…（这种变化太大我也是醉了…不过2.0的样子才是正常人会使用的方式啊）

### CSS
- `<button>`会有一个`:active`伪类，当按钮被点击之后，生效的不是`:focus`，而是`:active`
- 手机端超链接点击后状态会停留在`:hover`（why???），所以自定义的`active`类要写在`:hover`之后，才能正确显示。但这样有个问题，当hover在一个active类上的时候，hover的效果反正是没有的，因为被覆盖了。
- `vh` 长度单位，1vh为视口的100% https://developer.mozilla.org/zh-CN/docs/Web/CSS/length

### GIT
用了几百次了还是记不住>_<

- 克隆某个分支，例如gh-page
```
git clone -b gh-page git@github.com:sabrinaluo/travel-memo dist
```
- 强制git pull
```
git fetch
git reset --hard origin/master
git pull
```

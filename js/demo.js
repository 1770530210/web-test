// 区分大小写
// 结尾分号可有可无

// 输出语句
// window.alert()   写入警告框          window. 可以省略
// document.write() 写入HTML输出        
// console.log()    写入浏览器控制台    

// alert("hello js")
// document.write("hello js")
// console.log("hello js")

// 变量
// js是弱类型语言，变量可以存放不同类型的值

// 使用var声明变量
// 1.作用域比较大，全局变量
// 2.可以重复声明

// var a= 20
// a="张三"

// let 定义局部变量，不可重复定义

// let a=1

// const 定义常量

// const a="abc"
// a=123

// alert(a)

// 数据类型     原始类型和引用类型
/*
    原始类型
        number:数字（整数、小数、NaN（非数字））
        string：字符串，单双引都可
        boolean:布尔。true，false
        null：对象为空
        undefined：当声明的变量未初始化时，该变量的默认值未undefined
*/

// alert(typeof 3)//number
// alert(typeof 3.14)//number
// alert(typeof 'A')//string
// alert(typeof "Hello")//string
// alert(typeof true)//boolean
// alert(typeof false)//boolean
// alert(typeof null)//object
// var a
// alert(typeof a)//undefined

// 运算符
// == 会进行类型转换    ===不会进行类型转换
// var a=10
// alert(a=="10")
// alert(a==="10")
// alert(a==10)

// 类型转换

// 字符串转数字
// 从第一个字面值开始，将识别到的第一个数字转换为number类型
// 如果第一个不是数字，转换为NaN

// alert(parseInt("12"))
// alert(parseInt("12A45"))
// alert(parseInt("A45"))

// 其他类型转换boolean
// number：0和NaN为false，其他为true
// string：空字符串为false，其他为true
// Null和undefined：均为false

// if (0) { alert("0==>false") }
// if (NaN) { alert("NaN==>false") }
// if ("") { alert("空字符串==>false") }
// if (null) { alert("null==>false") }
// if (undefined) { alert("undefined==>false") }
// if (-1) { alert("0以外的数字==>false") }

// 函数
// 定义时不需要定义参数类型，也不需要定义返回类型
// 函数调用可以传递多余的参数，多余参数不参与运算
// 方式一：
// function functionName(param1,param2...){}

// function add(a, b) {
//     return a + b;
// }

// alert(add(10,20))

// 方式二：
// var functionName=function(param1,param2...){}

// var add=function(a,b){
//     return a+b
// }

// alert(add(10,10))

// JS对象
/*
    Array
    长度可变 类型可变
        方式一：var arr = new Array(1,2,3,4);
        方式二: var arr = [1,2,3,4]
        方式三: arr[10]="hello"
    属性：
        length：返回数组中元素数量
    方法：
        forEach():遍历数组每个（有值）的元素，并传入调用的函数
        push()：将新元素添加到数组末尾，并返回新的长度
        splice：从数组中删除元素

    lambda: ()=>{}
*/

/*
    String
        类似java
        var string=new String();
        var string=""
    属性：
        length返回字符串长度
    函数：
        charAt()：获取指定位置的单个字符
        indexOf()：获取字符串第一次出现的位置
        trim()：去除前后空格
        substring()：截取字符串
*/

/*
    自定义对象

        var user={
            name:"Tom",
            age:20,
            gender:"male"
            // eat:function(){
            //     alert("吃饭")
            // }

            eat(){
                alert("吃饭")
            }
        }
*/

/*
    JSON
        var userStr='{"name":"Jerry","age":18,"addr":["北京","上海","广州"]}'
    JSON字符串转JS对象
        var jsObject=JSON.parse(userStr)
    JS对象转JSON字符串
        var jsonStr=JSON.stringify(jsObject)
*/

/*
    BOM（Browser Object Model）浏览器对象模型，运行js与浏览器对话，将浏览器的各个组成部分封装成对象
        组成：
            window：    浏览器窗口对象
                属性：
                    history:    对History对象的只读引用
                    location:   用于窗口或框架的Location对象（可赋值）
                    navigator:  对Navigator对象的只读引用
                方法：
                    alert():        显示带有一段消息和一个确认按钮的警告框
                    confirm():      显示带有一段消息以及确认和取消按钮的对话框
                    setInterval():  按照指定的周期（ms）调用函数或计算表达式
                    setTimeout():   在指定的毫秒数后调用函数或计算表达式
            Navigator:  浏览器对象
            Scree:      屏幕对象
            History:    历史记录对象
            Location:   地址栏对象
                属性：
                    href:设置或返回完整的URL，赋值后会直接跳转
*/

/*
    DOM（Document Object Model）文档对象模型
        将标记语言的各个组成部分封装为对应的对象
            Document：整个文档对象
            Element：元素对象
            Attribute：属性对象
            Text：文本对象
            Comment：注释对象
        
    改变HTML元素的内容
    改变HTML元素的样式
    对HTML DOM事件作出反应
    添加和删除HTML元素

    1.Core DOM 所有文档类型的标准模型
        Document：整个文档对象
        Element：元素对象
        Attribute：属性对象
        Text：文本对象
        Comment：注释对象       
    2.XML DOM XML文档的标准模型
    3.HTMl DOM HTML文档的标准模型
        Image:<img> 
        Button:<input type="button">


    函数：
    1.根据id属性值获取，返回单个Element对象
    var h1=document.getElementById("h1")
    2.根据标签名称获取，返回Element对象数组
    var div=document.getElementsByTagName("div")
    3.根据name属性值获取，返回Element对象数组
    var hobby=document.getElementsByName("hobby")
    4.根据class属性值获取，返回Element对象数组
    var class1=document.getElementsByClassName("cls")

    获取后去W3C查文档，找函数修改值
*/

// 事件：HTML事件是发生在HTML元素上的事情
//      按钮被点击
//      鼠标移动到元素上
//      按下键盘按键

// 事件监听：js可以在事件被检测时执行代码
// 事件绑定
// 方式一：通过HTML标签中的事件属性进行绑定
/*
<input type="button" onclick="on()" value="按钮1">
function on(){alert("被点击")}
*/

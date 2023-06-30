<template>
  <div>
    <div>{{convertTime()}}</div>
    <div>{{datetime}}</div>
    <div>{{datetime2}}</div>
  </div>
</template>
<script>
import getYear, {formatTime,formatTime1}  from "@/until.js";
console.log("time now", formatTime(1000 * 1687880123));
// import {formatTime1} from "@/until.js";
export default {
  // Default Export trong Javascript ES6 chỉ cho phép xuất một mặc định cho mỗi file.
  // Default Export có thể cho một function, class hoặc một object.
  // Khi sử dụng `export default`,-->
//     <!--bạn chỉ có thể xuất một giá trị duy nhất từ module đó. Khi được nhập, nó được gán cho biến mặc định của module đó.
  data(){
    return{
      datetime:'',
      datetime2:'',
    }
  },
  created() {
    this.datetime = formatTime1(1000 * 1687880123)
    this.datetime2 = getYear
  },
  methods:{
    convertTime(){
      return formatTime(1000 * 1687880123)
    }
  }
}

</script>
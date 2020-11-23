// components/callPhone/callPhone.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
     phoneNumber:String
  },
  options:{
    styleIsolation:'apply-shared'
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
      handleCallPhone(){
        wx.makePhoneCall({
          phoneNumber: this.data.phoneNumber
        }).catch((e)=>{
           console.log(e)  //用catch(e)来捕获错误{{errMsg: "makePhoneCall:fail cancel"}
        })
      }
  }
})

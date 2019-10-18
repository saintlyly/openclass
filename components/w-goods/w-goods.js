// components/w-goods/w-goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodslist: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    goods: [{
      title: '中医基础理论',
      img: '/assets/images/cate/4.png',
      oriprice:98,
      proprice:58
    },
      {
        title: '诊断方剂中药',
        img: '/assets/images/cate/4.png',
        oriprice: 98,
        proprice: 58
      },
      {
        title: '诊断方剂中药',
        img: '/assets/images/cate/4.png',
        oriprice: 98,
        proprice: 58
      },
      {
        title: '诊断方剂中药',
        img: '/assets/images/cate/4.png',
        oriprice: 98,
        proprice: 58
      },
    
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})

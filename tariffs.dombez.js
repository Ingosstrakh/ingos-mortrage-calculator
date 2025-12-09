// tariffs.dombez.js
// Тарифы строго по подобъектам без смешивания

const TARIFFS = {
  finish:{
    wood:[
      {min:200000,max:500000,rate:0.0065},
      {min:500001,max:1000000,rate:0.0060},
      {min:1000001,max:3000000,rate:0.0052}
    ],
    stone:[
      {min:200000,max:500000,rate:0.0065},
      {min:500001,max:1000000,rate:0.0051},
      {min:1000001,max:3000000,rate:0.0043}
    ]
  },
  movable:[
    {min:100000,max:1500000,rate:0.006}
  ],
  liability:[
    {min:100000,max:500000,rate:0.0033},
    {min:500001,max:1000000,rate:0.0022},
    {min:1000001,max:2000000,rate:0.0020}
  ],
  stoveCoefficient:1.15
};

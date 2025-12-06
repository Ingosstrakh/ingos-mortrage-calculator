// tariffs.moyakvartira.js
export const T_MOYA = {
  constructive: { only: 0.001, withOthers: 0.0001 },
  finish: [
    { min: 200000, max: 500000, rate: 0.0095 },
    { min: 500001, max: 1000000, rate: 0.0060 },
    { min: 1000001, max: 3000000, rate: 0.0045 },
    { min: 3000001, max: 5000000, rate: 0.0055 }
  ],
  movable: [
    { min: 50000, max: 2000000, rate: 0.0040 },
    { min: 2000001, max: 3000000, rate: 0.0045 }
  ],
  go: {
    alone: 0.007,
    pack: [
      { min: 100000, max: 500000, rate: 0.0033 },
      { min: 500001, max: 1000000, rate: 0.0022 },
      { min: 1000001, max: 5000000, rate: 0.0020 }
    ]
  },
  risks: { gr1: 0.0020, gr23: 0.0015 }
};

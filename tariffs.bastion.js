// tariffs.bastion.js
export const T_BASTION = {
  flat: {
    cons: { min:500000, max:30000000, rate:0.001 },
    finish: { min:300000, max:10000000, rate:0.001 }
  },
  house: {
    cons: { min:1000000, max:15000000, rate:0.0015 },
    finish: { min:500000, max:5000000, rate:0.0015 }
  }
};

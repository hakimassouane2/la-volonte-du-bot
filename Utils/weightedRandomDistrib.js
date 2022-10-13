const Chance = require('chance');
const chance = new Chance();

function weightedRandomDistrib(min,max,mean,varianceFactor) {
    let prob = [], seq = [];
    for(let i=min;i<max;i++) {
      prob.push(Math.pow(max-Math.abs(mean-i),varianceFactor));
      seq.push(i);
    }
    return chance.weighted(seq, prob);
}

export default weightedRandomDistrib
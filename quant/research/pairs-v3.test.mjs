import test from 'node:test';import assert from 'node:assert/strict';import {parse,signal,simulate,evaluate} from './pairs-v3.mjs';
function sample(n=550){let s=['Date,EWA,EWC'];for(let i=0;i<n;i++)s.push(new Date(Date.UTC(2018,0,1+i)).toISOString().slice(0,10)+','+(20*Math.exp(.0002*i+.03*Math.sin(i/10)))+','+(30*Math.exp(.00015*i+.025*Math.cos(i/13))));return s.join('\n');}
test('strict price and date checks',()=>{assert.throws(()=>parse(sample(100)));assert.throws(()=>parse(sample().replace('2018-01-02','2018-01-01')));});
test('future price changes do not affect signal',()=>{const a=parse(sample()),s=signal(a,400);a[401].a*=10;assert.deepEqual(signal(a,400),s);});
test('higher transaction and short borrow cost cannot improve result for fixed signals',()=>{const a=parse(sample());const low=simulate(a,400,550,'ols',0,0);const high=simulate(a,400,550,'ols',60,300);assert.ok(high.netReturnPct<=low.netReturnPct);});
test('three folds, two models, 4 costs, 3 borrow rates',()=>{const r=evaluate(parse(sample()));assert.equal(r.folds.length,3);assert.equal(r.results.length,72);});

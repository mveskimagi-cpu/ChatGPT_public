'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const {budget,status,positionReturn}=require('../../dashboard-data');
const D={summary:{total:1.30},positions:[{fxUsdPerEur:1.1265}],automationHealth:{openai:{status:'BLOCKED_QUOTA'},apiBudget:{months:{'2026-10':{openingMicroUsd:5_040_000,spentMicroUsd:0,pending:{}}}}}};
test('dashboard prioritizes exhausted budget and separates gross return from known API cost',()=>{
 const now=Date.parse('2026-10-07T04:00:00Z'),b=budget(D,now);
 assert.equal(b.used,5.04);assert.equal(b.remaining,0);assert.ok(Math.abs(b.netEstimateEur+3.17)<0.01);
 assert.equal(status(D,now).code,'BUDGET');assert.equal(D.summary.total,1.30);
});
test('new month does not falsely claim a historical budget block is still current; quota stays explicit',()=>{
 assert.equal(budget(D,Date.parse('2026-11-01')).used,0);
 assert.equal(status(D,Date.parse('2026-11-01')).code,'QUOTA');
});
test('unconfirmed requests count against the limit and position percentages use EUR accounting',()=>{
 const d=structuredClone(D);d.automationHealth.apiBudget.months['2026-10'].pending={x:{maxMicroUsd:1000}};
 assert.equal(budget(d,Date.parse('2026-10-07')).reserved,0.001);
 assert.equal(positionReturn({costEur:200,pnl:2.30,avgUsd:85,lastUsd:86}),1.15);
});

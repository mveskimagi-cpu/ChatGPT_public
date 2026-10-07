'use strict';
// Idempotent release migration: only configuration and operational accounting.
const fs=require('fs'),vm=require('vm');
const {initialize,POLICY}=require('./api-budget'),{validateLedger}=require('./agent-team');
const scope={window:{}};vm.runInNewContext(fs.readFileSync('data.js','utf8'),scope,{timeout:1000});
const D=scope.window.PORTFOLIO_DATA;
validateLedger(D);
const before=JSON.stringify({summary:D.summary,positions:D.positions,trades:D.trades});
if(!D.automationHealth?.apiBudget)initialize(D);
D.automationConfig ||= {};
D.automationConfig.decision={...(D.automationConfig.decision||{}),...POLICY};
if(JSON.stringify({summary:D.summary,positions:D.positions,trades:D.trades})!==before)throw Error('Migration changed portfolio');
validateLedger(D);fs.writeFileSync('data.js','window.PORTFOLIO_DATA = '+JSON.stringify(D,null,2)+';\n');

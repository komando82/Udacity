/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const PredictivePerf = require('../../audits/predictive-perf.js');
const Runner = require('../../runner.js');
const assert = require('assert');

const acceptableTrace = require('../fixtures/traces/progressive-app-m60.json');
const acceptableDevToolsLog = require('../fixtures/traces/progressive-app-m60.devtools.log.json');

/* eslint-env mocha */
describe('Performance: predictive performance audit', () => {
  it('should compute the predicted values', () => {
    const artifacts = Object.assign({
      traces: {
        [PredictivePerf.DEFAULT_PASS]: acceptableTrace,
      },
      devtoolsLogs: {
        [PredictivePerf.DEFAULT_PASS]: acceptableDevToolsLog,
      },
    }, Runner.instantiateComputedArtifacts());

    return PredictivePerf.audit(artifacts).then(output => {
      assert.equal(output.score, 99);
      assert.equal(Math.round(output.rawValue), 1696);
      assert.equal(output.displayValue, '1,700\xa0ms');

      const valueOf = name => Math.round(output.extendedInfo.value[name]);
      assert.equal(valueOf('optimisticFMP'), 754);
      assert.equal(valueOf('pessimisticFMP'), 1191);
      assert.equal(valueOf('optimisticTTCI'), 2438);
      assert.equal(valueOf('pessimisticTTCI'), 2399);
    });
  });
});

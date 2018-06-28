/**
 * @license Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */
'use strict';

const path = require('path');

const CHARTS_FOLDER = 'charts';
const CHARTS_HTML_FILENAME = 'index.html';
const CHARTS_JS_FILENAME = 'charts.js';
const CHARTS_LOADER_FILENAME = 'charts-loader.js';

const OUT_PATH = path.resolve(__dirname, 'out');
const LIGHTHOUSE_RESULTS_FILENAME = 'lighthouse.json';
const SCREENSHOTS_FILENAME = 'assets-0.screenshots.json';
const GENERATED_RESULTS_FILENAME = 'generated-results.js';

const TIMING_NAME_MAP = {
  'total': 'Lighthouse Execution',
};

module.exports = {
  CHARTS_FOLDER,
  CHARTS_HTML_FILENAME,
  CHARTS_JS_FILENAME,
  CHARTS_LOADER_FILENAME,
  OUT_PATH,
  LIGHTHOUSE_RESULTS_FILENAME,
  SCREENSHOTS_FILENAME,
  TIMING_NAME_MAP,
  GENERATED_RESULTS_FILENAME,
};

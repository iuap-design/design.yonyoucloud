/**
 * 入口、导入组件样式、渲染
 */

import React from 'react';
import { render } from 'mirrorx';
import App from "./indexView/index";

import 'ucf-common/styles/tinper-bee.css';
import 'ucf-common/styles/public.less';
import './app.less';

render(<App />, document.querySelector("#app"));
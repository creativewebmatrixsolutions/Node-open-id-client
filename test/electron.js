/* eslint-disable */

import { app } from 'electron';

import { Base } from 'mocha/lib/reporters';

const orig = Base.prototype.epilogue;

Base.prototype.epilogue = function epilogue() {
  orig.call(this);
  const { stats: { failures, passes } } = this;

  app.exit(failures || passes === 0 ? 1 : 0);
}

import 'mocha/bin/mocha';

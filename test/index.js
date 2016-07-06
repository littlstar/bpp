'use strict';

const assert = require('assert');
const path = require('path');
const test = require('tape');
const bpp = require('../');

const VALID_FILE_PATH = path.resolve(__dirname, './test.mp4');
const INVALID_FILE_PATH = VALID_FILE_PATH + 'foo';

test('Invalid file (callback)', (t) => {
  t.plan(1)

  bpp.calculate(INVALID_FILE_PATH, (err, results) => {
    assert(err);
    t.pass(err.message || err);
  });
});

test('Invalid file (Promise)', (t) => {
  t.plan(1);

  bpp.calculate(INVALID_FILE_PATH)
  .then(() => t.fail())
  .catch((err) => {
    assert(err);
    t.pass(err.message || err);
  });
});

test('Valid file (callback)', (t) => {
  t.plan(1)

  bpp.calculate(VALID_FILE_PATH, (err, results) => {
    assert(null == err);
    assert(results)
    t.pass();
  });
});

test('Valid file (Promise)', (t) => {
  t.plan(1);

  bpp.calculate(VALID_FILE_PATH)
  .then((results) => {
    assert(results)
    t.pass('.then(results)')
  })
  .catch((err) => {
    assert(err);
    t.fail(err.message || err);
  });
});

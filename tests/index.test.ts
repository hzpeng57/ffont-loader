/* eslint-disable @typescript-eslint/ban-ts-comment */
import loadFont from '../src/index';

test('will throw an error without options', () => {
  // @ts-ignore
  return loadFont().catch((e) => {
    expect(e.message).toEqual('options.family cannot be empty');
  });
});

test('will throw an error without source', () => {
  // @ts-ignore
  return loadFont({ family: 'test font' }).catch((e) => {
    expect(e.message).toEqual('options.source cannot be empty');
  });
});

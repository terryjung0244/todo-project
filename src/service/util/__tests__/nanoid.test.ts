import { getNanoid } from 'service/util/nanoid';

const setNanoId = 'ABCD1234';

jest.mock('service/util/nanoid', () => ({
  getNanoid: () => setNanoId,
}));

describe('service/util/nanoid', () => {
  it('Should get Nanoid', () => {
    const result = getNanoid();
    expect(result).toStrictEqual(setNanoId);
  });
});

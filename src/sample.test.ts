import { DefaultApi } from '../client';

const api = new DefaultApi();

test('sample', async () => {
  const response = await api.fetchBook('test');
  expect(response.data).toEqual({ title: 'this is a pen' });
});

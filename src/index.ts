import { DefaultApi } from '../client';

const api = new DefaultApi();

(async () => {
  const response = await api.fetchBook('test');
  const book = response.data;
  console.log(book);
})();

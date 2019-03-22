import { getHello } from 'src/modules/hello/handers/hello-world';
import { ResponseStatus } from 'src/modules/interfaces';

import { mockRequest, mockResponse } from '../utils';

describe('Hello world', () => {
  it('GET / handler', async () => {
    const resp: any = mockResponse();
    const req: any = mockRequest();

    await getHello(req, resp);

    expect(resp.send).toHaveBeenCalledWith({
      status: ResponseStatus.success,
      data: {
        message: 'hello you',
      },
    });
  });
});

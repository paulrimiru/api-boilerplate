import dotenv from 'dotenv';
import { Express } from 'express';
import { Server } from 'http';
import request from 'supertest';

import { getHello } from 'src/modules/hello/handers/hello-world';
import { ResponseStatus } from 'src/modules/interfaces';
import { initServer } from 'src/server';

import { mockRequest, mockResponse } from '../utils';

dotenv.config();

describe('Hello world', () => {
  const { BASE_URL } = process.env;

  let expressApp: Express;
  let expressServer: Server;

  beforeAll(() => {
    const { app, server } = initServer();
    expressApp = app;
    expressServer = server;
  });

  afterAll(async () => {
    expressServer.close();
  });

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

  it('GET / endpoint', async () => {
    return request(expressApp).get(`${BASE_URL}/`).expect(200, {
      status: ResponseStatus.success,
      data: {
        message: 'hello you',
      },
    });
  });
});

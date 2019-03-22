import { expect } from 'chai';
import dotenv from 'dotenv';
import express, { Express } from 'express';
import supertest from 'supertest';

import { ResponseStatus } from 'src/modules/interfaces';
// import { app } from 'src/server';

dotenv.config();

describe('The /hello endpoint', () => {
  let app: Express;
  const { BASE_URL } = process.env;

  before(() => {
    app = express();
  });

  it('GET responds with hello world', () => {
    supertest(app)
      .get(`${BASE_URL}/hello`);
    expect({
        status: ResponseStatus.success,
        data: {
          message: 'hello you',
        },
      });
  });
});

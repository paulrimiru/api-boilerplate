
export const mockResponse = () => ({
  clearCookie: jest.fn(),
  cookie: jest.fn(),
  download: jest.fn(),
  end: jest.fn(),
  format: jest.fn(),
  json: jest.fn(),
  jsonp: jest.fn(),
  redirect: jest.fn(),
  render: jest.fn(),
  send: jest.fn(),
  sendFile: jest.fn(),
  sendStatus: jest.fn(),
  set: jest.fn(),
  type: jest.fn(),
});

const defaultOptions = {
  body: {},
  cookies: {},
  query: {},
  params: {},
};

export const mockRequest = (options?: object) => (defaultOptions);

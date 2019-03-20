export interface ResponseBody {
  status: ResponseStatus;
  data: object;
}

export interface ResponseError {
  status: ResponseStatus;
  message: string;
}

export enum ResponseStatus {
  success = 'success',
  failed = 'failed',
}

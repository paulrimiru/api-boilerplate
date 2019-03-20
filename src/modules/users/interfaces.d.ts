import { ResponseBody, ResponseError } from 'src/modules/interfaces';

export interface UserRequestBody {
  name: string;
}

export type UserPostRequestResponse = ResponseBody;

export type UserGetRequestResponse = ResponseBody;

export type UserErrorResponse = ResponseError;

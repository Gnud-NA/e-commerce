export interface IResponse {
  success: boolean;
  data: any;
  statusCode: number;
  message?: string;
}

export class ResponseHandler implements IResponse {
  constructor(
    success: boolean,
    data: any,
    statusCode: number,
    message?: string,
  ) {
    this.success = success;
    this.data = data;
    this.statusCode = statusCode;
    this.message = message || undefined;
  }
  success: boolean;
  data: any;
  statusCode: number;
  message?: string;
}

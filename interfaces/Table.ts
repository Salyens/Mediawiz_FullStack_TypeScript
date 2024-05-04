export interface IClient {
    email: string;
    name: string;
    phoneNumber: number;
    sendTime: number;
  }
  
  export interface ITableRow extends IClient {
    order: number;
  }
  
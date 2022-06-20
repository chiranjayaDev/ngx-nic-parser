import {BirthMonthAndDate} from "./birth-month-and-date";

export class Response {
  public constructor(
    public status: { code: number, message: string },
    public response?: BirthMonthAndDate
  ) {
  }
}

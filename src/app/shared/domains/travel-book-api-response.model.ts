export class TravelBookApiResponseModel {
  public static SUCCESS_STATUS: string = "success";
  public static ERROR_STATUS: string = "error";

  status?: string;
  statusCode?: string;
  msg?: string;
  result?: any;

  static isStatusSuccess(statusFound: string) {
    return statusFound === TravelBookApiResponseModel.SUCCESS_STATUS;
  }
  isStatusError = () => status === TravelBookApiResponseModel.ERROR_STATUS;

}

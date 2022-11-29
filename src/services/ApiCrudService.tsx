

export class ApiCrudService {

  private static instance: ApiCrudService;

  public static getInstance(): ApiCrudService {
    !ApiCrudService.instance && (ApiCrudService.instance = new ApiCrudService());
    return ApiCrudService.instance;
  }

  /**
   * @GET METHOD
   * not specific config needed
   */
  public get(url : string) : Promise<any> {
    return fetch(url).then(response => response.json().then(ApiCrudService.handleErrors));
  }

  private static handleErrors (res : any) {
    if (res.error) throw new Error(res.message);
    return res;
  }

}

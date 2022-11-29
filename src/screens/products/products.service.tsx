import { ApiCrudService } from "../../services/ApiCrudService";
import Constants from "../../constants/Constants";


export class ProductsService {

  private productsService : ApiCrudService = ApiCrudService.getInstance();

  public getProductList() : Promise<any> {
    return this.productsService.get(Constants.MOVEMENTS_URL);
  }

  public getUserInformation() : Promise<any> {
    return this.productsService.get(Constants.USER_INFO_URL);
  }

}

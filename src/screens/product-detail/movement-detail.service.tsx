import { ApiCrudService } from "../../services/ApiCrudService";
import Constants from "../../constants/Constants";


export class MovementDetailService {

  private productsService : ApiCrudService = ApiCrudService.getInstance();

  public getMovementDetail(movementDetail : number) : Promise<any> {
    return this.productsService.get(`${Constants.MOVEMENTS_URL}/${movementDetail}`);
  }

}

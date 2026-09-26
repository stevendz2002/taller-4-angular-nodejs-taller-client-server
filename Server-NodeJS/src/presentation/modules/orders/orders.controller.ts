import { HandleError } from "../../../domain/erros/handle.error";
import { OrdersService } from "./orders.service";
import { Request, Response } from "express";


export class OrdersController{

    private readonly ordersService = new OrdersService();


 getAllOrders = (req: Request, res: Response): void => {
    const { countOrders } = req.params;

    setTimeout(() => {
      this.ordersService
      .getAllOrders(Number(countOrders))
      .then((orders) => res.status(201).json(orders))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };

}
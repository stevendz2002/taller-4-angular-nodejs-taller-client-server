import { faker } from "@faker-js/faker";
import { Order } from "../../../domain/interfaces/orders.interface";

export class OrdersService{



    public async getAllOrders(countOrders: number): Promise<Order[]> {
        const orders: Promise<Order>[] = [];
    
        for (let i = 1; i <= countOrders; i++) {
          orders.push(this.generateOrder(i));
        }
    
        return Promise.all(orders);
      }
    

    private generateOrder(id: number): Promise<Order> {
    return Promise.resolve({
      id,
      userName: faker.person.fullName(),
    });
  }
}
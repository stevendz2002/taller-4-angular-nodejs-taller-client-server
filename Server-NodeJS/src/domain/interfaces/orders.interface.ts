export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
}

export type OrderStatus = 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'CANCELLED';

export interface Order {
  id: number;
  //userId: string;
  userName: string;
  //items: OrderItem[];
  //totalAmount: number;
  //status: OrderStatus;
  //createdAt: string;
}

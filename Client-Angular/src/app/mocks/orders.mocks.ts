/**
 * Mock de órdenes ficticias utilizado en pruebas unitarias y desarrollo local.
 */
export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    userId: 'usr-101',
    userName: 'John Doe',
    items: [
      {
        productId: 'prod-001',
        productName: 'Teclado Mecánico',
        quantity: 2,
        unitPrice: 50.0,
      },
      {
        productId: 'prod-002',
        productName: 'Mouse Inalámbrico',
        quantity: 1,
        unitPrice: 25.0,
      },
    ],
    totalAmount: 125.0,
    status: 'COMPLETED',
    createdAt: '2026-09-20T10:00:00.000Z',
  },
  {
    id: 2,
    userId: 'usr-102',
    userName: 'Jane Smith',
    items: [
      {
        productId: 'prod-003',
        productName: 'Monitor 27"',
        quantity: 1,
        unitPrice: 200.0,
      },
    ],
    totalAmount: 200.0,
    status: 'PENDING',
    createdAt: '2026-09-22T14:30:00.000Z',
  },
];

import { Provider } from "../interfaces/providers.interface";

export const providersMock: Provider[] = [
  {
    id: 1,
    name: "Distribuidora de Lácteos S.A.",
    contact: "Juan Pérez",
    email: "juan.perez@distribuidora.com",
    phone: "555-1234",
    category: "Alimentos",
    price: 4500
  },
  {
    id: 2,
    name: "Tecnología Avanzada S.A.",
    contact: "María López",
    email: "maria.lopez@tecnologia.com",
    phone: "555-5678",
    category: "Tecnología",
    price: 12000
  },
  {
    id: 3,
    name: "Servicios de Limpieza S.A.",
    contact: "Carlos Rodríguez",
    email: "carlos.rodriguez@servicios.com",
    phone: "555-9012",
    category: "Servicios",
    price: 8000
  }
];
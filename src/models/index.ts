export type Product = {
  id: number;
  name: string;
  description: string;
  defaultImage: string;
  images: string[];
  price: number;
  discount: number;
};



export type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  phone: string;
  avatar: string;
  email: string;
  address: {
    country: string;
    city: string;
    zip: string;
    street: string;
  };
  orders: {
    id: number;
    products: {
      id: number;
      quantity: number;
    }[];
  };
  role: "ADMIN" | "CUSTOMER"; // Role is based on i % 2
};

export type Cart = {
  id: number; // User id
  products: {
    id: number;
    quantity: number;
  }[];
};

export type Error = {
  msg: string;
};

// Redux Types
export type AppState = {
  recommendations: Product[];
  queryProducts: Product[];
  cart: Cart[];
};

export type AppAction = {
  type: string;
  payload: Product[] | Product | Cart | User | Error;
};

export type DispatchType = (args: AppAction) => AppAction;

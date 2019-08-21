export interface IShop {
  shopName: string;
  managerName: string;
  managerEmail: string;
  managerPassword: string;
  categories?: [ICategory];
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id: number;
  name: string;
  category: ICategory;
}

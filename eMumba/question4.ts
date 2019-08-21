import { IShop, ICategory, IProduct } from './interfaces';

class Shop {
  private shop: IShop;
  private product: IProduct;
  private category: ICategory;

  constructor(shop: IShop) {
    this.shop = shop;
  }

  public get shopName(): string {
    return this.shop.shopName;
  }

  public set shopName(name) {
    this.shop.shopName = name;
  }

  public get ShopManagerName(): string {
    return this.shop.managerName;
  }

  public set ShopManagerName(name) {
    this.shop.managerName = name;
  }

  public get managerEmail(): string {
    return this.shop.managerEmail;
  }

  public set managerEmail(name) {
    this.shop.managerEmail = name;
  }

  public get managerPassword(): string {
    return this.managerPassword;
  }

  public set managerPassword(name) {
    this.managerPassword = name;
  }

  addCategory(category: ICategory) {
    this.category = category;
  }

  addProduct(product: IProduct) {
    this.product = product;
  }
}

function createShop(shop: IShop) {
  return new Shop(shop);
}

console.log(
  createShop({
    shopName: 'TechTuned',
    managerName: 'Safi Ullah',
    managerEmail: 'someone@example.com',
    managerPassword: 'bypass'
  })
);

import { Page } from '@playwright/test';

export class InventoryPage {
  private page: Page;

  // Locators
  private inventoryItems = '.inventory_item';
  private addToCartButton = '.btn_inventory';
  private cartBadge = '.shopping_cart_badge';
  private cartLink = '.shopping_cart_link';
  private itemName = '.inventory_item_name';
  private itemPrice = '.inventory_item_price';
  private itemDescription = '.inventory_item_desc';

  constructor(page: Page) {
    this.page = page;
  }

  async getInventoryItemsCount(): Promise<number> {
    const items = await this.page.$$(this.inventoryItems);
    return items.length;
  }

  async addAllItemsToCart(): Promise<void> {
    const buttons = await this.page.locator(this.addToCartButton);
    const count = await buttons.count();
    for (let i = 0; i < count; i++) {
      await buttons.nth(i).click();
    }
  }

  async getCartItemsCount(): Promise<number> {
    const badge = await this.page.$(this.cartBadge);
    if (!badge) return 0;
    const count = await badge.textContent();
    return Number(count);
  }

  async addItemToCart(index: number = 0): Promise<void> {
    const buttons = await this.page.locator(this.addToCartButton);
    await buttons.nth(index).click();
  }

  async removeItemFromCart(index: number = 0): Promise<void> {
    const buttons = await this.page.locator(this.addToCartButton);
    await buttons.nth(index).click();
  }

  async getItemName(index: number = 0): Promise<string | null> {
    const names = await this.page.locator(this.itemName);
    return await names.nth(index).textContent();
  }

  async getItemPrice(index: number = 0): Promise<string | null> {
    const prices = await this.page.locator(this.itemPrice);
    return await prices.nth(index).textContent();
  }

  async getItemDescription(index: number = 0): Promise<string | null> {
    const descriptions = await this.page.locator(this.itemDescription);
    return await descriptions.nth(index).textContent();
  }

  async goToCart(): Promise<void> {
    await this.page.click(this.cartLink);
  }
}

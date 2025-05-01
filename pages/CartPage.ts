import { Page, expect } from '@playwright/test';

export class CartPage {
  private page: Page;

  // Locators
  private checkoutButton = '[data-test="checkout"]';
  private cartUrl = /cart.html/;
  private continueShoppingButton = '#continue-shopping';

  constructor(page: Page) {
    this.page = page;
  }

  async verifyCheckoutButton(): Promise<void> {
    const checkoutBtn = this.page.locator(this.checkoutButton);
    await expect(checkoutBtn).toBeVisible();
    await expect(checkoutBtn).toBeEnabled();
  }

  async verifyCartPage(): Promise<void> {
    await expect(this.page).toHaveURL(this.cartUrl);
  }

  async goToCart(): Promise<void> {
    await this.page.goto('/cart.html');
  }

  async goBackToInventoryPage(): Promise<void> {
    await this.page.click(this.continueShoppingButton);
  }
}

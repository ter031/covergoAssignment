import { test, expect } from '@playwright/test';
import { login } from '../utils/HelperFunctions';
import { TestData } from '../utils/TestData';
import { InventoryPage } from '../pages/InventoryPage';

test.describe('Cart Functionality', () => {
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    await login(page);
    inventoryPage = new InventoryPage(page);
  });

  test('Add all products and verify products count in the cart', async ({ page }) => {
    // Add all items to cart
    await inventoryPage.addAllItemsToCart();
    
    // Get the number of items added
    const itemsCount = await inventoryPage.getInventoryItemsCount();
    
    // Verify cart count matches the number of items
    const cartCount = await inventoryPage.getCartItemsCount();
    expect(cartCount).toBe(itemsCount);
  });

  test('should display item details correctly', async ({ page }) => {
    // Get details of first item
    const itemName = await inventoryPage.getItemName();
    const itemPrice = await inventoryPage.getItemPrice();
    const itemDescription = await inventoryPage.getItemDescription();

    // Verify item details are not empty
    expect(itemName).not.toBeNull();
    expect(itemPrice).not.toBeNull();
    expect(itemDescription).not.toBeNull();
  });

  test('should be able to add and remove items from cart', async ({ page }) => {
    // Add first item to cart
    await inventoryPage.addItemToCart();
    expect(await inventoryPage.getCartItemsCount()).toBe(1);

    // Remove the item
    await inventoryPage.removeItemFromCart();
    expect(await inventoryPage.getCartItemsCount()).toBe(0);
  });
});
  
import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestData } from './TestData';

export async function login(page: Page, username: string = TestData.VALID_USERNAME, password: string = TestData.VALID_PASSWORD) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(username, password);
  await page.waitForURL(TestData.URLS.INVENTORY_PAGE);
}

export async function getErrorMessage(page: Page): Promise<string | null> {
  const loginPage = new LoginPage(page);
  return await loginPage.getErrorMessage();
}

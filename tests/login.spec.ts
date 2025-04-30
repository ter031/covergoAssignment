import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestData } from '../utils/TestData';

test.describe('Login Functionality', () => {
  test('should login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(TestData.VALID_USERNAME, TestData.VALID_PASSWORD);
    await expect(page).toHaveURL(TestData.URLS.INVENTORY_PAGE);
  });

  test('should fail with invalid password', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(TestData.VALID_USERNAME, TestData.INVALID_PASSWORD);
    const error = await login.getErrorMessage();
    expect(error).toContain(TestData.ERROR_MESSAGES.INVALID_CREDENTIALS);
  });

  test('should fail with locked out user', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('locked_out_user', TestData.VALID_PASSWORD);
    const error = await login.getErrorMessage();
    expect(error).toContain(TestData.ERROR_MESSAGES.LOCKED_OUT_USER);
  });

  test('should show error when username is empty', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('', TestData.VALID_PASSWORD);
    const error = await login.getErrorMessage();
    expect(error).toContain(TestData.ERROR_MESSAGES.REQUIRED_USERNAME);
  });

  test('should show error when password is empty', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(TestData.VALID_USERNAME, '');
    const error = await login.getErrorMessage();
    expect(error).toContain(TestData.ERROR_MESSAGES.REQUIRED_PASSWORD);
  });
});

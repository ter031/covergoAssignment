export class TestData {
  // Valid credentials
  static readonly VALID_USERNAME = 'standard_user';
  static readonly VALID_PASSWORD = 'secret_sauce';

  // Invalid credentials
  static readonly INVALID_USERNAME = 'invalid_user';
  static readonly INVALID_PASSWORD = 'wrong_password';

  // Error messages
  static readonly ERROR_MESSAGES = {
    INVALID_CREDENTIALS: 'Username and password do not match',
    LOCKED_OUT_USER: 'Sorry, this user has been locked out.',
    REQUIRED_USERNAME: 'Username is required',
    REQUIRED_PASSWORD: 'Password is required'
  };

  // URLs
  static readonly URLS = {
    LOGIN_PAGE: 'https://www.saucedemo.com/',
    INVENTORY_PAGE: 'https://www.saucedemo.com/inventory.html'
  };
}

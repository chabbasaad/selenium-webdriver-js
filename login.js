const { Builder, By, Key, until } = require('selenium-webdriver');

async function loginToLaravel() {
    // Replace with your actual email and password
    const email = 'saadchabba@gmail.com';
    const password = '12345678';

    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the Laravel login page
        await driver.get('http://127.0.0.1:8000/login');

        await driver.sleep(5000);
        // Enter email
        await driver.findElement(By.name('email')).sendKeys(email);
        await driver.sleep(5000);
        // Enter password
        await driver.findElement(By.name('password')).sendKeys(password);
        await driver.sleep(5000);
        // Click the login button
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.sleep(5000);
        // Wait for some time to observe the result (optional)
        await driver.wait(until.urlIs('http://127.0.0.1:8000/dashboard'), 5000);
        await driver.sleep(5000);
        // Add any additional checks or actions here
        console.log('Login successful');
    } catch (error) {
        console.error('Error during login:', error);
    } finally {
        // Quit the driver
        await driver.quit();
    }
}

loginToLaravel();

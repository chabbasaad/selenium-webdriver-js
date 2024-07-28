const { Builder, By, Key, until } = require('selenium-webdriver');

async function registerToLaravel() {
    // Replace with your actual registration details
    const name = 'Your Name';
    const email = 'your-email@example.com';
    const password = 'your-password';
    const passwordConfirmation = 'your-password';

    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the Laravel registration page
        await driver.get('http://127.0.0.1:8000/register');

        await driver.sleep(5000);
        // Enter name
        await driver.findElement(By.name('name')).sendKeys(name);

        await driver.sleep(5000);
        // Enter email
        await driver.findElement(By.name('email')).sendKeys(email);

        await driver.sleep(5000);
        // Enter password
        await driver.findElement(By.name('password')).sendKeys(password);

        await driver.sleep(5000);
        // Enter password confirmation
        await driver.findElement(By.name('password_confirmation')).sendKeys(passwordConfirmation);

        await driver.sleep(5000);
        // Click the register button
        await driver.findElement(By.css('button[type="submit"]')).click();

        await driver.sleep(5000);
        // Wait for some time to observe the result (optional)
        await driver.wait(until.urlContains('/dashboard'), 5000);

        // Add any additional checks or actions here
        console.log('Registration successful');
    } catch (error) {
        console.error('Error during registration:', error);
    } finally {
        // Quit the driver
        await driver.quit();
    }
}

registerToLaravel();
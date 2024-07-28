const { Builder, By, Key, until } = require('selenium-webdriver');
const fs = require('fs');

async function loginToLaravel() {
    // Replace with your actual email and password
    const email = 'saadchabba@gmail.com';
    const password = '12345678';

    // Initialize the WebDriver
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        // Navigate to the Laravel login page
        await driver.get('http://127.0.0.1:8000/login');

        // Enter email
        await driver.findElement(By.name('email')).sendKeys(email);
        await driver.sleep(5000);
        // Enter password
        await driver.findElement(By.name('password')).sendKeys(password);
        await driver.sleep(5000);
        // Click the login button
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.sleep(5000);
        // Wait for some time to observe the result
        await driver.wait(until.urlContains('/dashboard'), 5000);
        await driver.sleep(5000);
        // Check if the user is logged in by verifying the URL or another element
        let currentUrl = await driver.getCurrentUrl();
        if (currentUrl.includes('/dashboard')) {
            console.log('Login successful, taking a screenshot...');
            await driver.sleep(5000);
            // Take a screenshot and save it
            let screenshot = await driver.takeScreenshot();
            fs.writeFileSync('screenshot.png', screenshot, 'base64');
            console.log('Screenshot saved as screenshot.png');
        } else {
            console.log('Login failed or user not redirected to home page.');
        }
    } catch (error) {
        console.error('Error during login:', error);
    } finally {
        // Quit the driver
        await driver.quit();
    }
}

loginToLaravel();

const { Builder, By, Key, until } = require('selenium-webdriver');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to perform Google search
async function performGoogleSearch(query) {
    let driver = await new Builder().forBrowser('chrome').build();
    let titles = [];
    try {
        await driver.get('http://www.google.com');
        await driver.findElement(By.name('q')).sendKeys(query, Key.RETURN);

        // Wait for a specific time before continuing (e.g., 3 seconds)
        await new Promise(resolve => setTimeout(resolve, 3000));

        await driver.wait(until.elementLocated(By.css('h3')), 1000);
        const elements = await driver.findElements(By.css('h3'));
        for (let element of elements) {
            const title = await element.getText();
            titles.push(title);
        }
    } catch (error) {
        console.error(error);
    } finally {
        await driver.quit();
    }
    return titles;
}

// Prompt the user for search input
rl.question('Enter search text: ', async (query) => {
    const results = await performGoogleSearch(query);
    console.log('Search results titles:');
    results.forEach((title, index) => {
        console.log(`${index + 1}: ${title}`);
    });
    rl.close();
});

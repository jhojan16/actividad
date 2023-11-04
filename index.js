const { Browser, Builder, By, Select } = require("selenium-webdriver");
const Chrome = require("selenium-webdriver/chrome");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async () => {
    let driver = null;
    try {
        const chromeOptions = new Chrome.Options();
        // chromeOptions.headless();

        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(chromeOptions).build();
        await driver.get("https://www.selenium.dev/selenium/web/web-form.html");

        const textArea = await driver.findElement(By.css('textarea[name="my-textarea"]'));

        await textArea.sendKeys("Anita Lava La Tina");
        await delay(2000);

        const dropdown = await driver.findElement(By.name('my-select'));

        const select = await new Select(dropdown);
        await select.selectByValue('3');
        await delay(2000);

        const colorSelect = await driver.findElement(By.css('input[name="my-colors"]'));

        await colorSelect.sendKeys('#20A722');
        await delay(2000);

        const datePicker = await driver.findElement(By.css('input[name="my-date"]'));

        await datePicker.sendKeys('08/16/1970'); //formato fecha mm/dd/aaaa
        await delay(2000);

        const checkbox = await driver.findElement(By.id('my-check-2'));

        if (!(await checkbox.isSelected())) {
            await checkbox.click();
        }

        await delay(2000);

        const button = await driver.findElement(By.css('button[type=submit]'));

        await button.click();
        await delay(2000);

        const Resultado = await driver.findElement(By.css('h1.display-6'));

        const textValue = await Resultado.getText();
        console.log(textValue);
        await delay(2000);

        const textResult2 = await driver.findElement(By.id('message'));
        
        const textValue2 = await textResult2.getText();
        console.log(textValue2);
        await delay(2000);
    } catch (error) {

    }finally {

        if(driver){
            // await driver.quit();
        }

    }

};
start();
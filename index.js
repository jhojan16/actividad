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

        await textArea.sendKeys("Anita lava la Tina");
        await delay(2000);

        const Dropdown = await driver.findElement(By.name('my-select'));

        const select = await new Select(Dropdown);
        await select.selectByValue('3');
        await delay(2000);

        const colorPicker = await driver.findElement(By.css('input[name="my-colors"]'));

        //convertí esto R:32 G:167 B:34 a HEX #20A722
        await colorPicker.sendKeys('#20A722');
        await delay(2000);

        const checkbox = await driver.findElement(By.id('my-check-2'));

        if (!(await checkbox.isSelected())) {
            await checkbox.click();
        }
        await delay(2000);

        const datePicker = await driver.findElement(By.css('input[name="my-date"]'));

        await datePicker.sendKeys('16/08/1970');
        await delay(2000);

        const submit = await driver.findElement(By.css('button[type=submit]'));

        await submit.click();
        await delay(2000);

        const textResult = await driver.findElement(By.css('h1.display-6'));

        const textValue = await textResult.getText();
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
import assert from "assert";
import addContext from "mochawesome/addContext";
import { Builder, WebDriver } from "selenium-webdriver";

describe("Reporting", function () {
    let driver: WebDriver;
    let context: any;
    let arg: any;

    before("Before block", async function () {
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().maximize();
        await driver.get("https://www.google.com");
        addLog("Launch Google page", this);
        await addScreenshot(driver, this, "Google Launch screenshot")
    });

    after("After block", async function () {
        await driver.quit();
    });

    it("test-1", async function () {
        let title = await driver.getTitle();

        if (title == "Google")
            addLog("Title is Google", this)
        else
            addLog("Title is not Google", this);
        await addScreenshot(driver, this, "Google Title screenshot")
        assert.equal(title, "Google");
        
    });

    function addLog(logMessage: string, testContext: Mocha.Context) {
        console.log(logMessage);
        addContext(testContext, logMessage)
    }

    async function addScreenshot(driver: WebDriver, testContext: Mocha.Context, logMessage:string){
        let screenshot = await driver.takeScreenshot();
        addContext(testContext, {
            title: logMessage,
            value: `data:image/png;base64,${screenshot}`
        });
    }
});

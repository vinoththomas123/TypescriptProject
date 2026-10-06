import { describe, before, after, it } from "mocha";
import { DriverFactory } from "../lib/core/driverFactory";
import { Builder, WebDriver, By, WebElement, until } from "selenium-webdriver";
import testData from "../lib/config/TestData.json";
import { Logger } from "../lib/core/logger";

let driver: WebDriver;
let pageToLaunch: string;
let logger: Logger;

describe("Launch Browser", function () {
    this.timeout(30000);

    before("Befor block", async function () {
        driver = await DriverFactory.getDriver();
        pageToLaunch = testData.demoPage.url;
        logger = new Logger(this, driver)
    });

    it("Step1", async function () {
        logger.info(`Opening: ${pageToLaunch}`);
        await driver.get(pageToLaunch);
        logger.info(`Loaded URL: ${await driver.getCurrentUrl()}`);
        logger.info(`Page title: ${await driver.getTitle()}`);
        await logger.screenshot("saucedemo-home");
    });

    after("Teardown", async function () {
        await DriverFactory.tearDown()
    });


    it("Step 2", async function () {
        const stepDriver: WebDriver = await new Builder().forBrowser("chrome").build();

        try {
            await stepDriver.get("https://www.google.com");

            let title = await stepDriver.getTitle();
            let srchElement = await stepDriver.findElement(By.name("q"));
            await srchElement.clear();
            await srchElement.sendKeys("My Test");

            let val = await srchElement.getAttribute("value");
        } finally {
            await stepDriver.quit();
        }
    });

    async function waitForElement(element: By, waitTime: number) {
        await driver.wait(until.elementLocated(element), waitTime)
    }
});



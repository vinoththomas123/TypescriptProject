import { Builder, WebDriver, By, WebElement, until } from "selenium-webdriver";
import testData from "../lib/config/TestData.json";
import { Logger } from "../lib/core/logger";

let driver: WebDriver;
let pageToLaunch: string;
let logger: Logger;

describe("Launch Browser", function () {
    this.timeout(60000);
    let driver: WebDriver;

    before("Befor block", async function () {
        driver = await new Builder().forBrowser("chrome").build();
        await driver.manage().window().maximize();

        // 1️⃣ Implicit Wait: Applies globally for all element lookups
        await driver.manage().setTimeouts({ implicit: 5000 });
    });

    after("Teardown", async function () {
        //Hard Wait
        await driver.sleep(3000);
        await driver.quit();
    });


    it("Step 2", async function () {
        await driver.get("https://www.google.com");

        let title = await driver.getTitle();
        let srchElement = await driver.findElement(By.name("q"));
        await srchElement.clear();
        await srchElement.sendKeys("My Test");

        let val = await srchElement.getAttribute("value");
        console.log("Value: " + val);

        await waitForElement(By.xpath("//*[@aria-label='Google']"), 10000);

        await fluentWait(By.xpath("//*[@aria-label='Google']"), 30000, 1000);

    });

    async function waitForElement(element: By, waitTime = 5000): Promise<WebElement | null> {
        return await driver.wait(until.elementLocated(element), waitTime)
    }

    async function fluentWait(locator: By, waitTime = 5000, pollingInterval = 500) {
        driver.wait(
            async () => {
                const element = await driver.findElement(locator);
                return (await element.isDisplayed());
            },
            waitTime,
            "Status did not become Completed",
            pollingInterval
        );
    }

});



import { WebDriver, By, until, WebElement, Key } from "selenium-webdriver";
import { DriverFactory } from "../core/driverFactory";

export class Elements {

    static driver: WebDriver;
    constructor() {

    }

    static async findElements(locator: By, timeout: number): Promise<WebElement[] | null> {
        Elements.driver = await DriverFactory.getDriver();
        let driver = Elements.driver;
        let secs = timeout / 1000
        for (let i = 0; i <= secs; i++) {
            let elements = await driver.findElements(locator);
            if (elements.length > 0) {
                console.log("Elements found");
                return elements
            }
            else
                await driver.sleep(1000);
        }
        console.log("Elements Not found");
        return null
    }

    static async findElement(locator: By, timeout: number): Promise<WebElement | null> {
        Elements.driver = await DriverFactory.getDriver();
        let driver = Elements.driver;
        let elements: WebElement;
        let secs = timeout / 1000;
        let locatorType = await Elements.getLocatorType(locator)
        for (let i = 0; i <= secs; i++) {
            if (locatorType === "xpath")
                elements = await driver.findElement(By.xpath(locator.value));
            else
                elements = await driver.findElement(By.id(locator.value));
            if (elements) {
                console.log("Element found");
                return elements
            }
            else
                await driver.sleep(1000);
        }
        console.log("Element Not found");
        return null
    }

    static async getLocatorType(locator: By): Promise<string> {
        let locatorType = locator.value;
        if (locatorType.startsWith("(") || (locatorType.startsWith("/"))) {
            return "xpath";
        }
        return "id";
    }

    static async click(locator: By, timeout: number) {
        let element = await Elements.findElement(locator, timeout);
        if (element) {
            await element.click();
            console.log("Element " + locator.value + " click completed");
        }
        console.log("Element " + locator.value + " not found.. ")
    }

    static async fill(locator: By, text: string, timeout: number) {
        let element = await Elements.findElement(locator, timeout);
        if (element) {
            await element.sendKeys(text);
            console.log("Element " + locator.value + " value filled");
        }
        console.log("Element " + locator.value + " not found.. ")
    }

}
import { Builder, WebDriver } from "selenium-webdriver"
export class DriverFactory {

    protected static driver: WebDriver | null;

     static async getDriver(): Promise<WebDriver> {
        DriverFactory.driver = await new Builder().forBrowser("chrome").build();
        DriverFactory.driver.manage().window().maximize();
        return DriverFactory.driver
    }

    static async tearDown() {
        if (DriverFactory.driver) {
            await DriverFactory.driver.quit();
        }
    }
}
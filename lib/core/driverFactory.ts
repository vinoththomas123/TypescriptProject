import { Builder, WebDriver } from "selenium-webdriver"
import chrome from "selenium-webdriver/chrome";
export class DriverFactory {

    protected static driver: WebDriver | null;
    private static options: any
    private static chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

    static setOptions() {
        DriverFactory.options = new chrome.Options();
        DriverFactory.options.setChromeBinaryPath(DriverFactory.chromePath);
        if (process.env.CI) {
            DriverFactory.options.addArguments(
                "--headless=new",
                "--disable-dev-shm-usage",
                "--no-sandbox",
                "--window-size=1920,1080"
            );
        }
    }

    static async getDriver(): Promise<WebDriver> {
        await DriverFactory.setOptions()
        DriverFactory.driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(DriverFactory.options)
            .build();
        DriverFactory.driver.manage().window().maximize();
        return DriverFactory.driver
    }

    static async tearDown() {
        if (DriverFactory.driver) {
            await DriverFactory.driver.quit();
        }
    }


}
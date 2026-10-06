import { Builder, By, until, WebDriver, WebElement} from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome";


describe("JS Executions", function(){

    let driver: WebDriver;
    let element: WebElement;

    before("Before Block", async function(){
        
        const options = new chrome.Options();
        options.addArguments(
            "--disable-background-networking",
            "--disable-component-update",
            "--disable-logging",
            "--log-level=3"
        );
        options.excludeSwitches("enable-logging");

        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(options)
            .build();
        await driver.get("https://rahulshettyacademy.com/AutomationPractice/");
        await driver.manage().window().maximize();
        await driver.manage().setTimeouts({implicit: 5000});

        
    });

    it("Test Enter value to textbox", async function(){
        element = await driver.wait(until.elementLocated(By.id("autocomplete")),10000);
        await element.clear();
        await element.sendKeys("Selenium Typescript JS Executions");
    });

    it("Test JS Executions - read data", async function(){
        let title = await driver.executeScript("return document.title");
        console.log(title);
        await driver.executeScript("arguments[0].click();", element);


        element = await driver.findElement(By.id("openwindow"));
        let jsRet = await jsExecute(element, ".getAttribute('class')");
        console.log(jsRet);

        
    });

    after("After Block", async function(){
        // await driver.quit();
    });

    async function jsExecute(webElement: WebElement, jsCmd: string){
        let jsResult = await driver.executeScript(`return arguments[0]${jsCmd}`, webElement, jsCmd);
        return jsResult;
    }

    async function scrollIntoView(element: WebElement){
        await driver.executeScript("arguments[0].scrollIntoView({behaviour: 'smooth', block: 'center'})", element);
    }

});

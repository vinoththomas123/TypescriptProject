import addContext from "mochawesome/addContext";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { WebDriver } from "selenium-webdriver";

export class Logger {

    context: Mocha.Context;
    driver: WebDriver;

    constructor (context: Mocha.Context, driver: WebDriver){
        this.context = context;
        this.driver = driver
    }

	info(message: string): void {
		console.log(message);
		addContext(this.context, message);
	}

	async screenshot(name = "screenshot"): Promise<string> {
		const screenshotDirectory = path.resolve("reports", "screenshots");
		const filePath = path.join(screenshotDirectory, `${name}.png`);
		const screenshot = await this.driver.takeScreenshot();

		await mkdir(screenshotDirectory, { recursive: true });
		await writeFile(filePath, screenshot, "base64");
		addContext(this.context, {
			title: name,
			value: `data:image/png;base64,${screenshot}`
		});

		return filePath;
	}
}

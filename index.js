const { 
  Builder,
  By,
  Key,
  until,
  JavascriptExecutor
} = require('selenium-webdriver')

const url = 'https://www.youtube.com/watch?v=T647CGsuOVU';
const youtubeLogin = '';
const youtubePassword = '';

async function example() {
  let driver = await new Builder().forBrowser('firefox').build();
  try {
    await driver.get('https://youtube.com');
    await driver.findElement(By.xpath('/html/body/ytd-app/div/div/ytd-masthead/div[3]/div[2]/div[2]/ytd-button-renderer/a')).sendKeys(Key.RETURN);
    const inputLogin = await driver.wait(until.elementLocated(By.id('identifierId')), 10000);
    inputLogin.sendKeys(youtubeLogin);

    const buttonNext = await driver.findElement(By.xpath('//*[@id="identifierNext"]'));
    buttonNext.click();

    const inputPassword = await driver.wait(until.elementLocated(By.xpath('//input[@name="password"]')), 10000);
    await driver.wait(until.elementIsVisible(driver.findElement(By.id('headingText'))), 10000);
    inputPassword.sendKeys(youtubePassword);
    
    const passwordNext = await driver.findElement(By.xpath('/html/body/div[1]/div[1]/div[2]/div/div[2]/div/div/div[2]/div/div[2]/div/div[1]/div/span/span'));
    await driver.executeScript("arguments[0].click();", passwordNext);

    await driver.wait(until.elementLocated(By.xpath('//*[@id="img"]')), 10000);
    await driver.get(url);

    const likeButton = await driver.wait(until.elementLocated(By.xpath('/html/body/ytd-app/div/ytd-page-manager/ytd-watch-flexy/div[4]/div[1]/div/div[5]/div[2]/ytd-video-primary-info-renderer/div/div/div[3]/div/ytd-menu-renderer/div/ytd-toggle-button-renderer[1]/a')), 10000);

    likeButton.click();
  } finally {
    // await driver.quit();
  }
}

example();

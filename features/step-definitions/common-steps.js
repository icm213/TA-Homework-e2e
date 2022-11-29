import { Given } from '@wdio/cucumber-framework';


Given("Browser width is 1920px", async ()=>{
    await browser.setWindowSize(1920, 900)
})

Given("I am on the {string} page", async (page) => {
    await browser.url(`${page}`);
});

Given("I am closing the pop-up ad if it exist", async()=>{
    try{ const adCloseBtn = await $(`.close`)
        await adCloseBtn.click()
        console.log('Add closed succesfully')
    } catch {
        console.log('There is no pop-up ad')
    }
})

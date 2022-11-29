import { When, Then } from '@wdio/cucumber-framework';



When("I click the 'Todays Best Deals' button", async () => {
  const bestDeals = await $(`#trendingBanner_720202 > span`)
  await bestDeals.click()
})

Then("It should be open the {string} page", async (page)=>{
  await browser.url(`${page}`);
})

Then("I click on the newegg.com logo", async () => {
  const logo = await $(`#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a > img`)
  await logo.click()
})

Then("I should be turn back on the {string} main page", async (mainPage) => {
  await browser.url(`${mainPage}`);
})
import { Given, When, Then } from '@wdio/cucumber-framework';


Given("I am typing {string} phrase on the searchbar", async(phrase) =>{
  const input = await $(`#app > header  input[type=search]`)
                         
  await input.click()
  await input.setValue(phrase)
})

When("I am clicking Search button", async ()=>{
  const button = await $(`#app > header  div.header2021-search-button`)
  await button.click()
})

Then("I should be redirect on the {string} page", async (page)=>{
  await browser.url(`${page}`)
})


Then("There have to be at least one item to buy", async ()=>{

  const list = await $(`#app > div.page-content > section > div > div > div.row-body > div:nth-child(1) > div > div > div.row-body > div.row-body-inner > div.list-wrap > div:nth-child(4)`)
  await expect(list).toHaveChildren({ gte: 1 })
})

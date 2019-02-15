const assert = require('assert');
const Cartpage=require('../pageobjects/CartPage');

describe('webdriver.io page', () => {
    before(() => {
        browser.url('https://www.homedepot.com');
    })
    it('should have the right title', () => {
        let elem = $('input#headerSearch');
        elem.addValue('hammer');
        $('button#headerSearchButton').click();
        browser.pause(4000);
        console.log(browser.getTitle());
        //let productId=$('data-prouduct-id=306196528');
        $('.pod-plp__container.pod-plp__container--alignment-reset.with__certona .js-pod.js-pod-0.plp-pod.plp-pod--default.pod-item--0').click();
        //$('.row .entry:nth-child(1)').$('button*=Add').click();
        browser.pause(8000);
       $('button#atc_pickItUp').click();
        browser.pause(10000);
    
       // browser.clickCheckoutBox
        //let clickCheckoutBox=$('~bttn.bttn--primary');
        //browser.elementSubmit;
        //clickCheckoutBox.clickCheckoutBox();
        browser.pause(10000);
        //const link=$('=secure2.homedepot.com/MCCCheckout/static/opc/opc.html').click();
        CartPage.checkoutButton.click();

    });
});
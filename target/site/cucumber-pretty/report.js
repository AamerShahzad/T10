$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddtoCart.feature");
formatter.feature({
  "line": 1,
  "name": "Add to cart",
  "description": "I want to verify when I want to purchase an item on the practice website\nit can be added to the cart",
  "id": "add-to-cart",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 49978941576,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Title of Home Page",
  "description": "",
  "id": "add-to-cart;verify-title-of-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@test1"
    },
    {
      "line": 8,
      "name": "@TitleCheck"
    },
    {
      "line": 8,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Page title should be \"My Store\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "My Store",
      "offset": 22
    }
  ],
  "location": "HomeSteps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 30464519,
  "status": "passed"
});
formatter.after({
  "duration": 23360404726,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 48834710674,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Item is added to the cart",
  "description": "",
  "id": "add-to-cart;verify-item-is-added-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test2"
    },
    {
      "line": 12,
      "name": "@AddToCart"
    },
    {
      "line": 12,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I hover over first item",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see item has been added to cart message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_hover_over_first_item()"
});
formatter.result({
  "duration": 134534252,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_add_to_cart_button()"
});
formatter.result({
  "duration": 3175321833,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_item_has_been_added_to_cart_message_is_displayed()"
});
formatter.result({
  "duration": 62074982,
  "status": "passed"
});
formatter.after({
  "duration": 23434131331,
  "status": "passed"
});
formatter.uri("PurchaseItem.feature");
formatter.feature({
  "line": 1,
  "name": "Purchase item",
  "description": "I want to verify I can purchase an item on the practice website\n and get the order completion message",
  "id": "purchase-item",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 48735728682,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Title of Home Page",
  "description": "",
  "id": "purchase-item;verify-title-of-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@test1"
    },
    {
      "line": 8,
      "name": "@TitleCheck"
    },
    {
      "line": 8,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Page title should be \"My Store\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "My Store",
      "offset": 22
    }
  ],
  "location": "HomeSteps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 7021480,
  "status": "passed"
});
formatter.after({
  "duration": 23117072567,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 48729129411,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify purchase item path",
  "description": "",
  "id": "purchase-item;verify-purchase-item-path",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test6"
    },
    {
      "line": 12,
      "name": "@Purchase"
    },
    {
      "line": 12,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I hover over first item",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click proceed to checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter my Email",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter my password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click Proceed to shipment button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I accept Terms and Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click proceed to payment button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click Pay by bank button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click confirm my order button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see text \"Your order on My Store is complete.\" on the page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_hover_over_first_item()"
});
formatter.result({
  "duration": 144172861,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_add_to_cart_button()"
});
formatter.result({
  "duration": 3189353822,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_checkout_button()"
});
formatter.result({
  "duration": 2013090601,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_proceed_to_checkout_button()"
});
formatter.result({
  "duration": 3029433592,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "HomeSteps.i_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_click_proceed_to_shipment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_accept_terms_and_conditions()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_click_proceed_to_payment_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_click_pay_by_bank_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomeSteps.i_click_confirm_my_order_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order on My Store is complete.",
      "offset": 19
    }
  ],
  "location": "HomeSteps.i_should_see_text_something_on_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 21834403130,
  "status": "passed"
});
formatter.uri("RegisterUser.feature");
formatter.feature({
  "line": 1,
  "name": "User registeration",
  "description": "I want to verify that I can register to the practice website when I provide \r\ncorrect details.",
  "id": "user-registeration",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 49480794093,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Title of Home Page",
  "description": "",
  "id": "user-registeration;verify-title-of-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@test1"
    },
    {
      "line": 8,
      "name": "@TitleCheck"
    },
    {
      "line": 8,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Page title should be \"My Store\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "My Store",
      "offset": 22
    }
  ],
  "location": "HomeSteps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 8043559,
  "status": "passed"
});
formatter.after({
  "duration": 23170072002,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 49012700598,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Registering a user",
  "description": "",
  "id": "user-registeration;verify-registering-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test3"
    },
    {
      "line": 12,
      "name": "@Register"
    },
    {
      "line": 12,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter my email under create an account header",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter random details",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see I have successfully registered",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_sign_in_button()"
});
formatter.result({
  "duration": 1516679378,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_my_email_under_create_an_account_header()"
});
formatter.result({
  "duration": 303348121,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_create_an_account_button()"
});
formatter.result({
  "duration": 82172553,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_random_details()"
});
formatter.result({
  "duration": 7633368311,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_register_button()"
});
formatter.result({
  "duration": 1405319904,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_i_have_successfully_registered()"
});
formatter.result({
  "duration": 3004852041,
  "status": "passed"
});
formatter.after({
  "duration": 23735297271,
  "status": "passed"
});
formatter.uri("SuccessfulLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Successful login",
  "description": "I want to verify when I provide correct details I can login successfully to the \r\npractice website",
  "id": "successful-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 50170700538,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Title of Home Page",
  "description": "",
  "id": "successful-login;verify-title-of-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@test1"
    },
    {
      "line": 8,
      "name": "@TitleCheck"
    },
    {
      "line": 8,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Page title should be \"My Store\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "My Store",
      "offset": 22
    }
  ],
  "location": "HomeSteps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 15160593,
  "status": "passed"
});
formatter.after({
  "duration": 21861625877,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 48301150723,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Login a user",
  "description": "",
  "id": "successful-login;verify-login-a-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@test4"
    },
    {
      "line": 12,
      "name": "@Login_Success"
    },
    {
      "line": 12,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter my Email \"testabc@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter my password \"password1\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see I have successfully logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_sign_in_button()"
});
formatter.result({
  "duration": 1797962213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testabc@yahoo.com",
      "offset": 18
    }
  ],
  "location": "HomeSteps.i_enter_my_email(String)"
});
formatter.result({
  "duration": 272049802,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 21
    }
  ],
  "location": "HomeSteps.i_enter_my_password(String)"
});
formatter.result({
  "duration": 169109026,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1174132357,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_i_have_successfully_logged_in()"
});
formatter.result({
  "duration": 5011801679,
  "status": "passed"
});
formatter.after({
  "duration": 21939171472,
  "status": "passed"
});
formatter.uri("Unsuccessfullogin.feature");
formatter.feature({
  "line": 1,
  "name": "Unsuccessful login",
  "description": "I want to verify when I provide incorrect credentials I should not ba able to login \r\nto practice website",
  "id": "unsuccessful-login",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 48218662486,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Title of Home Page",
  "description": "",
  "id": "unsuccessful-login;verify-title-of-home-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@test1"
    },
    {
      "line": 8,
      "name": "@TitleCheck"
    },
    {
      "line": 8,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Page title should be \"My Store\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "My Store",
      "offset": 22
    }
  ],
  "location": "HomeSteps.page_title_should_be_something(String)"
});
formatter.result({
  "duration": 17169714,
  "status": "passed"
});
formatter.after({
  "duration": 21850738335,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Verify Login a user",
  "description": "",
  "id": "unsuccessful-login;verify-login-a-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@test5"
    },
    {
      "line": 12,
      "name": "@Login_Fail"
    },
    {
      "line": 12,
      "name": "@Automation"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter Random email as \u003cEmail\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Random password as \u003cPassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see login error is displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "unsuccessful-login;verify-login-a-user;",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ],
      "line": 21,
      "id": "unsuccessful-login;verify-login-a-user;;1"
    },
    {
      "cells": [
        "abc@yahoo.com",
        "pass123"
      ],
      "line": 22,
      "id": "unsuccessful-login;verify-login-a-user;;2"
    },
    {
      "cells": [
        "777@yahoo.com",
        "pass999"
      ],
      "line": 23,
      "id": "unsuccessful-login;verify-login-a-user;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 48896999414,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify Login a user",
  "description": "",
  "id": "unsuccessful-login;verify-login-a-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Automation"
    },
    {
      "line": 12,
      "name": "@Login_Fail"
    },
    {
      "line": 12,
      "name": "@test5"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter Random email as abc@yahoo.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Random password as pass123",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see login error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_sign_in_button()"
});
formatter.result({
  "duration": 1531739816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc@yahoo.com",
      "offset": 24
    }
  ],
  "location": "HomeSteps.i_enter_random_email(String)"
});
formatter.result({
  "duration": 212983722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass123",
      "offset": 27
    }
  ],
  "location": "HomeSteps.i_enter_random_password(String)"
});
formatter.result({
  "duration": 99263700,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_login_button()"
});
formatter.result({
  "duration": 818198870,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_login_error_is_displayed()"
});
formatter.result({
  "duration": 91095213,
  "status": "passed"
});
formatter.after({
  "duration": 22994752293,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "HomeSteps.i_am_on_homepage()"
});
formatter.result({
  "duration": 49051773861,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify Login a user",
  "description": "",
  "id": "unsuccessful-login;verify-login-a-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@Automation"
    },
    {
      "line": 12,
      "name": "@Login_Fail"
    },
    {
      "line": 12,
      "name": "@test5"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I enter Random email as 777@yahoo.com",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Random password as pass999",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see login error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HomeSteps.i_click_sign_in_button()"
});
formatter.result({
  "duration": 1955731762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "777@yahoo.com",
      "offset": 24
    }
  ],
  "location": "HomeSteps.i_enter_random_email(String)"
});
formatter.result({
  "duration": 193185201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pass999",
      "offset": 27
    }
  ],
  "location": "HomeSteps.i_enter_random_password(String)"
});
formatter.result({
  "duration": 138380140,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_login_button()"
});
formatter.result({
  "duration": 781323358,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_login_error_is_displayed()"
});
formatter.result({
  "duration": 92039078,
  "status": "passed"
});
formatter.after({
  "duration": 22993828601,
  "status": "passed"
});
});
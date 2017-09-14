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
  "duration": 53294660423,
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
  "duration": 24992630,
  "status": "passed"
});
formatter.after({
  "duration": 21966574689,
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
  "duration": 48111678882,
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
  "duration": 74740071,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_add_to_cart_button()"
});
formatter.result({
  "duration": 3104044240,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_item_has_been_added_to_cart_message_is_displayed()"
});
formatter.result({
  "duration": 62884488,
  "status": "passed"
});
formatter.after({
  "duration": 21830932666,
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
  "duration": 48140971372,
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
  "duration": 22443149,
  "status": "passed"
});
formatter.after({
  "duration": 21845970854,
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
  "duration": 48047177788,
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
  "duration": 67830567,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_add_to_cart_button()"
});
formatter.result({
  "duration": 3078966674,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_checkout_button()"
});
formatter.result({
  "duration": 2104094494,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_proceed_to_checkout_button()"
});
formatter.result({
  "duration": 2406689309,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_my_email()"
});
formatter.result({
  "duration": 136349819,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_my_password()"
});
formatter.result({
  "duration": 114576952,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1330698916,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_proceed_to_shipment_button()"
});
formatter.result({
  "duration": 1765302992,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_accept_terms_and_conditions()"
});
formatter.result({
  "duration": 68920572,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_proceed_to_payment_button()"
});
formatter.result({
  "duration": 1819189623,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_pay_by_bank_button()"
});
formatter.result({
  "duration": 2027172288,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_confirm_my_order_button()"
});
formatter.result({
  "duration": 2569607665,
  "status": "passed"
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
  "duration": 1069014001,
  "status": "passed"
});
formatter.after({
  "duration": 21883344251,
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
  "duration": 47914421450,
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
  "duration": 10203587,
  "status": "passed"
});
formatter.after({
  "duration": 21818808121,
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
  "duration": 48226445523,
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
  "duration": 1410001795,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_my_email_under_create_an_account_header()"
});
formatter.result({
  "duration": 152912244,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_create_an_account_button()"
});
formatter.result({
  "duration": 98787085,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_random_details()"
});
formatter.result({
  "duration": 7120100592,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_register_button()"
});
formatter.result({
  "duration": 1407116464,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_i_have_successfully_registered()"
});
formatter.result({
  "duration": 3011084439,
  "status": "passed"
});
formatter.after({
  "duration": 21816895302,
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
  "duration": 47961607730,
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
  "duration": 9945949,
  "status": "passed"
});
formatter.after({
  "duration": 21983206479,
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
  "duration": 6825730720,
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
  "name": "I enter my Email",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter my password",
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
  "duration": 22611642607,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_my_email()"
});
formatter.result({
  "duration": 103518701,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_my_password()"
});
formatter.result({
  "duration": 77947449,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_login_button()"
});
formatter.result({
  "duration": 6402054660,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_i_have_successfully_logged_in()"
});
formatter.result({
  "duration": 5019341941,
  "status": "passed"
});
formatter.after({
  "duration": 131946973,
  "error_message": "cucumber.runtime.CucumberException: Failed to instantiate class ui.StepDefinitions.Hooks\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:45)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.getInstance(DefaultJavaObjectFactory.java:31)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:223)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:211)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:205)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: java.lang.reflect.InvocationTargetException\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat cucumber.runtime.java.DefaultJavaObjectFactory.cacheNewInstance(DefaultJavaObjectFactory.java:39)\r\n\t... 31 more\r\nCaused by: org.openqa.selenium.WebDriverException: unknown error: failed to change window state to normal, current state is maximized\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 129 milliseconds\nBuild info: version: \u00273.0.0\u0027, revision: \u0027350cf60\u0027, time: \u00272016-10-13 10:48:57 -0700\u0027\nSystem info: host: \u0027User-PC\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.31.488763 (092de99f48a300323ecf8c2a4e2e7cab51de5ba8), userDataDir\u003dC:\\Users\\User\\AppData\\Local\\Temp\\scoped_dir4504_27057}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 7b0c9e54198c330866ed7a3893a21d95\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:658)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:882)\r\n\tat Utilities.WebBrowser.getDriver(WebBrowser.java:41)\r\n\tat ui.StepDefinitions.Hooks.\u003cinit\u003e(Hooks.java:8)\r\n\t... 36 more\r\n",
  "status": "failed"
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
  "duration": 21097821298,
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
  "duration": 21239896,
  "status": "passed"
});
formatter.after({
  "duration": 21883986576,
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
  "duration": 47903618713,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Login a user",
  "description": "",
  "id": "unsuccessful-login;verify-login-a-user",
  "type": "scenario",
  "keyword": "Scenario",
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
  "name": "I enter Random Email",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter Random Password",
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
  "duration": 1422254804,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_random_email()"
});
formatter.result({
  "duration": 162516328,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_enter_random_password()"
});
formatter.result({
  "duration": 103096501,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_click_login_button()"
});
formatter.result({
  "duration": 828693907,
  "status": "passed"
});
formatter.match({
  "location": "HomeSteps.i_should_see_login_error_is_displayed()"
});
formatter.result({
  "duration": 58410509,
  "status": "passed"
});
formatter.after({
  "duration": 21896360265,
  "status": "passed"
});
});
package ui.StepDefinitions;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;


import Utilities.GenericFunctions;
import Utilities.WebBrowser;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.testng.Assert;

import com.sun.jna.platform.win32.WinNT.GENERIC_MAPPING;
import com.sun.jna.platform.win32.WinUser.INPUT;

import ui.PageAction.HomePage;


public class HomeSteps {

	WebDriver driver;
	HomePage objHomePage;
	public static String Password="Gzxm9614";
	public static String Email="ilxlw9@mail.com";

	public HomeSteps() {
		this.driver = WebBrowser.getDriver();
		objHomePage = new HomePage(driver);
	}

	
	@Given("^I am on HomePage$")
	public void i_am_on_homepage() throws Throwable {

		//System.out.println("Test");

		//GenericFunctions.verifyPageTitle(
				//"Online Shopping: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in");
	}
	
	@Then("^Page title should be \"([^\"]*)\"$")
    public void page_title_should_be_something(String title) throws Throwable {
        
		Assert.assertEquals(GenericFunctions.getCurrentPageTitle(), title);
    }

	
	@When("^I hover over first item$")
    public void i_hover_over_first_item() throws Throwable {
       
		GenericFunctions.mouseHover(objHomePage.img_Item1);
    }

    @Then("^I should see item has been added to cart message is displayed$")
    public void i_should_see_item_has_been_added_to_cart_message_is_displayed() throws Throwable {
        
    	Assert.assertTrue(GenericFunctions.isElementDisplayed(objHomePage.text_AddToCart));
    }

    @And("^I click add to cart button$")
    public void i_click_add_to_cart_button() throws Throwable {
        GenericFunctions.javascriptClick(objHomePage.button_AddToCart);
        Thread.sleep(3000);
    }
    
    @When("^I click sign in button$")
    public void i_click_sign_in_button() throws Throwable {
        GenericFunctions.javascriptClick(objHomePage.button_SignIn);
    }

    @And("^I enter my email under create an account header$")
    public void i_enter_my_email_under_create_an_account_header() throws Throwable {
    	Email = GenericFunctions.generateEmail(10);
    	System.out.println(Email);
        GenericFunctions.sendData1("email_create",Email);
    }

    @And("^I click create an account button$")
    public void i_click_create_an_account_button() throws Throwable {
        GenericFunctions.javascriptClick(objHomePage.button_CreateAccount);
        
    }

    @And("^I enter random details$")
    public void i_enter_random_details() throws Throwable {
    	Thread.sleep(5000);
    	//Title
    	GenericFunctions.javascriptClick(objHomePage.input_male);
    	
        //First Name
    	GenericFunctions.sendData1("customer_firstname", GenericFunctions.generateString(10, "char"));
    	
    	//Last Name
    	GenericFunctions.sendData1("customer_lastname", GenericFunctions.generateString(8, "char"));
    	
    	//Password
    	Password=GenericFunctions.generatePassword(8);
    	System.out.println(Password);
    	GenericFunctions.sendData1("passwd",Password);
    	
    	//Date of birth
    	GenericFunctions.javascriptClick(objHomePage.input_Days);
    	objHomePage.input_Days.sendKeys(Keys.ARROW_DOWN,Keys.ARROW_DOWN);
    	GenericFunctions.javascriptClick(objHomePage.input_Months);
    	objHomePage.input_Months.sendKeys(Keys.ARROW_DOWN);
    	GenericFunctions.javascriptClick(objHomePage.input_Years);
    	objHomePage.input_Years.sendKeys(Keys.ARROW_DOWN,Keys.ARROW_DOWN,Keys.ARROW_DOWN);
    	
    	
    	//Address
    	GenericFunctions.sendData1("address1", GenericFunctions.generateString(10, "char"));
    	
    	//City
    	GenericFunctions.sendData1("city", GenericFunctions.generateString(8, "char"));
    	
    	//State
    	GenericFunctions.javascriptClick(objHomePage.input_State);
    	objHomePage.input_State.sendKeys(Keys.ARROW_DOWN,Keys.ARROW_DOWN,Keys.ARROW_DOWN);
    	
    	//Postal code
    	GenericFunctions.sendData1("postcode", GenericFunctions.generateString(5, "num"));
    	
    	//Country
    	GenericFunctions.javascriptClick(objHomePage.input_Country);
    	objHomePage.input_Country.sendKeys(Keys.ARROW_DOWN,Keys.ARROW_DOWN,Keys.ARROW_DOWN);
    	
    	//Mobile number
    	GenericFunctions.sendData1("phone_mobile", GenericFunctions.generateString(11, "num"));
    	
    	//Alias
    	GenericFunctions.javascriptClick(objHomePage.input_Alias);
    	GenericFunctions.sendData1("alias", GenericFunctions.generateString(4, "char"));
    }

    @And("^I click register button$")
    public void i_click_register_button() throws Throwable {
        
    	GenericFunctions.javascriptClick(objHomePage.button_Register);
    }
    
    @Then("^I should see I have successfully registered$")
    public void i_should_see_i_have_successfully_registered() throws Throwable {
    	Thread.sleep(3000);
    	
    	Assert.assertEquals(GenericFunctions.getCurrentPageURL(),"http://automationpractice.com/index.php?controller=my-account");
    }
    
    @Then("^I should see I have successfully logged in$")
    public void i_should_see_i_have_successfully_logged_in() throws Throwable {
    	Thread.sleep(5000);
    	Assert.assertEquals(GenericFunctions.getCurrentPageURL(),"http://automationpractice.com/index.php?controller=my-account");
    }

    @And("^I enter my Email \"([^\"]*)\"$")
    public void i_enter_my_email(String email) throws Throwable {
    	
        GenericFunctions.sendData1("email", email);
    }

    @And("^I enter my password \"([^\"]*)\"$")
    public void i_enter_my_password(String password) throws Throwable {
    	
    	 GenericFunctions.sendData1("passwd", password);
    }
    

    @And("^I click login button$")
    public void i_click_login_button() throws Throwable {
    	
       GenericFunctions.javascriptClick(objHomePage.button_login);
    }
    
    @Then("^I should see text \"([^\"]*)\" on the page$")
    public void i_should_see_text_something_on_the_page(String text) throws Throwable {
    	
    	Thread.sleep(1000);
    	Assert.assertEquals(GenericFunctions.getElementText(objHomePage.text_OrderComplete),text);
    }

    @And("^I click checkout button$")
    public void i_click_checkout_button() throws Throwable {
    	
    	GenericFunctions.javascriptClick(objHomePage.button_Checkout);
    	Thread.sleep(1000);
    }

    @And("^I click proceed to checkout button$")
    public void i_click_proceed_to_checkout_button() throws Throwable {
    	
    	GenericFunctions.javascriptClick(objHomePage.button_ProceedToCheckout);
    	Thread.sleep(1000);
    }

    @And("^I click Proceed to shipment button$")
    public void i_click_proceed_to_shipment_button() throws Throwable {
    	
    	GenericFunctions.javascriptClick(objHomePage.button_ProceedToShipment);
    	Thread.sleep(1000);
    }

    @And("^I accept Terms and Conditions$")
    public void i_accept_terms_and_conditions() throws Throwable {
    	
    	GenericFunctions.javascriptClick(objHomePage.button_TAndC);
    }

    @And("^I click proceed to payment button$")
    public void i_click_proceed_to_payment_button() throws Throwable {
    	
    	GenericFunctions.javascriptClick(objHomePage.button_ProceedToPayment);
    	Thread.sleep(1000);
    }

    @And("^I click Pay by bank button$")
    public void i_click_pay_by_bank_button() throws Throwable {
    	
    	GenericFunctions.javascriptClick(objHomePage.button_PayByBank);
    	Thread.sleep(1000);
    }

    @And("^I click confirm my order button$")
    public void i_click_confirm_my_order_button() throws Throwable {
    	
    	GenericFunctions.javascriptClick(objHomePage.button_ConfirmOrder);
    	Thread.sleep(1000);
    }
    
    
    @Then("^I should see login error is displayed$")
    public void i_should_see_login_error_is_displayed() throws Throwable {
      Assert.assertTrue( GenericFunctions.isElementDisplayed(objHomePage.error_Login));
    }

    @And("^I enter Random email as ([^\\\"]*)$")
    public void i_enter_random_email(String email) throws Throwable {
    	
    	GenericFunctions.sendData1("email",email);
    	
    }

    @And("^I enter Random password as ([^\\\"]*)$")
    public void i_enter_random_password(String password) throws Throwable {
    	
    	GenericFunctions.sendData1("passwd", password);

    }

	
}
package ui.OR;

import org.openqa.selenium.support.FindBy;

import org.openqa.selenium.support.ui.*;
import org.openqa.selenium.*;
import Utilities.WebBrowser;

public class HomeOR extends WebBrowser 
{

	
	@FindBy(xpath=".//*[@id='homefeatured']/li[1]/div/div[1]/div/a[1]/img")
	public WebElement img_Item1;
	
	@FindBy(xpath=".//*[@id='homefeatured']/li[1]/div/div[2]/div[2]/a[1]/span")
	public WebElement button_AddToCart;
	
	@FindBy(xpath=".//*[@id='layer_cart']/div[1]/div[1]/h2")
	public WebElement text_AddToCart;
	
	@FindBy(id="customer_firstname")
	public WebElement input_FirstName;
	
	@FindBy(id="customer_lastname")
	public WebElement input_LastName;
	
	@FindBy(xpath=".//*[@id='header']/div[2]/div/div/nav/div[1]/a")
	public WebElement button_SignIn;
	
	@FindBy(id="email")
	public WebElement input_email;
	
	@FindBy(id="email_create")
	public WebElement input_CreateEmail;
	
	@FindBy(id="SubmitCreate")
	public WebElement button_CreateAccount;
	
	@FindBy(xpath=".//*[@id='account-creation_form']/div[1]/div[1]/div[1]/label")
	public WebElement input_male;
	
	@FindBy(id="passwd")
	public WebElement input_Password;
	
	@FindBy(id="days")
	public WebElement input_Days;
	
	@FindBy(id="months")
	public WebElement input_Months;
	
	@FindBy(id="years")
	public WebElement input_Years;
	
	@FindBy(id="address1")
	public WebElement input_Address;
	
	@FindBy(id="city")
	public WebElement input_city;
	
	@FindBy(id="id_state")
	public WebElement input_State;
	
	@FindBy(id="postcode")
	public WebElement input_PostalCode;
	
	@FindBy(id="id_country")
	public WebElement input_Country;
	
	@FindBy(id="phone_mobile")
	public WebElement input_MobileNumber;
	
	@FindBy(id="alias")
	public WebElement input_Alias;

	@FindBy(id="submitAccount")
	public WebElement button_Register;
	
	@FindBy(id="SubmitLogin")
	public WebElement button_login;
	
	@FindBy(xpath=".//*[@id='header']/div[2]/div/div/nav/div[1]/a/span")
	public WebElement button_MyAccount;
	
	@FindBy(xpath=".//*[@id='layer_cart']/div[1]/div[2]/div[4]/a/span")
	public WebElement button_Checkout;
	
	@FindBy(xpath=".//*[@id='center_column']/p[2]/a[1]/span")
	public WebElement button_ProceedToCheckout;
	
	@FindBy(id="cgv")
	public WebElement button_TAndC;
	
	@FindBy(xpath=".//*[@id='form']/p/button")
	public WebElement button_ProceedToPayment;
	
	@FindBy(xpath=".//*[@id='center_column']/form/p/button")
	public WebElement button_ProceedToShipment;
	
	@FindBy(xpath=".//*[@id='HOOK_PAYMENT']/div[1]/div/p/a")
	public WebElement button_PayByBank;
	
	@FindBy(xpath=".//*[@id='cart_navigation']/button")
	public WebElement button_ConfirmOrder;
	
	@FindBy(xpath=".//*[@id='center_column']/div/p/strong")
	public WebElement text_OrderComplete;
	
	@FindBy(xpath=".//*[@id='center_column']/div[1]")
	public WebElement error_Login;
	
}



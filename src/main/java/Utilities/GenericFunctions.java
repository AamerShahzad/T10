package Utilities;

import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Random;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.Writer;
import java.lang.*;
import java.nio.file.StandardOpenOption;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import org.testng.Assert;

import com.google.common.io.Files;
import com.sun.jna.platform.FileUtils;

import ui.PageAction.HomePage;








public class GenericFunctions extends WebBrowser {
	

	static HomePage objHomePage;
	static String characters="abcdefghijklmnopqrstuvwxyz";
	static String numbers="0123456789";
	static Random rand;
	public static boolean a;
	public static String t;
	
	public static void verifyPageTitle(String expectedTitle) {
		Assert.assertEquals(driver.getTitle(), expectedTitle);
	}

	
	public static boolean isElementDisplayed(WebElement element) {
		try {
			if (element.isDisplayed()) {
				return true;
			}
			return false;
		} catch (Exception ex) {
			return false;
		}
	}

	
	public static boolean checkCurrentPageName(String pageName) {
		try {
			driver.findElement(By.xpath("//h4[contains(text(),'" + pageName + "')]"));
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	
	public static boolean isElementDisplayed(By locator) {
		try {
			if (driver.findElement(locator).isDisplayed()) {
				return true;
			}
		} catch (Exception e) {
			return false;
		}
		return false;
	}

	
	public static void clickAnyButtonByText(String textToClick) {
		driver.findElement(By.xpath("//button[text()='" + textToClick + "']")).click();
	}

	
	public static void clickAnyLinkByText2(String linkToClick) {
		driver.findElement(By.xpath("//a[text()='" + linkToClick + "']")).click();
	}
	public static void clickAnyLinkByText3(String linkToClick) {
		driver.findElement(By.xpath("//*[text()='"+linkToClick+"']")).click();
	}
	public static void clickAnyLinkByText(String linkToClick) {
		driver.findElement(By.xpath("//a/span[text()='" + linkToClick + "']")).click();
	}

	
	public static String getCurrentPageURL() {
		return driver.getCurrentUrl();
	}

	
	public static String getCurrentPageHeader(String pageTitle) {
		return driver.findElement(By.xpath("//h3[text()='" + pageTitle + "']")).getText();
	}

	
	public static String getElementText(WebElement element) {
		return element.getText();
	}

	
	public static void mouseHover(WebElement element) {
		Actions action = new Actions(driver);
		action.moveToElement(element).perform();
	}

	
	public static void clickAnyTileByText(String tileToClick) {
		driver.findElement(By.xpath("//h2[text()='" + tileToClick + "']")).click();
	}

	
	public static void selectNewWindow() {
		for (String winHandle : driver.getWindowHandles()) {
			driver.switchTo().window(winHandle);
		}
	}

	
	public static boolean isTitlePresent(String expectedtitle) {
		List<WebElement> list_PopupTitles = driver.findElements(By.xpath("//h4"));
		for (WebElement element : list_PopupTitles) {
			if (element.getText().contains(expectedtitle)) {
				return true;
			}
		}
		return false;
	}

	
	public static void javascriptClick(WebElement element) {
		Actions action = new Actions(driver);
		action.moveToElement(element).click().build().perform();
	}
	
	
	public static String getCurrentPageTitle(){
		return driver.getTitle();
	}
	
	
	public static void sendData(String inputField, String inputData){
		
		driver.findElement(By.id("//*[text()='" + inputField + "']")).sendKeys(inputData);
		
	}
	
	
	public static void HoverAndClick(String hover, String click) throws InterruptedException{

         WebElement webElementToHover = driver.findElement(By.linkText(hover));

         Actions action = new Actions(driver);
         action.moveToElement(webElementToHover).build().perform();

         Thread.sleep(2000);

         driver.findElement(By.linkText(click)).click();
         
     }
	 
	
	 public static void Sleep(int milliseconds) throws InterruptedException{
		 
		 Thread.sleep(milliseconds);
		 
	}
	 
//	 public static boolean isHeaderTextDisplayed(String title) {
//
//	WebElement cl = driver.findElement(By.xpath("//*[contains(text(), '"+title.trim()+"')]"));
//		 a= cl.isDisplayed();
//		 
//		 
//		 //try {
//		 if (a )
//	//		if (driver.findElement(By.xpath("//*[contains(text(), '"+title.trim()+"')]")).isDisplayed())
//		 {
//			 
//		 return true;
//		 //}
//		 } //catch (Exception e) {
//
//		 //return false;
//		 //}
//		 else{
//		 return false;
//		 }
//		 }
	 
	 
	 public static boolean isHeaderTextDisplayed(String title) {

		 try {
			 
		 if (driver.findElement(By.xpath("//*[contains(text(), '"+title.trim()+"')]")).isDisplayed()) {
		 
			 return true;
		 
		 }
		 
		 } catch (Exception e) {

		 return false;
		 }
		 
		 return false;
		 }
	 
	 
	 public static boolean isListTextDisplayed(String text) {
			 
		 if (driver.findElement(By.xpath("//li[contains(text(), '"+text.trim()+"')]")).isDisplayed()) {
		 
			 return true;
		 
		 }
		 
		 else {
		 return false;
		 }
		 }
	 
	 
	 public static boolean isLinksDisplayed(String link) {

		// try {
		 
		 if (driver.findElement(By.linkText(link)).isDisplayed()) {
			 
		 return true;
		 
		// }
		 
		 //} catch (Exception e) {

		// return false;
		 }
		 else{
		 return false;
		 }
		 }
	 
	 
	 public String getAnyElementTxt(WebElement element){
			
		return element.getText();		
		}
	 
	
	 
	 public static String getXhtmlPageTitle() {

		 return driver.findElement(By.xpath("//xhtml:head//xhtml:title")).getText();
		 }
	 
	 
	 public static String getBoldText(String text) {
			return driver.findElement(By.xpath("//p/strong[contains(text(),'"+text+"')]")).getText();
		}
	 
	 
	 public static String generateString( int length, String type)
	 {
		 rand = new Random();
	     char[] text = new char[length];
	     if(type=="char")
	     {
	     
	     for (int i = 0; i < length; i++)
	     {
	         text[i] = characters.charAt(rand.nextInt(characters.length()));
	     }
	     }
	     else if(type=="num")
	     {
	    	 for (int i = 0; i < length; i++)
		     {
		         text[i] = numbers.charAt(rand.nextInt(numbers.length()));
		     } 
	     }
	     return new String(text);
	   
	 }
	 
	
	 
	 public static String getAttribute(String ID,String attri) {
			return driver.findElement(By.id(ID)).getAttribute(attri);
		}
	 
	 
	 public static WebElement getOptions(String ID, int i) {
		 WebElement selectElement = driver.findElement(By.id(ID));
			Select select = new Select(selectElement);	
			List<WebElement> allOptions = select.getOptions(); 
			
			
		 return allOptions.get(i);
		}
//	 public static void SelectOption(int option)
//	 {
//		 objHomePage = new HomePage(driver);
//		 for(int i =0;i<option;i++){
//		    	objHomePage.input_Title.sendKeys(Keys.ARROW_DOWN);
//		    	}
//	 }
	 
	 public static void sendData1(String inputField, String inputData){
			
			driver.findElement(By.id(inputField)).sendKeys(inputData);
			
			
			
		}
	 
	
	 
	 

		    public static String RandomDateOfBirth(int start, int end) {

		        GregorianCalendar gc = new GregorianCalendar();

		        int year = randBetween(start, end);

		        gc.set(Calendar.YEAR, year);

		        int dayOfYear = randBetween(1, gc.getActualMaximum(Calendar.DAY_OF_YEAR));

		        gc.set(Calendar.DAY_OF_YEAR, dayOfYear);

		    String DOB= ( gc.get(Calendar.DAY_OF_MONTH)+"/"+ (gc.get(Calendar.MONTH) + 1) + "/" + gc.get(Calendar.YEAR) );
		    return DOB;
		    }

		    public static int randBetween(int start, int end) {
		        return start + (int)Math.round(Math.random() * (end - start));
		    }
		
	 
		    
		    public static String generateEmail( int length)
			 {
				 rand = new Random();
			     char[] text = new char[length];
			    
			     
			     for (int i = 0; i < length/2; i++)
			     {
			         text[i] = characters.charAt(rand.nextInt(characters.length()));
			         text[i+1] = numbers.charAt(rand.nextInt(numbers.length()));
			     }
			     String Emailx = new String (text).trim()+"@mail.com";
			     
			     return Emailx;
			   
			 }
	 
	 
	 
		    
		    public static String generatePassword( int length)
			 {
				 rand = new Random();
			     char[] text = new char[length];
			     char[] text2 = new char[length/2];
			     
			     
			     
			     for (int i = 0; i < length/2; i++)
			     {
			         text[i] = characters.charAt(rand.nextInt(characters.length()));
			     }
			     
			     for (int i = 0; i < length/2; i++)
			     {
			         text2[i] = numbers.charAt(rand.nextInt(numbers.length()));
			     } 
		String password = new String(text).substring(0,1).trim().toUpperCase()+new String(text).substring(1).trim()+new String (text2).trim();	     
			     return password;
			   
			 }
		    
		    public static void SaveUser(String email,String password)
		    {
		    	File file = new File("..\\EDS.Web.BDD.Test\\Users\\User.txt");
		    	Writer output = null;
		    	try
		    	{
		    		 
				if(file.exists()==false)
				{
		    	output = new BufferedWriter(new FileWriter(file));
		    	output.write(email+",");
		    	output.write(password+",");
		    	output.close();
				}
				else
				{
					output = new  BufferedWriter(new FileWriter(file,true));
					output.write(email+",");
			    	output.write(password+",");
			    	output.close();
				}
		    	
		    	}catch(Exception e)
		    	{
		    		System.out.println(e);
		    	}
		    	
		    }
		    

}
	



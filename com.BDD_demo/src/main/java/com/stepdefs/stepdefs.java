package com.stepdefs;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefs {

	
	WebDriver driver;
	@Given("^user should on login page$")
	public void user_should_on_login_page()  {
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		   driver= new ChromeDriver();
		   driver.get("file:///D:/JAVA/JAVA/java/Selenium/Offline%20Website/Offline%20Website/index.html");
	}

	@When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String uname, String pass) throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys(uname);
		driver.findElement (By.id("password")).sendKeys(pass);
	}

	@When("^user click on login button$")
	public void user_click_on_login_button()  {
		driver.findElement(By.xpath("//*[@id=\"form\"]/div[3]/div/button")).click();
	}

	

	@Then("^user will be on home page$")
	public void user_will_be_on_home_page() {	
	Assert.assertEquals("JavaByKiran | Dashboard", driver.getTitle());
	}
	
	@Then("^user should see a logo$")
	public void user_should_see_a_logo() {
	
		WebElement logo =driver.findElement(By.tagName("img"));
		Assert.assertTrue(logo.isDisplayed());
	}
	
}

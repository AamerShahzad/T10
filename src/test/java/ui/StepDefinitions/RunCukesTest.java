package ui.StepDefinitions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions( 
				features = {"src/test/resources/features/"}, 
                plugin = { "pretty","json:target/cucumber.json", "html:target/site/cucumber-pretty"},
                glue = {"ui.StepDefinitions"},
                
                
		tags = { "@Automation" }) 
public class RunCukesTest {
}  

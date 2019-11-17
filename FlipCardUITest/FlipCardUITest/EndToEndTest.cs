using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using Assert = NUnit.Framework.Assert;

namespace FlipCardUITest
{
    [TestClass]
    public class EndToEndTest
    {
        IWebDriver driver;

        [SetUp]
        public void startBrowser()
        {
            driver = new ChromeDriver("C:\\Users\\calib\\Documents");
        }

        [Test]
        public void test()
        {
            driver.Url = "http://localhost:5000/";
            System.Threading.Thread.Sleep(2000);
            IWebElement questionText = driver.FindElement(By.XPath("//*[@id=\"questionText\"]"));
            questionText.SendKeys("test question");
            IWebElement addbutton = driver.FindElement(By.XPath("//*[@id=\"addButton\"]"));
            addbutton.Click();
            System.Threading.Thread.Sleep(2000);
            System.Collections.ObjectModel.ReadOnlyCollection<IWebElement> questionButtons = driver.FindElements(By.Name("questionButton"));
            int count = questionButtons.Count;
            count--;
            IWebElement addedQuestion = driver.FindElement(By.XPath("//*[@id=\"questionButton "+ count+"\"]"));
            var addques = addedQuestion.Text;
            
            Assert.AreEqual("test question", addques);
        }

        [TearDown]
        public void closeBrowser()
        {
            driver.Close();
        }
    }
}

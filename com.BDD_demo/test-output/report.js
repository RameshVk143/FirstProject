$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "JBk offline website",
  "description": "",
  "id": "jbk-offline-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"\u003cuname\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "jbk-offline-website;login-test;",
  "rows": [
    {
      "cells": [
        "uname",
        "pass"
      ],
      "line": 11,
      "id": "jbk-offline-website;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 12,
      "id": "jbk-offline-website;login-test;;2"
    },
    {
      "cells": [
        "Ramesh",
        "asdfg"
      ],
      "line": 13,
      "id": "jbk-offline-website;login-test;;3"
    },
    {
      "cells": [
        "Pinky",
        "qwert123"
      ],
      "line": 14,
      "id": "jbk-offline-website;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.user_should_on_login_page()"
});
formatter.result({
  "duration": 22936989400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 13
    },
    {
      "val": "123456",
      "offset": 35
    }
  ],
  "location": "stepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 384434500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_click_on_login_button()"
});
formatter.result({
  "duration": 588700700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 19279800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Ramesh\" and \"asdfg\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.user_should_on_login_page()"
});
formatter.result({
  "duration": 50279220400,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d94.0.4606.61)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-RHI4MKV\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 94.0.4606.61, chrome: {chromedriverVersion: 94.0.4606.61 (418b78f5838ed..., userDataDir: C:\\Users\\Admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56703}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c213be1aa34011c897b0570e7a2d2b08\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:276)\r\n\tat com.stepdefs.stepdefs.user_should_on_login_page(stepdefs.java:20)\r\n\tat ✽.Given user should on login page(login.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ramesh",
      "offset": 13
    },
    {
      "val": "asdfg",
      "offset": 26
    }
  ],
  "location": "stepdefs.user_enters_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefs.user_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepdefs.user_will_be_on_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "login Test",
  "description": "",
  "id": "jbk-offline-website;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user should on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters \"Pinky\" and \"qwert123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user will be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.user_should_on_login_page()"
});
formatter.result({
  "duration": 5065594700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pinky",
      "offset": 13
    },
    {
      "val": "qwert123",
      "offset": 25
    }
  ],
  "location": "stepdefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 277262100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_click_on_login_button()"
});
formatter.result({
  "duration": 96612601,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_will_be_on_home_page()"
});
formatter.result({
  "duration": 8177399,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdefs.stepdefs.user_will_be_on_home_page(stepdefs.java:38)\r\n\tat ✽.Then user will be on home page(login.feature:8)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "JBK Logo Test",
  "description": "",
  "id": "jbk-offline-website;jbk-logo-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user should on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user should see a logo",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.user_should_on_login_page()"
});
formatter.result({
  "duration": 5105156600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefs.user_should_see_a_logo()"
});
formatter.result({
  "duration": 286739101,
  "status": "passed"
});
});
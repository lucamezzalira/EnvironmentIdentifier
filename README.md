# EnvironmentIdentifier
utility library for retrieving in which browser and device your code is running

#Example
```
var envIdentifier = new EnvironmentIdentifier();

var analysis = "isWindows: " + envIdentifier.isWindows() + "<br/>"
                    + "isWindowsPhone: " + envIdentifier.isWindowsPhone() + "<br/>"
                    + "isMac: " + envIdentifier.isMac() + "<br/>"
                    + "isAndroid: " + envIdentifier.isAndroid() + "<br/>"
                    + "isIOS: " + envIdentifier.isIOS() + "<br/>"
                    + "isTablet: " + envIdentifier.isTablet() + "<br/>"
                    + "isSmartphone: " + envIdentifier.isSmartphone() + "<br/>"
                    + "isSafari: " + envIdentifier.isSafariForIOS() + "<br/>"
                    + "isInternetExplorer: " + envIdentifier.isInternetExplorerMobile() + "<br/>"
                    + "isStockBrowser: " + envIdentifier.isStockBrowser() + "<br/>"
                    + "isChromeForAndroid: " + envIdentifier.isChromeForAndroid() + "<br/>"
                    + "isChromeForIOS: " + envIdentifier.isChromeForIOS() + "<br/>";
                    
body.innerHTML = analysis;
```

For a complete example please check the _example folder_

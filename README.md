# EnvironmentIdentifier
utility library for retrieving in which browser and device your javascript application is running

# APIs
EnvironmentIdentifier has the following APIs, all the parameters _return a boolean value_:

**Browsers related**

_isChromeForAndroid()_  
_isChromeForIOS()_  
_isSafariForIOS()_  
_isStockBrowser()_  
_isInternetExplorerMobile()_

**Devices related**  

_isTablet()_  
_isSmartphone()_  
_isIOS()_  
_isAndroid()_  
_isMac()_  
_isWindows()_    
_isWindowsPhone()_    

# Example
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

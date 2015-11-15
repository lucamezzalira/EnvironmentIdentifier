import BrowserRegEx from "./BrowserRegEx";

export class BrowserIdentifier{
  constructor(){
    this.userAgent = window.navigator.userAgent.toLowerCase();
  }

  isChromeForAndroid(){
    return this._checkWithRegEx(BrowserRegEx.CHROME_ANDROID, this.userAgent);
  }

  isChromeForIOS(){
    return this._checkWithRegEx(BrowserRegEx.CHROME_IOS, this.userAgent);
  }

  isSafariForIOS(){
    return this._checkWithRegEx(BrowserRegEx.SAFARI, this.userAgent);
  }

  isStockBrowser(){
    return this._checkWithRegEx(BrowserRegEx.STOCK_BROWSER, this.userAgent);
  }

  isInternetExplorerMobile(){
    return this._checkWithRegEx(BrowserRegEx.IE, this.userAgent);
  }

  isTablet(){
    return this._checkWithRegEx(BrowserRegEx.TABLET, this.userAgent);
  }

  isSmartphone(){
    return this._checkWithRegEx(BrowserRegEx.SMARTPHONE, this.userAgent);
  }

  isIOS(){
    return this._checkWithRegEx(BrowserRegEx.IOS, this.userAgent);
  }

  isAndroid(){
    return this._checkWithRegEx(BrowserRegEx.ANDROID, this.userAgent);
  }

  isMac(){
    return this._checkWithRegEx(BrowserRegEx.MAC, this.userAgent);
  }

  isWindows(){
    return this._checkWithRegEx(BrowserRegEx.WINDOWS, this.userAgent);
  }

  isWindowsPhone(){
    return this._checkWithRegEx(BrowserRegEx.WINDOWS_PHONE, this.userAgent);
  }

  _checkWithRegEx(regex, str){
    console.log(str);
    var re = new RegExp(regex, "i");
    return re.test(str);
  }
}

if(window)
  window.BrowserIdentifier = BrowserIdentifier;

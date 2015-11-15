import EnvironmentRegEx from "./EnvironmentRegEx";

export class EnvironmentIdentifier{
  constructor(){
    this.userAgent = window.navigator.userAgent.toLowerCase();
  }

  isChromeForAndroid(){
    return this._checkWithRegEx(EnvironmentRegEx.CHROME_ANDROID, this.userAgent);
  }

  isChromeForIOS(){
    return this._checkWithRegEx(EnvironmentRegEx.CHROME_IOS, this.userAgent);
  }

  isSafariForIOS(){
    return this._checkWithRegEx(EnvironmentRegEx.SAFARI, this.userAgent);
  }

  isStockBrowser(){
    return this._checkWithRegEx(EnvironmentRegEx.STOCK_BROWSER, this.userAgent);
  }

  isInternetExplorerMobile(){
    return this._checkWithRegEx(EnvironmentRegEx.IE, this.userAgent);
  }

  isTablet(){
    return this._checkWithRegEx(EnvironmentRegEx.TABLET, this.userAgent);
  }

  isSmartphone(){
    return this._checkWithRegEx(EnvironmentRegEx.SMARTPHONE, this.userAgent);
  }

  isIOS(){
    return this._checkWithRegEx(EnvironmentRegEx.IOS, this.userAgent);
  }

  isAndroid(){
    return this._checkWithRegEx(EnvironmentRegEx.ANDROID, this.userAgent);
  }

  isMac(){
    return this._checkWithRegEx(EnvironmentRegEx.MAC, this.userAgent);
  }

  isWindows(){
    return this._checkWithRegEx(EnvironmentRegEx.WINDOWS, this.userAgent);
  }

  isWindowsPhone(){
    return this._checkWithRegEx(EnvironmentRegEx.WINDOWS_PHONE, this.userAgent);
  }

  _checkWithRegEx(regex, str){
    var re = new RegExp(regex, "i");
    return re.test(str);
  }
}

if(window)
  window.EnvironmentIdentifier = EnvironmentIdentifier;

export default class BrowserRegEx {
  static get CHROME_IOS(){
    return "(?=.*chrios)(?=.*iphone)(?=.*ipad).*";
  }

  static get CHROME_ANDROID(){
    return "(?=.*chrome|chromium)(?=.*android)";
  }

  static get SAFARI(){
    return "^((?!opera|firefox|chrome|edge|msie).)*$";
  }

  static get IE(){
    return "msie|trident";
  }

  static get STOCK_BROWSER(){
    return "linux-u|linux; u;";
  }

  static get TABLET(){
    return "ipad|(?=.*android)(?!mobile)";
  }

  static get IOS(){
    return "ipad|iphone|ipod";
  }

  static get ANDROID(){
    return "android";
  }

  static get SMARTPHONE(){
    return "iphone|(?=.*mobile)(?=.*safari).*";
  }

  static get MAC(){
    return "^((?!iphone|ipad|win|linux).)*$";
  }

  static get WINDOWS(){
    return "^((?!iphone|ipad|mac|linux).)*$";
  }

  static get WINDOWS_PHONE(){
    return "(?=.*windows)(?=.*(iemobile|edge))(?=.*phone).*";
  }
}

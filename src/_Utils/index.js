const Utils = {
   generateCookies:(cookieName) => {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000*60*60*6;
    now.setTime(expireTime);
    document.cookie = `${cookieName}=ok;expires='${now.toGMTString()}';path=/`;
  },
  getCookie:(cname)=>{
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i+=1) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
}

export default Utils


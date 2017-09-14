
import Cookies from 'universal-cookie'
import uuidv4 from 'uuid/v4';
const cookies = new Cookies();

class UserData {
  constructor() {
    const setCookie = (key, value) => {
      var expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 2);
      cookies.set(key, value, { path: '/', expires: expireDate });
      return value;
    }

    const cookieMaker = name => {
      return {
        get: () => cookies.get(name),
        set: (value) => setCookie(name, value),
        remove: () => cookies.remove(name)
      }
    }

    this.username = cookieMaker("username");
    this.user = cookieMaker("user");
    this.guestid = cookieMaker("guestid");
  }

  set({ loginType, id, name }) {
    if (loginType === "guest") {
      // lets preserve the guest id if we have one so you can't have a million "users"
      id = this.guestid.get() || uuidv4();
      this.guestid.set(id);
      name = "Guest";
    }

    this.user.set(`${loginType}|${id}`);
    this.username.set(name);

    return {
      id,
      name
    }
  }

  get() {
    let user = this.user.get();
    return {
      id: user.split("|")[1],
      loginType: user.split("|")[0],
      name: this.username.get()
    }
  }

  delete() {
    this.user.remove();
    this.username.remove();
  }
}

export const userData = new UserData();
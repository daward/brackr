import uuidv4 from 'uuid/v4';
import { cookieMaker } from './cookiemaker'

class UserData {
  constructor() {
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
    if (user) {
      return {
        id: user,
        loginType: user.split("|")[0],
        name: this.username.get()
      }
    } else {
      return {
        id: undefined,
        name: ""
      }
    }
  }

  delete() {
    this.user.remove();
    this.username.remove();
  }

  isLoggedIn() {
    return this.user.get();
  }
}

export const userData = new UserData();
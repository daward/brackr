import Cookies from 'universal-cookie'
const cookies = new Cookies();

const setCookie = (key, value) => {
  var expireDate = new Date();
  expireDate.setDate(expireDate.getDate() + 2);
  cookies.set(key, value, { path: '/', expires: expireDate });
  return value;
}

export const cookieMaker = name => {
  return {
    get: () => cookies.get(name),
    set: value => setCookie(name, value),
    remove: () => cookies.remove(name, { path: '/' })
  }
}
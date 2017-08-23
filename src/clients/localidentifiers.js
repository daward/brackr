import Cookies from 'universal-cookie';
const cookies = new Cookies();

class LocalIdentifiers {
  constructor(name) {
    this.name = name;
  }

  getAll() {
    return cookies.get(this.name) || [];
  }

  set(id) {
    let recent = cookies.get(this.name) || [];
    recent.push(id);
    var someDate = new Date();
    someDate.setDate(someDate.getDate() + 14);
    cookies.set(this.name, JSON.stringify(recent), { path: '/', expires: someDate });
  }
}

export const bracketData = new LocalIdentifiers("brackets");
export const contestantGroupData = new LocalIdentifiers("contestantGroups");
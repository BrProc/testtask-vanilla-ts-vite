export class Favorites {
  private suffix: string;

  constructor(suffix: string) {
    this.suffix = suffix;
  }

  private getParamId(id: number) {
    return id + this.suffix;
  }

  get(id: number) {
    if (localStorage.getItem(this.getParamId(id))) {
      return true;
    } else return false;
  }

  add(id: number) {
    localStorage.setItem(this.getParamId(id), "1");
  }

  remove(id: number) {
    localStorage.removeItem(this.getParamId(id));
  }
}

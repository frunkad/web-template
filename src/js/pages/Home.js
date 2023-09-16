import Background from "../components/Background";

export default class Home {
  #background;
  constructor() {
    this.setScene();
  }

  setScene = () => {
    const backgroundEl = document.querySelector("canvas#background");
    this.#background = new Background({ el: backgroundEl });
  };
}
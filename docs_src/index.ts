import { OrbitControls } from "../src";

const el = document.querySelector("#element");
const ctrl = new OrbitControls(el as HTMLElement);
ctrl.start();

window.onbeforeunload = () => {
    ctrl.stop();
};

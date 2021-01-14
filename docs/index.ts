import { OrbitControls } from "../src";

const el = document.querySelector("#element");
const ctrl = new OrbitControls(el as HTMLElement);

const loop = () => {
    requestAnimationFrame(loop);
    ctrl.update();
};
loop();

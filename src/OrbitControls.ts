import { Vec3 } from "./Vec3";
export class OrbitControls {
    private touches = {
        ONE: "ROTATE",
        TWO: "DOLLY_PAN",
    };

    private scale = Vec3.one(1);
    private rotation = Vec3.one(0);

    constructor(private element: HTMLElement) {}

    dispose() {}

    onPointerDown = (e: PointerEvent) => {
        e.preventDefault();
    };

    onPointerUp = (e: PointerEvent) => {
        e.preventDefault();
    };

    onPointerMove = (e: PointerEvent) => {
        e.preventDefault();

        this.update();
    };

    update() {
        this.element.style.transform = `scale3d(${this.scale.x}, ${this.scale.y}, ${this.scale.z}) rotate3d(${this.rotation.x}, ${this.rotation.y}, ${this.rotation.z})`;
    }
}

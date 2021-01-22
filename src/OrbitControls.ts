import { Vec3 } from "./Vec3";
export class OrbitControls {
    private touches = {
        ONE: "ROTATE",
        TWO: "DOLLY_PAN",
    };

    private scale = Vec3.one(1);
    private rotation = Vec3.one(0);
    private isDragging = false;
    private dragStartPos = Vec3.one(0);
    private rotationOffset = Vec3.one(0);

    constructor(private element: HTMLElement) {}

    start() {
        this.element.style.transformOrigin = "50% 50%";

        window.addEventListener("pointerdown", this.onPointerDown);
        window.addEventListener("pointermove", this.onPointerMove);
        window.addEventListener("pointerup", this.onPointerUp);
    }

    stop() {
        window.removeEventListener("pointerdown", this.onPointerDown);
        window.removeEventListener("pointermove", this.onPointerMove);
        window.removeEventListener("pointerup", this.onPointerUp);
    }

    onPointerDown = (e: PointerEvent) => {
        if (!this.element.contains(e.target as HTMLElement)) {
            return;
        }

        e.preventDefault();
        this.isDragging = true;
        this.dragStartPos.x = e.clientX;
        this.dragStartPos.y = e.clientY;
    };

    onPointerMove = (e: PointerEvent) => {
        if (!this.isDragging) {
            return;
        }

        e.preventDefault();

        const x = e.clientX;
        const y = e.clientY;

        this.rotation.x = -(y - this.dragStartPos.y);
        this.rotation.y = x - this.dragStartPos.x;

        this.update();
    };

    onPointerUp = (e: PointerEvent) => {
        if (!this.isDragging) {
            return;
        }

        e.preventDefault();
        this.isDragging = false;

        this.rotationOffset = this.rotation.add(this.rotationOffset);
        this.rotation = Vec3.one(0);
    };

    update() {
        this.element.style.transform = `
            scale3d(${this.scale.x}, ${this.scale.y}, ${this.scale.z})
            rotateX(${this.rotation.x + this.rotationOffset.x}deg)
            rotateY(${this.rotation.y + this.rotationOffset.y}deg)
        `;
    }
}

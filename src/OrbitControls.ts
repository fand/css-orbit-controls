import { Vec3 } from "./Vec3";
export class OrbitControls {
    private touches = {
        ONE: "ROTATE",
        TWO: "DOLLY_PAN",
    };

    private rotation = Vec3.one(0);
    private scale = 1;
    private isDragging = false;
    private dragStartPos = Vec3.one(0);
    private rotationOffset = Vec3.one(0);

    private button = 0;

    constructor(private element: HTMLElement) {}

    start() {
        this.element.style.transformOrigin = "50% 50%";

        window.addEventListener("pointerdown", this.onPointerDown);
        window.addEventListener("pointermove", this.onPointerMove);
        window.addEventListener("pointerup", this.onPointerUp);
        this.element.addEventListener("wheel", this.onWheel);
    }

    stop() {
        window.removeEventListener("pointerdown", this.onPointerDown);
        window.removeEventListener("pointermove", this.onPointerMove);
        window.removeEventListener("pointerup", this.onPointerUp);
        this.element.removeEventListener("wheel", this.onWheel);
    }

    onPointerDown = (e: PointerEvent) => {
        if (!this.element.contains(e.target as HTMLElement)) {
            return;
        }

        e.preventDefault();
        this.isDragging = true;
        this.dragStartPos.x = e.clientX;
        this.dragStartPos.y = e.clientY;
        this.button = e.button;
    };

    onPointerMove = (e: PointerEvent) => {
        if (!this.isDragging) {
            return;
        }

        e.preventDefault();

        const x = e.clientX;
        const y = e.clientY;

        console.log(this.button);

        if (this.button === 0) {
            // Left button
            this.rotation.x = -(y - this.dragStartPos.y);
            this.rotation.y = x - this.dragStartPos.x;
        } else if (this.button === 2) {
            // Right button
        }

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

    onWheel = (e: WheelEvent) => {
        e.preventDefault();
        this.scale -= e.deltaY / 100;
        this.update();
    };

    update() {
        const s = this.scale;
        this.element.style.transform = `
            scale3d(${s}, ${s}, ${s})
            rotateX(${this.rotation.x + this.rotationOffset.x}deg)
            rotateY(${this.rotation.y + this.rotationOffset.y}deg)
        `;
    }
}

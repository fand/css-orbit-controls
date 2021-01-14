export class Vec3 {
    constructor(public x: number, public y: number, public z: number) {}

    static one(x: number): Vec3 {
        return new Vec3(x, x, x);
    }

    set(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v: Vec3): Vec3 {
        return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    sub(v: Vec3): Vec3 {
        return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    mul(v: Vec3): Vec3 {
        return new Vec3(this.x * v.x, this.y * v.y, this.z * v.z);
    }

    div(v: Vec3): Vec3 {
        return new Vec3(this.x / v.x, this.y / v.y, this.z / v.z);
    }

    scale(k: number): Vec3 {
        return new Vec3(this.x * k, this.y * k, this.z * k);
    }
}

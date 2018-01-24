import {
    sum,
    upper
} from "../sum";

describe("Sample", () => {
    it("should sum", () => {
        expect(sum(1, 2, 3)).toBe(6);
    });

    it("should uppercase", () => {
        expect(upper("maiquyen")).toBe("MAIQUYEN");
    });
});
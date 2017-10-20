import { getDuplicated } from "../duplicate"

const arr = [1, 1, 1, 3, 2, 3, 2, 4, 1, 2]

describe("Duplicate", () => {
    it("Should return array of duplicated numbers", () => {
        // expect(getDuplicated(arr)).toEqual([3, 2, 1])
        expect(getDuplicated(arr)).toMatchSnapshot()
    })
})
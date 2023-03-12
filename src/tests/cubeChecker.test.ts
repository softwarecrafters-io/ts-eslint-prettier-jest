import { cubeChecker} from "../core/cubeChecker";

describe("The cube checker", () => {
    it("check if the cuboid have equal side", () => {
        expect(cubeChecker(1,1)).toBeTruthy()
    })

    it("check if the cuboid not have equal side", () => {
        expect(cubeChecker(0,35)).toBeFalsy()
    })

    it("check invalid numbers too", () => {
        expect(cubeChecker(0,0)).toBeFalsy()
    })
})
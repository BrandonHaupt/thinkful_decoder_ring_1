// Write your tests here!
const expect = require("chai").expect;
const caesarModule = require("../src/caesar.js");

describe("caesarModule", () => {
    it("should return an encrypted string", () => {
        const firstResult = caesarModule("hello world!", 3);
        const secondResult = caesarModule("should you attack now?", 5);
        const thirdResult = caesarModule("testing", 4);
        const fourthResult = caesarModule("a!", -4);
        
        expect(firstResult).to.equal("khoor zruog!");
        expect(secondResult).to.equal("xmtzqi dtz fyyfhp stb?");
        expect(thirdResult).to.equal("xiwxmrk");
        expect(fourthResult).to.equal("w!");
    });

    it("should return a decoded string", () =>{
        const firstResult = caesarModule("khoor zruog!", 3, false);
        const secondResult = caesarModule("xmtzqi dtz fyyfhp stb?", 5, false);
        const thirdResult = caesarModule("xiwxmrk", 4, false);
        const fourthResult = caesarModule("w!", -4, false);

        expect(firstResult).to.equal("hello world!");
        expect(secondResult).to.equal("should you attack now?");
        expect(thirdResult).to.equal("testing");
        expect(fourthResult).to.equal("a!");
    })
});
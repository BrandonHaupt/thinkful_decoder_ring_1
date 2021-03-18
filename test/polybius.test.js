// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius", () => {
    it("should return an encrypted string", () => {
        const firstResult = polybius("thinkful");
        const secondResult = polybius("should you attack now");
        const thirdResult = polybius("testing");
        
        expect(firstResult).to.equal("4432423352125413");
        expect(secondResult).to.equal("343243541341 454354 114444113152 334325");
        expect(thirdResult).to.equal("44513444423322");
    });

    it("should return a decoded string", () =>{
        
        const secondResult = polybius("343243541341 454354 114444113152 334325", false);
        const thirdResult = polybius("4432423352125413", false);

        
        expect(secondResult).to.equal("should you attack now");
        expect(thirdResult).to.equal("thi/jnkful");
    })
});
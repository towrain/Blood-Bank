describe("Question Nine", function() {
    describe("DiseaseCheck.set function", function() {
        var diseaseCheck = new DiseaseCheck();
        it("should allow changing of the comments property", function() {
            expect(typeof diseaseCheck.set).toBe('function');
            diseaseCheck.set("doniation");
            expect(diseaseCheck.comments).toBe('doniation');
        });
    });
});
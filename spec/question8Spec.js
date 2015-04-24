describe("Question Eight", function() {
    describe("DiseaseCheck", function() {
        var diseaseCheck = new DiseaseCheck();
        it("should have an date property", function() {
           expect(diseaseCheck.hasOwnProperty('date')).toBeTruthy();
        });

        it("should have a comments property", function() {
            expect(diseaseCheck.hasOwnProperty('comments')).toBeTruthy();
        });
    });
});
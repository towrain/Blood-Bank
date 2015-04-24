describe("Question Three", function() {
    describe("hospital.allMyDonors function", function() {
        var hospital;
        beforeEach(function() {
            hospital = new Hospital();	
        });
        
        it("should return a string", function() {
            expect(typeof hospital.displayDonor()).toBe('string');
        }); 
        
        it("should return different data as Donor are added", function () {
            expect(hospital.displayDonor()).toBe('');
            hospital.addDonor(19348855 , 'Barack' , 'Jiabao' , 'A+');
			
            expect(hospital.displayDonor()).toBe('Jiabao,Barack.[A+]\n');
            hospital.addDonor( 34551873 , 'Phil' , 'Key' , 'AB-');
			
            expect(hospital.displayDonor()).toBe('Jiabao,Barack.[A+]\nKey,Phil.[AB-]\n');
            hospital.addDonor( 98343532 , 'John' , 'Goff' , 'O+');
			
            expect(hospital.displayDonor()).toBe('Jiabao,Barack.[A+]\nKey,Phil.[AB-]\nGoff,John.[O+]\n');
           
        });

    });
  
});
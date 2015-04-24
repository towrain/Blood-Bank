//check later


describe("Question Seven ????", function() {
    describe("Hospital.displayLargeDonations function", function() {
        var hospital;
        beforeEach(function() {
            hospital = new Hospital();	
        });
		
        it("should return a string", function() {
            expect(typeof hospital.displayLargeDonations()).toBe('string');
        }); 	
 
        it("should correctly report name of client to order", function () {
            expect(hospital.displayLargeDonations()).toBe('');
             hospital.addDonor(19348855 , 'Barack' , 'Jiabao' , 'A+' );
			hospital.addDonation( 19348855, '27 Jan 2009', 600);
			hospital.addDonation( 19348855, '18 Oct 2009', 1000);
			
			
			expect(hospital.displayLargeDonations()).toBe('Jiabao,Barack.[A+]\n27 Jan 2009=600\n18 Oct 2009=1000\n');
			//expect(hospital.displayLargeDonations()).toBe('Jiabao,Barack.[A+]\n27 Jan 2009=600\n18 Oct 2009=1000\n');
            //expect(hospital.displayLargeDonations()).toBe('Jiabao,Barack.[A+]\n27 Jan 2009=600\nJiabao,Barack.[A+]\n18 Oct 2009=1000\n');
            hospital.addDonor(  34551873 , 'Phil' , 'Key' , 'AB-' );
			hospital.addDonation( 34551873, '19 Oct 2009', 750);
			
            expect(hospital.displayLargeDonations()).toBe('Jiabao,Barack.[A+]\n27 Jan 2009=600\n18 Oct 2009=1000\nKey,Phil.[AB-]\n19 Oct 2009=750\n');
            hospital.addDonor( 98343532 , 'John' , 'Goff' , 'O+' );
			hospital.addDonation( 98343532, '17 Jan 2006', 600);
			
            expect(hospital.displayLargeDonations()).toBe('Jiabao,Barack.[A+]\n27 Jan 2009=600\n18 Oct 2009=1000\nKey,Phil.[AB-]\n19 Oct 2009=750\nGoff,John.[O+]\n17 Jan 2006=600\n');
            
        });
    }); 
});
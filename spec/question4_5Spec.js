describe("Question Four and Question SEVEN", function() {
    describe("write hospital.addDonation function to add SEVEN Clients information", function() {
		var hospital;
		beforeEach(function(){
		hospital = new Hospital();
			hospital.addDonation( 98343532, '13 Nov 2009', 500 );
			hospital.addDonation( 98343532, '17 Jan 2006', 600 );
			hospital.addDonation( 98343532, '22 Feb 2007', 400);
			hospital.addDonation( 19348855, '18 Oct 2009', 1000);
			hospital.addDonation( 19348855, '27 Jan 2009', 600);
			hospital.addDonation( 19348855, '26 Feb 2008', 200);
			hospital.addDonation( 34551873, '19 Oct 2009', 750);
			});
			
        it("should have 5 Clients", function() {
            expect(hospital.allMyClient.length).toBe(7);
        });
          
       it("should correctly set Client details", function() {
            var Client;
            Client = hospital.allMyClient[0];
            expect(Client.DonorID).toBe(98343532);
            expect(Client.Date).toBe('13 Nov 2009');
			expect(Client.Amount).toBe(500);
           
            Client = hospital.allMyClient[1];
            expect(Client.DonorID).toBe(98343532);
            expect(Client.Date).toBe('17 Jan 2006');
			expect(Client.Amount).toBe(600);
			
			           
            Client = hospital.allMyClient[2];
            expect(Client.DonorID).toBe(98343532);
            expect(Client.Date).toBe('22 Feb 2007');
			expect(Client.Amount).toBe(400);
			
			           
            Client = hospital.allMyClient[3];
            expect(Client.DonorID).toBe(19348855);
            expect(Client.Date).toBe('18 Oct 2009');
			expect(Client.Amount).toBe(1000);
			
			           
            Client = hospital.allMyClient[4];
            expect(Client.DonorID).toBe(19348855);
            expect(Client.Date).toBe('27 Jan 2009');
			expect(Client.Amount).toBe(600);
			
			           
            Client = hospital.allMyClient[5];
            expect(Client.DonorID).toBe(19348855);
            expect(Client.Date).toBe('26 Feb 2008');
			expect(Client.Amount).toBe(200);
			
			           
            Client = hospital.allMyClient[6];
            expect(Client.DonorID).toBe(34551873);
            expect(Client.Date).toBe('19 Oct 2009');
			expect(Client.Amount).toBe(750);

			
        });
    }); 
});
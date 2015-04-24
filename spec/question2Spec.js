describe("Question Two", function() {
    describe("add Donors", function() {
		var hospital;
		beforeEach(function(){
		hospital = new Hospital();
			hospital.addDonor( 98343532 , 'John' , 'Goff' , 'O+' );
			hospital.addDonor( 19348855 , 'Barack' , 'Jiabao' , 'A+');
			hospital.addDonor( 34551873 , 'Phil' , 'Key' , 'AB-');	
		});
		
        it("should have added 3 Donors", function() {
        expect(hospital.allMyDonors.length).toBe(3);                                                     
        }); 
		

       it("should have correctly set details for Donor", function() {
          var Donor;
          Donor = hospital.allMyDonors[0];
		  expect(Donor.id).toBe(98343532);
		  expect(Donor.firstName).toBe('John');
		  expect(Donor.lastName).toBe('Goff');
          expect(Donor.BloodType).toBe('O+');
  

          Donor = hospital.allMyDonors[1];
          expect(Donor.id).toBe(19348855);
		  expect(Donor.firstName).toBe('Barack');
		  expect(Donor.lastName).toBe('Jiabao');
          expect(Donor.BloodType).toBe('A+');

          
          Donor = hospital.allMyDonors[2];
          expect(Donor.id).toBe(34551873);
          expect(Donor.BloodType).toBe('AB-');

        });
		
    });
	});
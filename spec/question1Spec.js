describe("Question One", function() {
    describe("Draw a class diagram", function() {
    });
    
    describe("Hospital with Donor TODO", function() {
  var hospital;

  beforeEach(function() {
    hospital = new Hospital();
  });
 
 it("should have an allMyDonors property", function() {
    expect(hospital.hasOwnProperty('allMyDonors')).toBeTruthy();
  });
  
  describe("the allMyDonors property", function () {
	  it("should reference an array", function() {
		expect(Array.isArray(hospital.allMyDonors)).toBeTruthy();
	  });
  });

  it("should have an addDonor function", function() {
    expect(typeof hospital.addDonor).toBe('function');
  });
  

});

describe("Hospital with Donor TODO", function() {
  var hospital;

  beforeEach(function() {
    hospital = new Hospital();
  });
 
 it("should have an allMyDonors property", function() {
    expect(hospital.hasOwnProperty('allMyDonors')).toBeTruthy();
  });
  
  describe("the allMyDonors property", function () {
	  it("should reference an array", function() {
		expect(Array.isArray(hospital.allMyDonors)).toBeTruthy();
	  });
  });

  it("should have an addDonor function", function() {
    expect(typeof hospital.addDonor).toBe('function');
  });
  

});

describe("Client", function() {

   var client = new Client();

   it("should have an DonorID property", function() {
    expect(client.hasOwnProperty('DonorID')).toBeTruthy();
  });
  
  it("should have a Date property", function() {
    expect(client.hasOwnProperty('Date')).toBeTruthy();
  });
 
  it("should have a Amount property", function() {
    expect(client.hasOwnProperty('Amount')).toBeTruthy();
  });
     
  it("should have a toString function", function() {
    expect(typeof client.toString).toBe('function');
  });
  
  describe("toString function", function () {
	  it("should return a string", function() {
		expect(typeof client.toString()).toBe('string');
	  });
	  it("should take 0 parameters", function() {
		expect(client.toString.length).toBe(0);
	  });
  });

  it("should have a isLarge function", function() {
    expect(typeof client.isLarge).toBe('function');
  });
});



describe("DiseaseCheck", function() {
  var diseaseCheck = new DiseaseCheck();

   it("should have a date property", function() {
    expect(diseaseCheck.hasOwnProperty('date')).toBeTruthy();
  });
  
  it("should have a comments property", function() {
    expect(diseaseCheck.hasOwnProperty('comments')).toBeTruthy();
  });
});


describe("Donor  PROVIDED - DO NOT BREAK", function() {
  var brand = new Donor();

   it("should have an ID property", function() {
    expect(brand.hasOwnProperty('id')).toBeTruthy();
  });
  
  it("should have a firstName property", function() {
    expect(brand.hasOwnProperty('firstName')).toBeTruthy();
  });
 
  it("should have a lastName property", function() {
    expect(brand.hasOwnProperty('lastName')).toBeTruthy();
  });
  
  it("should have a BloodType property", function() {
    expect(brand.hasOwnProperty('BloodType')).toBeTruthy();
  });



  it("should have a toString function", function() {
    expect(typeof brand.toString).toBe('function');
  });
  
  describe ("toString function", function () {
	  it("should return a string", function() {
		expect(typeof brand.toString()).toBe('string');
	  });
	  it("should take 0 parameters", function() {
		expect(brand.toString.length).toBe(0);
	  });
  });
  
});
});
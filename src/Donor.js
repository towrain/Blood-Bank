var  Donor = function (ID, firstName, lastName, BloodType) {
    //this.allMyPatients = [];
    'use strict';
    this.id = ID;
    this.firstName = firstName;
    this.lastName = lastName;
    this.BloodType = BloodType;
};

Donor.prototype.toString = function () {
    'use strict';
    return this.lastName + ","  + this.firstName + "." +  "[" + this.BloodType + "]";
};


/*Donor.prototype.addPatient() = function () {
    //Lokk
    var newPatient = new Patient(ID, lastName, firstName, feeOwing, DonorId);
    this.allMyPatients.push( newPatient );

};*/

// right ??
/*Donor.prototype.displayBillablePatients = function () {
    var thePatient;
    var out = "";
    for ( thePatient of this.allMyPatients ) {  
        out += thePatient.toString() + '\n';
    }
    return out;  
};*/
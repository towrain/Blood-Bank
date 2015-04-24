var  Hospital = function () {
    'use strict';
    this.allMyClient = [];
    this.allMyDonors = [];
};
//Q2
Hospital.prototype.addDonor = function (ID, firstName, lastName, BloodType) {
    "use strict";
    var newDonor = new Donor(ID, firstName, lastName, BloodType);
    this.allMyDonors.push(newDonor);
};

// may be can leave
//Q3
Hospital.prototype.displayDonor = function () {
    "use strict";
    var out, theDonor;
    out = '';
    for (theDonor of this.allMyDonors) {
        out += theDonor.toString() + '\n';
    }
    return out;
};

// could be ??
Hospital.prototype.addDonation = function (DonorID, Date, Amount) {
    //Lokk
    "use strict";
    var newClient = new Client(DonorID, Date, Amount);
    this.allMyClient.push(newClient);

};

//Q7 check later for pass the jasmine
Hospital.prototype.displayLargeDonations = function () {
    'use strict';
    var theClient, theDonor, out = '';
    for (theDonor of this.allMyDonors) {
        out +=  theDonor.toString() + '\n';
        for (theClient of this.allMyClient) {
            if (theClient.isLarge() && theDonor.id === theClient.DonorID) {
                out +=  theClient.toString() + '\n';
            }
        }
    }
    return out;
};

/* not useful ??
Hospital.prototype.getProductsToOrder = function () {
    "use strict";
    var out, aProduct;
    out = '';
    for ( aProduct of this.allMyProducts ) {
        if (aProduct.moreNeeded()) {
            out += aProduct.toString() + '\n';
    }
}
    return out;
};
*/

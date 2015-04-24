var Client = function (DonorID, Date, Amount) {
    'use strict';
    this.DonorID = DonorID;
    this.Date = Date;
    this.Amount = Amount;
};

Client.prototype.isLarge = function () {
    'use strict';
    /*if (this.Amount >= 600) {
        return true;
    }
    else return false;
    */
    return this.Amount >= 600;
};

// look
/*Client.prototype.displayBillableClients = function () {
    return this.doctorId + " - " + this.name;  
};*/

Client.prototype.toString = function () {
    'use strict';
    return this.Date + "=" + this.Amount;
};
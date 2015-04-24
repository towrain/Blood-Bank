var  DiseaseCheck  = function (date, comments) {
    'use strict';
    this.date = date;
    this.comments = comments;
};

DiseaseCheck.prototype.set = function (newComments) {
    'use strict';
    this.comments = newComments;
};
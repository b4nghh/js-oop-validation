console.log("Hello from validator.js");

var validateAll = function(elemId, messageId, messageErr) {
	 this.elemId = elemId;
	 this.messageId  = messageId
	 this.messageErr = messageErr;
}

validateAll.prototype.checkEmail = function() {
	var regexpr = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
	var emailResult = regexpr.test(this.elemId.value);
	if(!emailResult){
		this.messageId.innerHTML = this.messageErr;
		return false;
	}
	else {
		this.messageId.innerHTML = "";
		return true;
	}
	
};

validateAll.prototype.checkEmpty = function() {
	
	if (this.elemId.value == null || this.elemId.value == "") {
		this.messageId.innerHTML = this.messageErr;
		return true;
	}
	else {
		this.messageId.innerHTML = "";
		return false;
	}	
};

validateAll.prototype.isNumber = function() {
	if (isNaN(this.elemId.value)) {
		this.messageId.innerHTML = this.messageErr;
		return false;
	}
	else {
		this.messageId.innerHTML = "";
		return true;
	}
};

validateAll.prototype.isDate = function() {
	var comp = this.elemId.value.split('/');
	var m = parseInt(comp[0], 10);
	var d = parseInt(comp[1], 10);
	var y = parseInt(comp[2], 10);
	var date = new Date(y,m-1,d);
	if (date.getFullYear() == y && date.getMonth() + 1 == m && date.getDate() == d) {
		this.messageId.innerHTML = "";
		return true;		
	}
	else {
		this.messageId.innerHTML = this.messageErr;
		return false;	
	}
};

validateAll.prototype.minLen = function(n) {
	this.n = n;
	if (this.elemId.value.length < this.n) {
		this.messageId.innerHTML = this.messageErr;
		return false;
	} else{
		this.messageId.innerHTML = "";
		return true;
	}
};

validateAll.prototype.maxLen = function(n) {
	this.n = n;
	if (this.elemId.value.length > this.n) {
		this.messageId.innerHTML = this.messageErr;
		return false;
	} else{
		this.messageId.innerHTML = "";
		return true;
	}
};

validateAll.prototype.minToMax = function(m, n) {
	this.min = m;
	this.max = n;
	if (this.elemId.value.length >= this.min && this.elemId.value.length <= this.max) {
		this.messageId.innerHTML = "";
		return true;
	} else{
		this.messageId.innerHTML = this.messageErr;
		return false;
	}
};
console.log("Git Demo");

module.exports = {

	add: function(val1,val2){
		checkArguments(val1,val2);
		return val1 + val2;
	},
	subtract: function(val1,val2){
		checkArguments(val1,val2);
		return val1 - val2;
	},
	multiply: function(val1,val2){
		checkArguments(val1,val2);
		return val1*val2;
	},
	divide: function(val1,val2){
		checkArguments(val1,val2);
		return val1 / val2;
	}
	
};




function checkArguments(val1,val2)
{
	if (isNaN(val1)) {
		throw new Error("Arg1 invalid");
	}
	if (isNaN(val2)) {
		throw new Error("Arg2 Invalid");

	}
}
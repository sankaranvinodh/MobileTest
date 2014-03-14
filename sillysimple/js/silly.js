var SILLY = (function(module){
	module.getDate = function(resultObj)
	{
		resultObj.prepend(Date()+'<br/>');
	};
	return module;
}(SILLY || {}));
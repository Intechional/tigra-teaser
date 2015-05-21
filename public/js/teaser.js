(function(exports){
	var schema = {};

	//dynamic infor for app
	var scores = {
		"grocery" : ""
	, 	"bank" : ""
	,	"dining" : ""
	,	"total" : ""
	}


	var levels = {
		"0" : {
			"name" : "beginner"
		,	"desc" : "Start building! You are just at the beginning of your economic citizen journey so the only place to go is forward, one step at a time. Your first step could be switching your bank account from a big bank to a local credit union/regional bank or switching just 10% of your spending (it's only $50, if you spend $500 a month) to local and ethical stores. "
		}
	,	"1" :{
			"name" : "builder"
		,	"desc"	: "You're on your way! You make economic decisions that support the local community and are a strong ECONOMIC CITIZEN but you still have room to grow. Try switching your bank account to a local credit union/bank or shop at more local and ethical stores to meet your every day needs. But no matter what you do, KEEP BUILDING!"
		}
	,	"2" :{
			"name" : "change-maker"
		,	"desc" : " You're making changes! Your daily financial habits are making a great impact on the local community: you are supporting local jobs with higher wages and sustaining our environment. You are a excellent example of an ECONOMIC CITIZEN! Every time you purchase something, you keep your community in mind and we think that's great! Keep making that CHANGE!"
		}
	}
	var _getCats = function(){
		return ["grocery", "dining", "bank"];
	}

	var _getTotalScore = function(){
		var cats = _getCats();
		var total = 0
		_.each(cats, function(cat, i, list){
			total += parseInt(scores[cat])
		});
		return total;
	}

	var _getLevel = function(){
		var total = _getTotalScore();
		var map = {
			"0" : "0"
		,	"1"	: "0"
		,	"2"	: "0"
		,	"3"	: "1"
		,	"4"	: "1"
		,	"5"	: "2"
		,	"6"	: "2"
		}
		return map[total];

	}

	exports.getCats = function(){
		return _getCats();
	}

	exports.getLevel = function(){
		return _getLevel();
	}

	exports.hasScore = function(cat){
		return (!(scores[cat] === ""))
	}

	exports.getLevelName = function(){
		var level  = _getLevel();
		return levels[level]["name"];
	}

	exports.getLevelDesc= function(){
		var level  = _getLevel();
		return levels[level]["desc"];
	}

	exports.isReadyForTotalScore = function(){
		var cats = _getCats();
		var answer = true;
		_.each(cats, function(cat, i, list){
			if(scores[cat] === ""){
				answer = false;
			}
		});
		return answer;
	}

	/*call ONLY if isReadyForTotalScore  returns true
	*/
	exports.getTotalScore = function(){
		return _getTotalScore();
	}

	exports.getScore = function(cat){
		return scores[cat];
	}

	exports.setScore = function(value, cat){
		scores[cat] = value;
	}

	exports.init = function(){
		console.log("initing teaser")
		schema = {
			"sub_score" : {
				"0": "beginner"
			,	"1": "builder"
			,	"2": "change-maker"
			}
		,	"grocery" : {
				"intro" : "Get groceries  "
			,	"gerund" : "getting groceries"
			,	"question" : "Where was the LAST place that you bought groceries?"
			,	"options" : {
					"0" : "Big-box chain store (like Walmart or Target)"
				,	"1"	: "Local store with good wages or local sourcing (like Berkeley Bowl)"
				,	"2" : "Local store with good wages AND local sourcing (like Rainbow Co-Op)"
				}
			,	"recirculation": {
					"0": "13"
				,	"1" : "13 to 48"
				,	"2"	: "48"
				}
			}
		,	"bank" : {
				"intro" : "Go to the bank  "
			,	"gerund" : "banking"
			,	"question" : "Where do you bank?"
			,	"options" : {
					"0" : "Commercial Bank (like Wells Fargo)"
				,	"1" : "Regional Bank (like Bank of the West)"
				,	"2" : "Credit Union (like Self Help Credit Union)"
				}
			,	"recirculation": {
					"0": "17"
				,	"1" : "17 to 76"
				,	"2"	: "76"
				}

			}
		,	"dining" : {
				"intro" : "Eat out "
			,	"gerund" : "eating out"
			,	"question" : "Where was the last restaurant where you ate out?"
			,	"options" : {
					"0" : "A chain (like Chili's or Denny's)"
				,	"1" : "A local restaurant or cafe without local sourcing (or you're not sure)"
				,	"2" : "A local restaurant or cafe with local sourcing (like Cafe Gab or Miss Ollie's)"

				}
			,	"recirculation": {
					"0": "34"
				,	"1" : "34 to 65"
				,	"2"	: "65"
				}
			}
		}
	};

	exports.getSchema = function(){
		return schema;
	}



})(typeof exports === 'undefined' ? this['Teaser']={} : exports);//end closure
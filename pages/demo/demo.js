app.controller("demoCtrl", ["$scope", function($scope) {
	$scope.xuanze=[
		{name:"请选择年级",lei:["一年级","二年级","三年级","四年级","五年级","六年级"]},
		{name:"请选择科目",lei:["语文","数学","英语","科学","奥数"]}
	]
}])
app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'pages/demo/index.html',
		controller: 'demoCtrl'
	}).when("/kousuan",{
		templateUrl: 'pages/demo2/index.html',
		controller: 'kousuanCtrl'
	}).when("/xunlian",{
		templateUrl: 'pages/demo3/index.html',
		controller: 'xunlianCtrl'
	}).when("/zhishi",{
		templateUrl: 'pages/demo4/index.html',
		controller: 'zhishiCtrl'
	}).when("/tingli",{
		templateUrl: 'pages/demo5/index.html',
		controller: 'tingliCtrl'
	})

}])
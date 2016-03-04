app.controller('MainController', ['$scope', function($scope)
	$scope.title = "Rip Rop, Sip Sop";
	$scope.promo = "Rip the Rop, Sip the Sop";
	$scope.product = {
		name: "Gunther Pooch",
		price: 100000,
		pubdate: new Date("2004", "01", "08")
	}

	}]);
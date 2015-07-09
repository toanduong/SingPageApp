app.controller('homeController', ['$scope', '$resource', '$timeout', 
	function($scope, $resource, $timeout){
		$scope.contact = {
			name: '',
			email: '',
			description: ''
		};
		var User = $resource('/api/users');
		var Mail = $resource('/api/sendmail');
		$scope.user = User.query({id: 1}, function(results){
			console.log(results);
		});
		
		$scope.onSaveUserName = function(){
			//start progress bar
			progressJs().start();
			
			var user = new User();
			user.name = $scope.user.name;
			user.$save(function(result){
				//end progress bar
				console.log(result);
				$timeout(function(){
					progressJs().end();
				}, 400);
			});
		};
		
		/** 
		 *	send mail to contact 
		 */
		$scope.sendMailContact = function(){
			//start progress bar
			progressJs().start().autoIncrease(5, 500);
			Mail.query({to: $scope.contact.email, subject: $scope.contact.name, description: $scope.contact.description}, function(results){
				$timeout(function(){
					progressJs().end();
				}, 100);
			});
		};
}]);
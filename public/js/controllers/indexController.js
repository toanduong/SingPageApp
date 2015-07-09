app.controller('indexController', ['$scope', '$location', '$anchorScroll', '$timeout', 
	function($scope, $location, $anchorScroll, $timeout){
		$scope.goToArea = function(area, e){
			console.log($('#' + area)[0].offsetTop);
			$('html, body').stop().animate({
	            scrollTop: $('#' + area)[0].offsetTop - 40
	        }, 700, 'easeInOutExpo', function(){
				$timeout(function(){
				//remove class active
				$('.navbar-collapse ul li').removeClass('active');
				
					switch(area){
						case 'about':
							$('#itemAbout').addClass('active');
							break;
						case 'skills':
							$('#itemSkills').addClass('active');
							break;
						default:
							$('#itemContact').addClass('active');
							break;
					};
				}, 100);
			});
		};
}]);
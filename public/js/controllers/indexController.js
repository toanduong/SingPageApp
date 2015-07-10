app.controller('indexController', ['$scope', '$location', '$anchorScroll', '$timeout', 
	function($scope, $location, $anchorScroll, $timeout){
		$scope.init = function(){
			console.log('init');
			setTimeout(function() {
				$("#skills").mouseover(function(){
					console.log('test');
					
				});
			}, 100);
			
		}
		
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
		
		// 
		setTimeout(function(){
		    if($("#skills").is(":hover")){
		        for(var i = 0 ; i < $('#skills').find('.skill_item').length; i++){
		            loopit("c", i, 0, 0);
		        }
		    }else{
		        for(var i = 0 ; i < $('#skills').find('.skill_item').length; i++){
		            loopit("nc", i, 0, 0);
		        }
		    } 
		},300);
		
		function loopit(dir, ele, i, prec){
		    i = parseInt(i);
		    var degs = $('#prec' + ele).attr("class").split(' ')[1];
		    var activeBorder = $('#activeBorder' + ele);
		    
		    if (dir == "c")
		        i++
		    else
		        i--;
		    if (i < 0)
		        i = 0;
		    if (i > degs)
		        i = degs;
		    prec = (100*i)/360;   
		    //activeBorder.find(".prec").html(Math.round(prec)+"%");
		    
		    if (i<=180){
		        activeBorder.css('background-image','linear-gradient(' + (90+i) + 'deg, transparent 50%,#D6CDCD 50%),linear-gradient(90deg, #D6CDCD 50%, transparent 50%)');
		    }else{
		        activeBorder.css('background-image','linear-gradient(' + (i-90) + 'deg, transparent 50%, #ff5722 50%),linear-gradient(90deg, #D6CDCD 50%, transparent 50%)');
		    }
		    
		    setTimeout(function(){
		        if($("#skills").is(":hover"))
		            loopit("c", ele, i, prec);
		        else
		           loopit("nc", ele, i, prec);
		    },1);
		    
		}

}]);
var app = angular.module('AngularApp', []);
		
		app.directive('emmsEditableDropdown', ['$document', function($document) {
			
			return {
				restrict: 'E',
				replace: true,
				scope: {
					items: '=dropDownList',
					selected: '=currentSelect',
				},
				templateUrl: 'emms-editable-dropdown.html',
				controller: ['$scope', '$element', function(scope, element) {
					
					var inputElement = element[0].children[1];
					var inputJqElement = angular.element(inputElement);
					
					scope.select = function(item) {
						if (item != 'other') {
							scope.selected = item;
							inputJqElement.attr('readonly', 'readonly');
						} else {
							// 其他
							scope.selected = null;
							inputJqElement.removeAttr('readonly');
							inputJqElement.addClass('fs');
							inputElement.focus();
							inputJqElement.attr('placeholder', '请输入...');
						}
					}
					
					scope.loseFocus = function() {
						inputJqElement.removeClass('fs');
					}
				}]
			}
			
		}])
		
		app.controller('AngularCtrl', function($rootScope, $scope, $http, $document, $timeout, $interval, $window, $rootScope, $log, $parse) {
			
			$scope.one = "mike";
			$scope.test = "test"
			
			$scope.list = [{id: '1', name: '111'}, {id: '2', name: '222'}];
			$scope.current;
			
			$scope.alert = function() {
				alert('666');
			}
			
		});

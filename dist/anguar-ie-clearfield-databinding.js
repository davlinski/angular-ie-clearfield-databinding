angular.module('ie-clearfield-databinding',[]);
angular.module('ie-clearfield-databinding').directive('input', ["$window", function ($window) {

    //Trident 6 is IE10, Trident 7 is IE11. Not needed for Edge (works properly without this module).
    //https://msdn.microsoft.com/library/ms537503.aspx#TriToken
    var tridentVersionMatch = $window.navigator.userAgent.match(/Trident\/([0-9]*)\.([0-9]*)/);
    var tridentMajor = null;

    if (tridentVersionMatch !== null) {
        tridentMajor = tridentVersionMatch[1];
    }
    return {
        restrict: 'E',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModelController) {

            function updateModel(event) {
                if (ngModelController.$viewValue !== event.srcElement.value) {
                    ngModelController.$setViewValue(event.srcElement.value);
                }
            }

            if (tridentMajor !== null && tridentMajor >= 6) {

                //bind ie's "oninput" event, which is triggered on change AND when the clear field button is pressed
                element.bind('input', updateModel);

                scope.$on('$destroy', function () {
                    element.unbind('input', updateModel);
                })
            }
        }
    };
}]);

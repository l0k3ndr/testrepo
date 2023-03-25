angular.module('tabFormApp', ['ui.bootstrap'])
    .controller('TabFormController', ['$scope', function ($scope) {
        $scope.sunSigns = [
            'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'
        ];

        $scope.favoriteColors = [
            'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'
        ];

        $scope.formData = {
            sunSign: '',
            favoriteColor: ''
        };

        $scope.submitSunSignForm = function () {
            console.log('Sun Sign submitted:', $scope.formData.sunSign);
        };

        $scope.submitFavoriteColorForm = function () {
            console.log('Favorite Color submitted:', $scope.formData.favoriteColor);
        };
    }]);

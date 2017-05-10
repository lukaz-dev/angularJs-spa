angular.module('listaTelefonica').directive('uiPhone', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attrs, ctrl) {
            var _formatDate = function (phone) {
                if (!phone) return;
                phone = phone.replace(/[^0-9]+/g, '');

                if (phone.length > 2) {
                    phone = '(' + phone.substring(0, 2) + ') ' + phone.substring(2);
                }

                if (phone.length > 9) {
                    phone = phone.substring(0, 9) + '-' + phone.substring(9, 14);

                    if (phone.length === 15) {
                        phone = phone.replace('-', '').substring(0, 10) + '-' + phone.substring(11);
                    }
                }
                return phone;
            };

            element.bind('keyup', function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});

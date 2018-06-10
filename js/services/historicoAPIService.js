angular.module("plataforma").factory("historicoAPI", function ($http,config) {


	var _gethistorico = function () {

		return $http.get(config.baseUrl + "/historico");

	};

	var _savehistorico = function (historico) {

		return $http.post(config.baseUrl + "/historico", historico);

	};

	return {
		gethistorico: _gethistorico,
		savehistorico: _savehistorico
    };

});
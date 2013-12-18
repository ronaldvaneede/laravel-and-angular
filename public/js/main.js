function TodosController($scope, $http) {

	$http.get('/todos').success(function(todos) {
		$scope.todos = todos;
	});

	$scope.remaining = function() {
		var count = 0;

		angular.forEach($scope.todos, function(todo) {
			count += todo.completed ? 0 : 1;
		});

		return count;
	}

	$scope.addTodo = function() {
		 $scope.todos.push({
		 	body: $scope.newTodoText,
		 	completed: false
		 });
	}
}
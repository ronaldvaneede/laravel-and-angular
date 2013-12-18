function TodosController($scope) {
	$scope.todos = [
		{ body: 'Go to store', completed: true },
		{ body: 'Finish video', completed: false },
		{ body: 'Learn Angular', completed: false }
	];

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
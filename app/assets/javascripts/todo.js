function TodoCtrl ($scope, $http) {
    $scope.hello = 'jeane';

    $scope.totalTodos = function(){
        return $scope.todos.length;
    };

    $scope.formatDate = function(date) {
        var todoDate = new Date(date);
        var dateString = todoDate.getMonth() + "/" + todoDate.getDate() + " "
            + todoDate.getHours()+ ":" + todoDate.getMinutes()+ ":" + todoDate.getSeconds() ;
        return dateString;
    };

    $scope.todoButton = function(index){
        return $scope.todos[index].done ? 'btn-success' : 'btn-warning';
    };

    // index
    $http.get('/todo/index.json').success(function(data){
        $scope.todos = data;
    });
    //create todo
    $scope.saveTodo = function() {
        $http.post('/save_todo', {
            text: $scope.textTodo, done:false
        }).success(function(data){
                $scope.todos.push(data);
                $scope.textTodo = '';

            })
    };
    // delete todo
    $scope.deleteTodo = function(id, index) {
        $http.delete('/delete_todo/' + id).success(function(){
            $scope.todos.splice(index, 1);
        });
    };
    //update todo
    $scope.todoDone = function(id, index) {
        $http.post('/todo_done/' + id).success(function(data){
            $scope.todoDoneStatus(index, data);
        });
    };

    $scope.todoDoneStatus = function(index, data) {
        //var date = new Date(data.updated_at)
        $scope.todos[index].done = data.done;
        $scope.todos[index].updated_at = data.updated_at;
        $scope.todoButton(index);
    };
}
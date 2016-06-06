var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/sqlite-db.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 250]
		}
	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
});

sequelize.sync({
	//force: true
}).then(function(){
	console.log('Everything is synchronized');

	Todo.findById(3).then(function(todo){
		if(todo){
			console.log(todo.toJSON());
		}else{
			console.log('Todo not found');
		}
	}).catch(function(e){
		console.log(e);
	});
	// if(todo){
	// 	console.log(todo.toJSON());
	// }else{
	// 	console.log('Unable to find todo');
	// }

	// Todo.create({
	// 	description: 'Throw trash',
	// 	//completed: false
	// }).then(function(){
	// 	return Todo.create({
	// 		description: 'Feed the cat'
	// 	});
	// }).then(function(todo){
	// 	//return Todo.findById(1);
	// 	return Todo.findAll({
	// 		where: {
	// 			description: {
	// 				$like: '%feed%'
	// 			}
	// 		}
	// 	});
	// }).then(function(todos){
	// 	if(todos){
	// 		todos.forEach(function(todo){
	// 			console.log(todo.toJSON());
	// 		});
	// 	}else{
	// 		console.log('No todo found!');
	// 	}
	// }).catch(function(e){
	// 	console.log(e);
	// });
});
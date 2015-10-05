

var createUser = function (userData) {
    var user = Meteor.users.findOne({username: userData.username});

    if (!user) {
        var userId = Accounts.createUser(userData);
        user = Meteor.users.findOne(userId);
    }
    return user;
};

var resetTasks = function (){
   Tasks.remove();
};

var resetUsers = function (){
    Meteor.users.remove();
};

var createTasks = function (){
    var user = createUser('test1@test.com','1234');
    var task = {
        "text" : "Test task 1",
        "createdAt" : ISODate("2015-09-28T14:55:01.640Z"),
        "username" : null,
        "private" : false,
        "checked" : false
    };
    task.owner = user._id;
    Tasks.insert (task);
};



Meteor.methods({
    'fixtures/users/create': createUser,
    'fixtures/users/reset': resetUsers,
    'fixtures/tasks/reset': resetTasks,
    'fixtures/tasks/create': createTasks
});


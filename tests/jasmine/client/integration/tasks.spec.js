describe('tasks Methods', function (){

// we should test all the tasks meteor methods in tasks.js including:
//addTask, deleteTask, setChecked, setPrivate

    var user1,
        user2;

    beforeAll (function (){
        user1 = Meteor.call ('fixtures/users/create', {email: 'test1@test.com', password:'1234', username: 'test1'});
        user2 = Meteor.call ('fixtures/users/create', {email: 'test2@test.com', password:'1234', username: 'test2'});
    });

    beforeEach ( function (){
        Meteor.call ('fixtures/tasks/reset');
    });

    it ('Should err if not authenticated', function () {
        try{
            Meteor.call('addTask', 'testTask');
        }
        catch (err) {
            expect (err).toThrowError();
        }
    });

    it ('should add a task will create a task with correct fields data', function () {
         Meteor.loginWithPassword ("test1@test.com", "1234", function(err) {
            expect(err).toBeUndefined();
            expect(this.userId()).not.toBeNull();
            Meteor.call ('addTask', 'testTask', function (err, result) {
                expect (err).toBeNull();
                console.log ('result is '+result);
                var task = Tasks.find ({name: 'testTask'});
                console.log ('task is '+task);
                expect (task.name).toEqual('testTask');
                expect (task.owner).toEqual(Meteor.userId);
                expect (task.createdAt).not.toBeUndefined();
                expect (task.username).toEqual(user1.username);
                Meteor.logout();
            });
        });
    });


});

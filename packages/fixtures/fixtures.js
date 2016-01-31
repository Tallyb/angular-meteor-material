/* globals
 resetDatabase: true,
 loadDefaultFixtures: true,
 */

var Future = Npm.require('fibers/future');

resetDatabase = function () {
    console.log('Resetting database');

    // safety check
    if (!process.env.IS_MIRROR) {
        console.error('velocityReset is not allowed outside of a mirror. Something has gone wrong.');
        return false;
    }

    var fut = new Future();

    var collectionsRemoved = 0;
    var db = Meteor.users.find()._mongo.db;
    console.log (db);
    db.collections(function (err, collections) {

        var appCollections = _.reject(collections, function (col) {
            return col.collectionName.indexOf('velocity') === 0 ||
                col.collectionName === 'system.indexes';
        });

        if (appCollections.length > 0) {
            _.each(appCollections, function (appCollection) {
                appCollection.remove(function (e) {
                    if (e) {
                        console.error('Failed removing collection', e);
                        fut.return('fail: ' + e);
                    }
                    collectionsRemoved++;
                    console.log('Removed collection');
                    if (appCollections.length === collectionsRemoved) {
                        console.log('Finished resetting database');
                        fut['return']('success');
                    }
                });
            });
        } else {
            console.log('No collections found. No need to reset anything.');
            fut['return']('success');
        }

    });

    return fut.wait();
};

loadDefaultFixtures = function () {
    console.log('Loading default fixtures');
    var ownerId = Accounts.createUser({email: 'test@test.com', password: 'testing'});

    var tasks = [
        {name: 'Private ToDo', private: true, ownerId: ownerId},
        {name: 'Public ToDo', ownerId: ownerId},
        {name: 'Finished ToDo', checked: true, ownerId: ownerId}
    ];

    tasks.forEach(function(data){
        Tasks.insert(data);
    });
    console.log('Finished loading default fixtures');
};

if (process.env.IS_MIRROR) {
    resetDatabase();
    loadDefaultFixtures();
}


//var createUser = function (userData) {
//    var user = Meteor.users.findOne({username: userData.username});
//
//    if (!user) {
//        var userId = Accounts.createUser(userData);
//        user = Meteor.users.findOne(userId);
//    }
//    return user;
//};
//
//var resetTasks = function (){
//   Tasks.remove();
//};
//
//var resetUsers = function (){
//    Meteor.users.remove();
//};
//
//var createTasks = function (){
//    var user = createUser('test1@test.com','1234');
//    var task = {
//        "text" : "Test task 1",
//        "createdAt" : ISODate("2015-09-28T14:55:01.640Z"),
//        "username" : null,
//        "private" : false,
//        "checked" : false
//    };
//    task.owner = user._id;
//    Tasks.insert (task);
//};
//
//
//
//Meteor.methods({
//    'fixtures/users/create': createUser,
//    'fixtures/users/reset': resetUsers,
//    'fixtures/tasks/reset': resetTasks,
//    'fixtures/tasks/create': createTasks
//});


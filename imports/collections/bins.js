import { Mongo } from 'meteor/mongo';


// add Meteor methods to add/edit bin properties
Meteor.methods({

  // adding a bin
  'bins.insert': function () {
    return Bins.insert({
      // what should the bin have by default?
      createdAt: new Date(),
      content: '',
      sharedWith: [],
      ownerId: this.userId
    });
  },

  // removing a bin
  'bins.remove': function(bin) {
    return Bins.remove(bin);
  },

  // updating a bin
  'bins.update': function(bin, content) {
    return Bins.update(bin._id, { $set: { content } });
  }
});

export const Bins = new Mongo.Collection('bins');

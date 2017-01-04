/**
 * University.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
             type: 'string',
             size: 128,
             required: true
  	},
  	type: {
  		type: 'string',
        enum: ['public', 'private'],
        size: 10,
        required: true
    },
  	rank: {
  		type: 'integer'
  	},
  	year_of_establishment: {
  		type: 'integer'
           
  	},
   course: {
      collection: 'Course',
      via: 'university'

  	}
  }
};


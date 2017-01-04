/**
 * Course.js
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
      fee: {

              type: 'integer',
              required: true
      },
      courseDuration: {

                 type:'string',
                 size: 128,
                 required:true
      },
      university: {
            model: 'University',
            required: true
      }
  }
};


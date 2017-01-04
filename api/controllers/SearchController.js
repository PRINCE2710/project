module.exports = {
  search: function (request, response) {
  	
  	University.find({name:request.query.searchKey}).populate('course')
        .exec(function(e, ut) {
			Course.find({name:request.query.searchKey}).populate("university").exec(function(er,c) {
				ut=ut.concat(c);
				response.json(ut);
			})
			
		});
   	
   }

};
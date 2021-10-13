const db = require('./../connection');

module.exports = {
  /**
  * 


  */
  getContestants: async () => {
    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500
    // var data = [];
    // var status = '';
    db.query('Select * from contestants', (err, result) => {
      if (err) {
        console.log(err);
        throw new Error('Data not found');
      } else {
        var data = result,
          status = '200';
        return {
          status: status,
          data: data,
        };
      }
    });
    // return {
    //   status: status,
    //   data: data,
    // };
  },

  /**
  * 

  * @param options.createContestantInlineReqJson.city required
  * @param options.createContestantInlineReqJson.costumeImgUrl required
  * @param options.createContestantInlineReqJson.costumeTitle required
  * @param options.createContestantInlineReqJson.country required
  * @param options.createContestantInlineReqJson.name required

  */
  createContestant: async (options) => {
    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        id: '<string>',
        status: '<string>',
      },
      status = '201';

    return {
      status: status,
      data: data,
    };
  },

  /**
  * 
  * @param options.id The id of a contestant 

  */
  getContestant: async (options) => {
    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        city: '<string>',
        costumeImgUrl: '<string>',
        costumeTitle: '<string>',
        country: '<string>',
        id: '<string>',
        name: '<string>',
        votes: '<number>',
      },
      status = '200';

    return {
      status: status,
      data: data,
    };
  },

  /**
  * 
  * @param options.id The id of a contestant 

  */
  deleteContestant: async (options) => {
    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        status: '<string>',
      },
      status = '200';

    return {
      status: status,
      data: data,
    };
  },

  /**
  * 
  * @param options.id the id of a contestant 

  */
  updateContestant: async (options) => {
    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        status: '<string>',
      },
      status = '200';

    return {
      status: status,
      data: data,
    };
  },

  /**
  * 
  * @param options.id The id of a contestant 

  */
  upvoteContestant: async (options) => {
    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        status: '<string>',
        votes: '<number>',
      },
      status = '200';

    return {
      status: status,
      data: data,
    };
  },
};

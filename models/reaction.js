// this file will be used to create a subdocument schema for the reaction field in the Thought model. this will not be a model
// this file will need to contain a field for reactionID set to a new ObjectId and use Mongoose's objectId data type
// this file will need to contain a field for reactionBody set to a string, be required, and have a maximum length of 280 characters
// this file will need to contain a field for username set to a string and be required
// this file will need to contain a field for createdAt set to a date, and default to the current timestamp and have a getter method to format the timestamp on query
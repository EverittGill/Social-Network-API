// this file is for creating a User model using mongoose that will be used to create the thought schema.
// this file is also for creating the User controller that will be used to create the CRUD operations for the thought model.
// this file needs to contain fields for username set to string, be unique, required, and trimmed. 
// this file also needs to contain fields for email set to string, be unique, required, and match a valid email address using mongooses matching validation
// this file also needs to contain fields for thoughts set to an array of _id values referencing the Thought model
// this file also needs to contain fields for friends set to an array of _id values referencing the User model (self-reference)
// this file also needs to contain a virtual called friendCount that retrieves the length of the user's friends array field on query.


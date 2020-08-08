Feature: Create User
  Clients should be able to send a request to our API in order to create a user. Our API should also validate the strucgture of the payload and respond with an error if it is invalid.

  Scenario: Empty payload

  If the client sends a POST rquest to /users with a unsupported payload, it should receive a sponse with a 4xx status code. 

  When the client creates a POST request to /users
  And attaches a generic empty payload 
  And sends the request
  Then our API should respond with a 400 HTTP status code 
  And the payload of the response should be a JSON object 
  And contains a message property which says "Payload should not be empty"
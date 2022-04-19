<!-- for authenticating a user in spa we use a mechanism called
bearer token mechanism

what is this mechanism

bearer token is a value which goes inside your authorization header
(http header) inside your http request.

neither this token is stored anywhere or it has expiry

it is just string of characters

this token follws jwt pattern

client - server

server gives a JWT token once successfully auth

browser can use this token to send further requests to server

and server will see if this bearer token is present and if

this is token which server gave to client while loggin in
then only server will accept your request

else it will say you are not logged in

jwt token is a way of keeping track that user is logged in or not
header contains inf which algorithm
it
is using to encrypt this jwt token

second part is payload

server while sending jwt token can encrypt some sort of data and give it to me and i can decode that from front end

3rd part is signature

signature is necessary to manage authenticity of your token

user is requesting to create a post. server verifies
whether the signature matches the payload, if there is a match then we can trust the payload

we can store jwt in local storage or in cookie or in session storage -->

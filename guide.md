
- Explore schematype options from the document
- add required, unique, lowercase, minlength, maxlength, trim, default
- create a custum validate function for gender
- improve db schema - put all appropriate validatons on each field in schema
- add timestamps to the userschema
- add api level validation on patch request and signup post api
- data sanitizing - add api validation for each field
- install validator
- explore  validator library  fucntion and use for password, email , url , phone no
- NEVER TRUST req.body


- validate data in signup api
- install bcrypt library
- create a hashedPassword  using bcrypt.hash(plainPassword, salt) and save the user 
- create login api
- compare passwords and throw errors if email or password  is invalid

- install cookie-parser
- just send a dummy cookie to user
- create GET /profile api and check if you get the cookie back
- install jsonwebtoken
- IN login API, after email and password validation, create a jwt token and sent it to the cookie
- read the cookie inside you profiel api and find the logged user
- user auth middleware
- Add the userAuth middle ware in profile and a new logged in user
- set the expiry of jwt token and cookies tp 7 days or something


# dev-sangam APIs
authRouter
- POST /signup
- POST /login
- POST /logout

profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

/connectionRequestRouter
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId

- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

- staus : "ignored", "interested", "accepted", "rejected"


/userRouter
- GET /connections
- GET /user/request/received
- GET /feed - Gets you the profiles of other users


/feed?page=1&limit=10 => first 10 users 1-10  => .skip(0)&.limit(10)
/feed?page=2&limit=10 => 11-20 => .skip(10) & .limit(10)
/feed?page=3&limit=10 => 21-30


.skip(n)  => how many document you want to skip from the start

.limit(n) => gives first n document from the collections


skip = (page - 1)*limit  => skip formula for feed api


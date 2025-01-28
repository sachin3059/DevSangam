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



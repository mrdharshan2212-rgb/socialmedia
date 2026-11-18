use socialMediaDB

db.users.insertOne({
  user_id: 101,
  name: "Arun",
  email: "arun@gmail.com"
})

db.posts.insertOne({
  post_id: 501,
  user_id: 101,
  content: "Learning mongoDB",
  likes: 25
})

db.comments.insertOne({
  comment_id: 1,
  post_id: 501,
  user_id: 101,
  comment: "Nice post"
})

db.interactions.insertOne({
  user_id: 101,
  post_id: 501,
  type: "like"
})

db.posts.find({ likes: { $gt: 20 } })
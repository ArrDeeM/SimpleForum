exports.getComments = function (req, res) {
  var sql = 'Select * from Comments ';
  sql += 'where Post_Id = ?';

  connectionPool.query(sql,req.query.post,(error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(502).json({ error });
    } else {
      let commentlist = {};
      for (var i = 0; i < results.length; i++) {
        var key = results[i].Comment_Id
        var add =  {
          postId: results[i].Post_Id,
          username: results[i].Username,
          commentId: results[i].Comment_Id,
          body: results[i].Body
        }
        commentlist[key] = add;
      }
      console.log(commentlist);
      res.json({
        comments: commentlist
      });
    }
  });
}

exports.postComment = function (req, res) {
  console.log("Comment check: ",req.body.user,req.body.post,req.body.body);
  //get highest id
  var highest = 0;
  var sql = 'select MAX(Comment_Id) from Comments';
  connectionPool.query(sql,(error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(502).json({ error });
    } else {
      console.log("Highest Id: ",results);
      highest = results[0]['MAX(Comment_Id)'] + 1;
      if (highest == null){
        highest = 1;
      };
      //inserts
      var comment = {
        Post_Id: req.body.post,
        Username: req.body.user,
        Comment_Id: highest,
        Body: req.body.body
      };
      sql = 'insert into comments set ?';
      connectionPool.query(sql,comment,(error, results, fields) => {
        if (error) {
          console.log(error);
          res.status(502).json({ error });
        } else {
          console.log("Comment Inserted");
          //respond with new comment
          let commentlist = {};
          commentlist[highest] = {
            postId: req.body.post,
            username: req.body.user,
            commentId: highest,
            body: req.body.body
          };
          res.json({
            comments: commentlist
          });
        }
      });
    }
  });
}

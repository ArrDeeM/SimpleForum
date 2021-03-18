exports.getPosts = function (req, res) {
  if (req.query.post == "" || req.query.user == "") {
    const sql = 'Select * from posts';

    connectionPool.query(sql,(error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(502).json({ error });
      } else {
        let postlist = {};
        for (var i = 0; i < results.length; i++) {
          var key = results[i].Post_Id
          var add =  {
            postId: results[i].Post_Id,
            username: results[i].Username,
            title: results[i].Title,
            body: results[i].Body
          }
          postlist[key] = add;
        }
        res.json({
          posts: postlist
        });
      }
    });
  } else if (req.query.post != null) {
    //query by
    var sql = 'Select * from posts ';
    sql += "where Title like concat('%',?,'%')"

    connectionPool.query(sql,req.query.post,(error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(502).json({ error });
      } else {
        let postlist = {};
        for (var i = 0; i < results.length; i++) {
          var key = results[i].Post_Id
          var add =  {
            postId: results[i].Post_Id,
            username: results[i].Username,
            title: results[i].Title,
            body: results[i].Body
          }
          postlist[key] = add;
        }
        res.json({
          posts: postlist
        });
      }
    });
  } else {
    var sql = 'Select * from posts ';
    sql += "where Username like concat('%',?,'%')"

    connectionPool.query(sql,req.query.user,(error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(502).json({ error });
      } else {
        let postlist = {};
        for (var i = 0; i < results.length; i++) {
          var key = results[i].Post_Id
          var add =  {
            postId: results[i].Post_Id,
            username: results[i].Username,
            title: results[i].Title,
            body: results[i].Body
          }
          postlist[key] = add;
        }
        res.json({
          posts: postlist
        });
      }
    });
  }
}

exports.getPost = function (req, res) {
  var sql = 'Select * from posts ';
  sql += "where Post_Id = ?"

  connectionPool.query(sql,req.query.post,(error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(502).json({ error });
    } else {
      var add;
      for (var i = 0; i < results.length; i++) {
        add =  {
          postId: results[i].Post_Id,
          username: results[i].Username,
          title: results[i].Title,
          body: results[i].Body
        }
      }
      res.json(add);
    }
  });
}

exports.postPosts = function (req, res) {
  console.log("Post check: ",req);
  //get highest id
  var highest = 0;
  var sql = 'select MAX(Post_Id) from Posts';
  connectionPool.query(sql,(error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(502).json({ error });
    } else {
      console.log("Highest Id: ",results);
      highest = results[0]['MAX(Post_Id)'] + 1;
      //inserts
      var post = {
        Post_Id: highest,
        Username: req.body.user,
        Title: req.body.title,
        Body: req.body.body
      };
      sql = 'insert into posts set ?';
      connectionPool.query(sql,post,(error, results, fields) => {
        if (error) {
          console.log(error);
          res.status(502).json({ error });
        } else {
          console.log("Post Inserted");
          //build tag array for insert
          var values = [];
          for (var i = 0; i < req.body.tags.length; i++){
            var unit = [req.body.tags[i].trim(), highest];
            values.push(unit);
          }
          console.log("Checking values at end: ", values)
          //insert tags
          sql = 'insert into tags (Tag, Post_Id) values ?';
          connectionPool.query(sql,[values],(error, results, fields) => {
            if (error) {
              console.log(error);
              res.status(502).json({ error });
            } else {
              //respond with new post
              let postlist = {};
              postlist[highest] = {
                postId: highest,
                username: req.body.user,
                title: req.body.title,
                body: req.body.body
              };
              res.json({
                posts: postlist
              });
            }
          });
        }
      });
    }
  });
}

exports.postPTags = function (req, res) {
  //console.log("Post check: ",req);
  var sql = 'Select distinct posts.Post_Id,Username,Title,Body from posts ';
  sql += "inner join tags on ";
  sql += "tags.Post_Id = posts.Post_Id and ("
  for (var i = 0; i < req.body.tags.length; i++) {
    if (i == 0){
      sql += ("tags.Tag = '" + req.body.tags[i] + "'")
    } else {
      sql += (" or tags.Tag = '" + req.body.tags[i] + "'")
    }
  }
  sql += ") where Title like concat('%',?,'%')"
  connectionPool.query(sql,req.body.title,(error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(502).json({ error });
    } else {
      let postlist = {};
      for (var i = 0; i < results.length; i++) {
        var key = results[i].Post_Id
        var add =  {
          postId: results[i].Post_Id,
          username: results[i].Username,
          title: results[i].Title,
          body: results[i].Body
        }
        postlist[key] = add;
      }
      res.json({
        posts: postlist
      });
    }
  });
}

exports.postUTags = function (req, res) {
  //console.log("Post check: ",req);
  var sql = 'Select distinct posts.Post_Id,Username,Title,Body from posts ';
  sql += "inner join tags on ";
  sql += "tags.Post_Id = posts.Post_Id and ("
  for (var i = 0; i < req.body.tags.length; i++) {
    if (i == 0){
      sql += ("tags.Tag = '" + req.body.tags[i] + "'")
    } else {
      sql += (" or tags.Tag = '" + req.body.tags[i] + "'")
    }
  }
  sql += ") where Username like concat('%',?,'%')"
  connectionPool.query(sql,req.body.title,(error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(502).json({ error });
    } else {
      let postlist = {};
      for (var i = 0; i < results.length; i++) {
        var key = results[i].Post_Id
        var add =  {
          postId: results[i].Post_Id,
          username: results[i].Username,
          title: results[i].Title,
          body: results[i].Body
        }
        postlist[key] = add;
      }
      res.json({
        posts: postlist
      });
    }
  });
}

exports.getTags = function (req, res) {
  if (req.query.tags == "" && req.query.post == null){
    var sql = 'Select distinct tag from Tags';
    connectionPool.query(sql,(error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(502).json({ error });
      } else {
        let taglist = {};
        for (var i = 0; i < results.length; i++) {
          var key = i;
          var add =  {
            tag: results[i].tag
          }
          taglist[key] = add;
        }
        console.log("All tags: ",taglist);
        res.json({
          tags: taglist
        });
      }
    });
  } else if(req.query.tags == null){
    var sql = 'Select distinct tag from Tags ';
    sql += "where Post_Id = ?";

    connectionPool.query(sql,req.query.post,(error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(502).json({ error });
      } else {
        let taglist = {};
        for (var i = 0; i < results.length; i++) {
          var key = i;
          var add =  {
            tag: results[i].tag
          }
          taglist[key] = add;
        }
        console.log("Does it get here tag: ",taglist);
        res.json({
          tags: taglist
        });
      }
    });
  } else {
    var sql = 'Select distinct tag from Tags ';
    sql += "where tag like concat('%',?,'%')";

    connectionPool.query(sql,req.query.tags,(error, results, fields) => {
      if (error) {
        console.log(error);
        res.status(502).json({ error });
      } else {
        let taglist = {};
        for (var i = 0; i < results.length; i++) {
          var key = i;
          var add =  {
            tag: results[i].tag
          }
          taglist[key] = add;
        }
        console.log("Specific tag: ",taglist);
        res.json({
          tags: taglist
        });
      }
    });
  }
}

exports.postLogin = function (req, res) {
  //console.log("Login check: ",req);
  const sql = 'Select Exists(Select * from users where Username = ? and Password = ?) as valid';
  connectionPool.query(sql,[req.body.username,req.body.password],(error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(502).json({ error });
    } else {
      console.log("Does User Exists",results[0].valid)
      res.json({
        isValid: results[0].valid
      });
    }
  });
}

exports.postSignup = function (req, res) {
  //console.log("Signup check: ",req);
  var sql = 'Select Exists(Select * from users where Username = ?) as valid';
  connectionPool.query(sql,req.body.username,(error, results, fields) => {
    if (error) {
      console.log(error);
      res.status(502).json({ error });
    } else {
      console.log("Does User Exists",results[0].valid)
      if (results[0].valid == 0){
        sql = 'Insert into users set ?';
        const set = {Username: req.body.username ,Password: req.body.password}
        connectionPool.query(sql,set,(error, final, fields) => {
          if (error) {
            console.log(error);
            res.status(502).json({ error });
          } else {
            res.json({
              isValid: true
            });
          }
        });
      } else {
        res.json({
          isValid: false
        });
      }
    }
  });
}

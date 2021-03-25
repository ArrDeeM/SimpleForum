const express = require('express');
const api = require('express').Router();
const postfuncs = require('./posts.js');
const commentfuncs = require('./comments.js');
const userfuncs = require('./users.js');
const tagfuncs = require('./tags.js');

api.get('/posts/:posts',postfuncs.getPosts);
api.get('/post/:post',postfuncs.getPost);
api.get('/comments/:comments',commentfuncs.getComments);
api.get('/tags/:tags',tagfuncs.getTags);

api.post('/post',postfuncs.postPosts);
api.post('/comment',commentfuncs.postComment);
api.post('/login',userfuncs.postLogin);
api.post('/signup',userfuncs.postSignup);
api.post('/postswithtag',postfuncs.postPTags);
api.post('/userwithtag',postfuncs.postUTags);

module.exports = api;

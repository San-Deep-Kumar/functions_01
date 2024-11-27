const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

function getWelcomeMessage() {
  return 'Welcome to Our Service';
}

app.get('/Welcome', (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  return 'Hello, ' + username + '!';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPassword(password) {
  if (!password || password.length < 8) {
    return 'Password is too short';
  }
  if (password.length > 15) {
    return 'Password is Strong';
  }else {
    return 'Password is Weak';
  }
  
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function sumOfTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(sumOfTwoNumbers(num1, num2));
});

function checkSubscriptonStatus(username, subscribed) {
  if (subscribed === 'true') {
    retrun username + 'is subscribed';
  } else {
    return username + 'is not subscribed';
  }
}

app.get('/subscription-staus', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.subscribed;
  res.send(checkSubscriptionStatus(username, subscribed));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

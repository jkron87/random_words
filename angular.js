var app = angular.module('randomGenerator', []);
app.controller('myController', function ($scope) {
  $scope.randomWord = [
    'bubble',
    'cat',
    'plants',
    'salsa',
    'very',
    'bumblebee',
    'hooligan',
    'alphabet',
    'lovely',
    'crabby',
    'toes',
    'pickle',
    'puppy',
  ];

  $scope.randomPhrases = [
    "He's a keeper",
    "You're my one and only.",
    'WTF',
    'Totes magotes',
    'Piece of cake!',
    'Go Blue!',
    'How dare you.',
    "Well I'll be darned.",
    'Really?',
    'Hasta la vista',
    'I have a bad feeling about this',
    'On point',
    'Cool beans',
  ];

  $scope.classes = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ];

  $scope.wordsToShow = [];

  $scope.addWord = function () {
    $scope.obj = {};
    $scope.obj.word = $scope.randomWord[Math.floor(Math.random() * (13))];
    $scope.obj.class = '';
    $scope.wordsToShow.push($scope.obj);
  };

  $scope.addPhrase = function () {
    $scope.obj = {};
    $scope.obj.word =  $scope.randomPhrases[Math.floor(Math.random() * (13))];
    $scope.obj.class = '';
    $scope.wordsToShow.push($scope.obj);
  };

  $scope.addWordClass = function () {
    $scope.obj = {};
    $scope.class = $scope.classes[Math.floor(Math.random() * (10))];
    $scope.obj.word = $scope.randomWord[Math.floor(Math.random() * (13))];
    $scope.obj.class = $scope.class;
    $scope.wordsToShow.push($scope.obj);
  };

  $scope.addPhraseClass = function () {
    $scope.obj = {};
    $scope.class = $scope.classes[Math.floor(Math.random() * (10))];
    $scope.obj.word = $scope.randomPhrases[Math.floor(Math.random() * (13))];
    $scope.obj.class = $scope.class;
    $scope.wordsToShow.push($scope.obj);
  };

});

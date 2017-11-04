
(function(){
 var app = angular.module('booking', [ ]);
    
/* WEEK ONE */
    
 app.controller('BookingController', function(){
     this.products = day1s;
 });
    
 app.controller('Day2Controller', function(){
     this.products = day2s;
 });
    
 app.controller('Day3Controller', function(){
     this.products = day3s;
 });
    
 app.controller('Day4Controller', function(){
     this.products = day4s;
 });
    
 app.controller('Day5Controller', function(){
     this.products = day5s;
 });
    
 app.controller('Day8Controller', function(){
     this.products = day8s;
 });
    
 app.controller('Day9Controller', function(){
     this.products = day9s;
 });
    
 app.controller('Day10Controller', function(){
     this.products = day10s;
 });
    
 app.controller('Day11Controller', function(){
     this.products = day11s;
 });
    
app.controller('Day12Controller', function(){
     this.products = day12s;
 });
    
 app.controller('CalendarController', function() {
     this.tab = 0;
     
     this.selectTab = function(setTab) {
         this.tab = setTab;
     };
     
     this.isSelected = function(checkTab) {
        return this.tab === checkTab;
     };
 });
    
    app.controller('BookController', function() {
       this.book = {};
        
       this.addBook = function(product) {
           product.books.push(this.book);
           this.book = {};
       };
    });

    
    
    var day1s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: true},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
];
    
    
    var day2s = [    
    {
    no: "A.101", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: true},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
    
            {
    no: "B.211", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    
    var day3s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
    
            {
    no: "B.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: true},
            {name: "15-16", booked: false},
           ]
    },
    
];
    
    var day4s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
    
    {
    no: "B.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
];
    
    var day5s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
    
            {
    no: "B.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    

var day8s = [    
    {
    no: "A.101", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
    
            {
    no: "B.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: true},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: true},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];    
    
var day9s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: true},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
    
            {
    no: "B.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    
var day10s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: true},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: true},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: false},
            {name: "14-15", booked: true},
            {name: "15-16", booked: false},
           ]
    },
    
            {
    no: "B.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];
    
var day11s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: true},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: true},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
    
            {
    no: "B.101", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: false},
            {name: "11-12", booked: true},
            {name: "12-13", booked: false},
            {name: "13-14", booked: true},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
];  
    
var day12s = [    
    {
    no: "A.101", 
    booked: false,
    hours: [
            {name: "08-09", booked: false},
            {name: "09-10", booked: false},
            {name: "10-11", booked: true},
            {name: "11-12", booked: false},
            {name: "12-13", booked: false},
            {name: "13-14", booked: false},
            {name: "14-15", booked: false},
            {name: "15-16", booked: true},
           ]
    },
        
       {
    no: "A.201", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
        {
    no: "A.217", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
    
            {
    no: "B.101", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
        
            {
    no: "B.211", 
    booked: true,
    hours: [
            {name: "08-09", booked: true},
            {name: "09-10", booked: true},
            {name: "10-11", booked: true},
            {name: "11-12", booked: true},
            {name: "12-13", booked: true},
            {name: "13-14", booked: true},
            {name: "14-15", booked: true},
            {name: "15-16", booked: true},
           ]
    },
];   
    
    
    
})();    
 

 
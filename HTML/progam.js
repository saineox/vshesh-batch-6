// Number - Any numerical values. It can be Positive, Negative, Fractional, Decimal value

// String - Any Text value. It can be A-Z, a-z, 0-9, special character (@#$%). It should be enclosed in Single or Double Quote ('', "")

// Boolean - Either true or false

// null - Non Existance of value

// undefined - Value is not yet definied. 

// Variable Declaration 
// syntax:
// var variable_name = value; 
// variable_name - we need to provide a meaningful name, It should contains A-Z, a-z, 0-9, _ , $
// value - Number, String, Boolean, null, undefined

var username = "Karthick Kumar";
var user_age = 28;
var result = true;
var futureValue; //A variable has been declared but its value not yet assinged.

console.log(username);
console.log(user_age);
console.log(futureValue);

user_age = 30;

console.log(user_age);

//Student Information 

var first_name = "mr.abc";
var last_name = "xyz";
var email_id = "abc@ymail.com";
var roll_number = 4795854;
var mark = 80;

/*
Object - It is a collection of key and value (collection of property)
syntax
var variable_name = {
  key : value,
  key : value
}

key - It is also similar to variable name and it should be unique inside the Object.
Value - Number, String, Boolean, null, undefined, Object, Array, Function 
*/

var student_information = {
  first_name : "mr.abc",
  last_name : "zyx",
  email_id : "abc@ymail.com",
  roll_number : 457856,
  mark : 80
};

console.log(student_information);

/*
Operations in Object 
1. Read a value from Object
2  Insert a new value to the Object
3. Edit/Update a value from Object
4. Detelte value from Object 

To Read a value from Object
syntax
object_variale_name.key  
*/

console.log(student_information.email_id)

/*
To Insert a new value to the Object
syntax
object_variable_name.newKey = newValue;
*/
student_information.contact_number = 98755465256;
student_information.blood_group = "A +ve";

/*
To Edit/Update a value from Object
syntax
object_variable_name.key = newValue;
*/

student_information.last_name = "kumar";
student_information.email_id = "k@gmail.com";

/*
To Detelte value from Object 
syntax 
delete object_variable_name.key;
*/
delete student_information.blood_group;

// Array - It is list of similar data type
// syntax 
// var variable_name = [value1, value2, ... , valueN];
// Value - Number, String, Boolean, null, undefined, Object, Array, Function 

var list_of_numbers = [1, 2, -20, 2.5, 48, 89, 75, 67, 78];

var list_of_names = ["mr.abc", "mr.cde", "mr.see", "mr.pous"];

var list_student_information = [
  {name : "mr.abc", roll_number : 478569856, email: "abc@gmail.com" },
  {name : "mr.cde", roll_number : 7844946465, email: "cde@gmail.com"},
  {name : "mr.zyx", roll_number : 5852655555, email: "zyx@gmail.com"}
];

console.log(list_of_names);
console.log(list_student_information);
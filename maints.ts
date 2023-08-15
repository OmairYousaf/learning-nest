// import dotenv from 'dotenv';
// import fs from 'fs';

// // Function to load environment variables from a .env file
// function loadEnvFile(filePath: string) {
//   const contents = fs.readFileSync(filePath, 'utf-8');
//   const parsedEnv = dotenv.parse(contents);
//   for (const key in parsedEnv) {
//     process.env[key] = parsedEnv[key];
//   }
// }

// // Load environment variables from the specified .env files
// loadEnvFile('.env');
// loadEnvFile('.env.conf')

// // Now you can access the environment variables from all loaded files
// console.log('API Key:', process.env.DB);
// console.log('Database URL:', process.env.DATABASE_URL);





// Simple Class,Property,Method decorators

// function ClassDecorator(target: Function) {
//   console.log('Class decorator:', target);
// }

// // Property Decorator
// function PropertyDecorator(target: any, propertyKey: string) {
//   console.log('Property decorator:', propertyKey);
// }

// // Method Decorator
// function MethodDecorator(target: any, methodName: string) {
//   console.log('Method decorator:', methodName);
// }

// // Parameter Decorator
// function ParameterDecorator(target: any, methodName: string, parameterIndex: number) {
//   console.log('Parameter decorator:', methodName, parameterIndex);
// }

// @ClassDecorator
// class MyClass2 {
//   constructor(){
//     console.log('cons. called...')
//   }
//   @PropertyDecorator
//   property: string;

//   @MethodDecorator
//   method() {}

//   methodWithParams(@ParameterDecorator param: string) {}
// }


import { CheckString } from './src/practise/decorator';

class MyClass1 {
  @CheckString
  myString: any;
}

const obj1 = new MyClass1();

try {
  obj1.myString = 'Hello, world!';
  console.log(obj1.myString);
  console.log('next with true')
} catch (error) {
  console.error(error.message);
}

try {
  obj1.myString = 42; // This will throw an error
  console.log(obj1.myString);
  console.log('next with false')
} catch (error) {
  console.error(error.message);
}




















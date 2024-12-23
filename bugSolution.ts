function printName(name?: string): void {
  if (name === undefined) {
    console.log('Name not provided');
  } else if (name === null) {
    console.log('Name is null');
  } else {
    console.log(name);
  }
}

printName(); // Prints 'Name not provided'
printName(undefined); // Prints 'Name not provided'
printName(null); //Prints 'Name is null'
printName('Alice'); // Prints 'Alice' 
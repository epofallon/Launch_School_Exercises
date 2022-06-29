function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*
The `logger` function is defined inside the scope of the `debugIt` function.
The `logger` funciton has access to variables declared in its surrounding scopes
which includes the `status` variable. This is due to lexical scoping rules.

So when `logger` is invoked on `line 7`, then `console.log(status)` is executed.
JS first looks within the scope of the `logger` function for a `status` variable.

When it doesn't find one, it looks in the next outer scope, which is the scope of the `debugIt` function.
JS finds the `variable` status in this scope, then passes it's value to `console.log`,
where it is outputted. */
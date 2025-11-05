### Closing the dialog and reseting the form inside it

Whenever we try to close a dialog using any of the ways available whether it be through user interaction like clicking outside the dialog or the Esc key or through the button that the dev intended, a close event is triggered. We can simply use that event to add a line in js to reset the form using `form.reset()` method.


### Delete and Change read status events

There were two ways of doing this. Either we attach an eventlistener to all the book cards that we were creating or we could use evern delegation. It gives us access toall the events happeingn inside the element. We can match clicks by checking which element was clicked using the `e.target.matches("selector")`, then work on it. 

### Selecting the parent element of the target

We can either use the `.parentElement` method on the target or we can find using the `.closest("parent-class-name")` method. 

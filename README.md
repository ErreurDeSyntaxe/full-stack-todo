# full-stack-todo
An in-browser to-do application

# Preview

<div align="center">
    <img src="./project-preview.png">
</div>

# Links

-[Assignment Page (Jan '24)](https://www.theodinproject.com/lessons/node-path-javascript-todo-list)

-[Finished Project](https://erreurdesyntaxe.github.io/full-stack-todo/)

# Built With

-HTML  
-CSS  
-JavaScript  
-webpack  
-localStorage  

# Notable Features

-Default project  
-Project creation, deletion  
-Task creation, completion, deletion  
-Task title, date, status  

# Challenges

-designing on paper before coding  
-webpack  
-localStorage  

# Diary

The project is daunting. The complexity of it makes me wish for a teacher by
my side.  I will start with creating the DOM in index.html and styling it 
through style.css. Then I will migrate the DOM creation/manipulation to 
index.js.

After many days of work, I can safely say that this approach was a grave mistake
because of how much time it cost me when I needed to redo the project. I didn't
need to start from scratch, but I had to go back and rework the logic through 
the console before dismantling much of the UI and the UI building functions. 

Interestingly, my architecture was not perfectly compatible with localStorage.
In my project, tasks do not know which project they belong to because they sit
in their project's array. localStorage however, doesn't allow for the storage
of objects. Rather, it allows for the storage of strings. This upset my apple 
cart in a big way. 

I was able to store the project names, tasks, and task values, but because
each task was ignorant of their project, it was difficult to send them back to
the right project. It was so difficult in fact, that I decided to give up this 
feature of the project. I learned about localStorage, and in the future, I will
design my data to work better with JSON.stringify. 

But for now, that is it. A rather well done project that is not perfect.
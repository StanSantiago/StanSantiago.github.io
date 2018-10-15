## Homework
This assignment involved learning learning C# syntax and usage via translating a preexisting Java program that outputs all binary values up to the input decimal value.


### Links
* [Assignment Overview](http://www.wou.edu/~morses/classes/cs46x/assignments/HW3.html)
* [Repository with code](https://github.com/StanSantiago/460_HW3)

### Visual Studio 2017
While I used Eclipse briefly to work with the Java code provided, for writing C# I already had Visual Studio 2017 installed as my main IDE for C and C++ (the main language I am experienced in at the time of writing).  This made it easy to just start up a new project and get to work.  I found the project structure of Visual Studio to be perfect for adding new class files, they were integrated immediately upon creation.

Of course, I did not want to have Git push every file in the project, so I made use of Github's VisualStudio.gitignore from their [.gitignore repository.](https://github.com/github/gitignore)  This contains a number of .gitignore templates that make uploading projects from various ides much simpler, skimming off unnecessary files from the upload.

### Translating the Code
Since this assignment had a preexisting code to work off of, most of the labor involved simply referencing it, and making tweeks where needed to accomidate the differences between Java and C#, since of the logic itself used works fine in both languages.  The main difference is that throwing exceptions opperates just a little differently in C#.  When writing my own C# in the future, the logic should be easy to approach, I will just need to remember to use namespace structure, and look up certain built in methods when I do not know them by name.

The fully runnig code generates the following, using 10 as an example input

![ExampleRun](https://stansantiago.github.io/460/HW3/HW3_Running.png)

### Issues Merging
A problem I encountered once before with Git, and specifically while working with Github, is Git being unable to acknowledge changes to the master branch.  I would be able to check the master branch on Github, and see that the master branch was how it was innitially created, and look at the feature branch, which was properly up to date, and matched my local repository.  Yet when I attempted to merge on the command line them, it would consistantly say there were no differences with the current feature branch and master branch.  Eventually, I created a pull request on the Github page, and used that to successfully merge the branches, but I need to figure out in the future what is causing Git to see the master branch as always matching the local repository and/or featuer branch.

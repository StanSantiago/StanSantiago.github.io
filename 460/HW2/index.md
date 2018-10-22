## Homework
This assignment involved learning javasctipt with jQuery to create an interactive website, along with using the branch feature of git.


### Links
* [Assignment Overview](http://www.wou.edu/~morses/classes/cs46x/assignments/HW2.html)
* [Repository with code](https://github.com/StanSantiago/460_HW2)
* [Demo of Site](https://stansantiago.github.io/StanSantiago.github.io/460/HW2/site/)

### Planning
I decided to make a simple program that wrote out a table for y=mx+b, with the user specifying m, b, and a range for x.  Knowing that computers do not much like doing math past certain values, I also decided it would be limited:  a range no greater than 10(which is probably much smaller than the computer would be capable of, but keeps the scroll size lower), and all values must be between -1000 and 1000, creating a range for the y output of -1001000 to 1001000, well within what the script will compute.

![SiteMockup](https://stansantiago.github.io/460/HW2/HW2_site_layout.png)

Within the mockup, the black box is a title header across the top of the page, the gray box is the bootstrap container, and the wite boxes are the fields for submision, and below those, the table output.

### Github Branching
After creating the initial files, most of the work for this assignment was done on a new "features" branch on the remote repository.  This was created and pushed to via the following:
```bash
#Creating the new branch
git checkout -b feature
#Push changes the new branch to remote
git push origin feature
```

Using this allows a feature to be developed and tested without disrupting others.  Once the feature is completed, it can be pushed to the master branch by merging the branches.  To do so I used the following.

```bash
#While using feature as the working branch
git fetch origin master
git merge master
git push feature:master
```

This will bring the program back together as one (although there may be other branches still open on larger projects.)

### Javascript and jQuery
The main tool to learn for this assignment, javascript is a fairly simple language to learn.  Using it, I was able to create a series of checks for the validity of the input data, and a loop that generated html to fill in a table for the results.  That table is where jQuery comes in.

```javascript
  //Checks validity of the input
  if(isNaN(m) || isNaN(b) || isNaN(xMin) || isNaN(xMax)){
    content = "<p>Please input numbers</p>";
  }else if((Math.abs(m) > 1000) || (Math.abs(b) > 1000) || (Math.abs(xMin) > 1000) || (Math.abs(xMax) > 1000)){
    content = "<p>Please use values between -1000 and 1000</p>";
  }else if (Number(xMin) > Number(xMax)) {
    content = "<p>x minimum must be less than x maximum</p>";
  }else if ((Number(xMax) - Number(xMin)) > 9) {
    content = "<p>Range of x must be no greater than 10</p>";
  }
  //Fills content variable with a table class, and calculates the contents of said table
  else{
    content = "<table class = \"table table-hover\"><thread><tr><th>x</th><th>y</th></tr></thread><tbody>";
    for(i = Number(xMin); i <= Number(xMax); i++){
      content += '<tr><th>' + i + '</th><th>' + (i * Number(m) + parseInt(b)) + '</th></tr>';
    }
    content += "</tbody></table>";
  }

  //appends error or table to index.html
  $('#table_here').append(content);
```

Once content is filled as a string, with either the error message, or the html code for the full table, the DOM is modified to show the result directly on the screen.  This allows for active and interactive web pages, a staple of web design for pretty much as long as I can remember.  The hardest part here was wrestling with how javascript interrpreted inputs.  This is why most numbers are within the Numbers() function, if they were not, they would be read as strings, creating all sorts of problems.

All in all, I feel this website turned out fine.  I got a good chance to try scripting in html via javascript, and jQuery is clearly a valuable tool for creating engaging websites.

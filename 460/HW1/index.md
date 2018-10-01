## Homework
This assignment involved learning HTML/CSS to make a website, and using git via the command line to push the changes to a repository.


### Links
* [Assignment Overview](http://www.wou.edu/~morses/classes/cs46x/assignments/HW1.html)
* [Repository with code](https://github.com/StanSantiago/460_HW1)
* [Demo of Site](https://stansantiago.github.io/StanSantiago.github.io/460/HW1/site/)


### Seting up git
I've worked both with git and github before, with git already on my command line, but my experience was limited.  This had been my first time really managing a project via the command line in particular.  I created an empty github repository via the website, and then used the command line to add, commit and push the local files I had made (initially index.html, styles.css and README.md) via the Windows Command Prompt.

```bash
#Initialize the local git repository, then stage and commit the changes
git init
git add .
git commit -m "Initial commit; create a project README"
#Target the remote repository, then push the changes to it
git remote add origin https://github.com/StanSantiago/460_HW1
#Requesting a connection here causes a prompt for valid login credentials
git push origin master
```

### HTML/CSS
Before even starting here, I made sure that I had found some tutorials, in particular this series of videos had a large number of topics clearly presented: https://www.youtube.com/playlist?list=PL0eyrZgxdwhwNC5ppZo_dYGVjerQY3xYU

I chose Atom to code in, and feel good about this choice.  It has very useful utilities to help with HTML, including some limited auto completion, in addition to its nice and simple UI.  From there, my first version of index.html was very simple: a call to Bootstrap, used later for some classes later on, and some basic text in both a header and paragraph.

```HTML
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Webpage Title Mainpage</title>
    <meta charset = "UTF-8">
  </head>
  <body>
    <div class="page-header">
      <h1 class = "text-center">
        Website Title
      </h1>
    </div>
    <p title ="this is content">This is a website</p>
  </body>
 </html>
```

This loads up a very minimal website, that developped over each change to the final product.  At first there I did not even control the placement and positioning of the text, making it effectively an overglorified document.

Since the aim was more to make use of HTML, there is not much any content on any of the pages, really just short filler text.  I wanted a background image at the least to brighten things up a bit, and made sure to grab a stock photo from a free usage website.

### Reflections
If there is one thing that I feel I need to learn a bit better after finishing the final piece, it is Bootstrap, I did not make much use of it, outside of using some of its table classes in contact.html.  However, there are plenty of resources and documentation to learn from, and make better use of it in the future.

This was a good project to work on, even if the website was simple.  It was good to learn HTML somewhat on my own, and I can already see how I will apply this in later projects.

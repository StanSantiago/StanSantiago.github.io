## Homework 4
This assignment involved using .NET MVC features to create an interactive web app, featuring a Miles to Metric Converter, and a Color Mixer(which I did not complete).

### Links
* [Assignment Overview](http://www.wou.edu/~morses/classes/cs46x/assignments/HW4.html)
* [Repository with code](https://github.com/StanSantiago/460_HW4)

###Initial MVC Project
To start with, I just made a simple MVC project in Visual Studio 2017.  With this done, I renamed some of the existing files that would be unused to the tasks needed:  Converter and Color.  This meant also redoing the action links that were at the top of the screen on all pages in the View file _Layout.cshtml

```HTML
<div class="navbar-collapse collapse">
  <ul class="nav navbar-nav">
    <li>@Html.ActionLink("Home", "Index", "Home")</li>
    <li>@Html.ActionLink("Mile Converter", "Converter", "Home")</li>
    <li>@Html.ActionLink("Color Mixer", "Color", "Home")</li>
  </ul>
</div>
```

From there, I used these links as an example to add ActionLinks to the buttons on the main page, linking to them.


```HTML
<p>@Html.ActionLink(HttpUtility.HtmlDecode("Click here! &raquo;"), "Converter", "Home", new { @class = "btn btn-primary" })</p>
```

###Miles to Metric Converter
The distance conversion app works by taking the miles as an input form, and the metric to convert from a radial selection.  This puts the values needed into the url of the site, letting the Controller file locate it, and use it to calculate the result, and inject it back into the html via a ViewBag.

HTML:
```html
<div class="row">
    <form method="get">
        <div class="col-md-6">
            <h3><label for="Miles">Miles input:</label></h3>
            <input id="MilesConv" name="Miles" type="number" step="0.01" required formethod="get" />
            <input type="submit" />
        </div>
        <div class="col-md-6">
            <h3><label for="Metric">Select a unit:</label></h3>
            <div class="w3-container">
                <ul style="list-style-type:none">
                    <li><input type='radio' id='milli' name='Metric' value='millimeters' />millimeters</li>
                    <li><input type='radio' id='centi' name='Metric' value='centimeters' />centimeters</li>
                    <li><input type='radio' id='meter' name='Metric' value='meters' />meters</li>
                    <li><input type='radio' id='kilo' name='Metric' value='kilometers' />kilometers</li>
                </ul>
            </div>
        </div>
    </form>
</div>

<h3>@ViewBag.Message</h3>
```

Controller:
```C#
public ActionResult Converter()
{

    double final = 0;

    string metric = Request.QueryString["Metric"];
    double miles = Convert.ToDouble(Request.QueryString["Miles"]);

    final = miles * 1.60934;

    if (metric == "millimeters")
        final *= 1000000;
    else if (metric == "centimeters")
        final *= 100000;
    else if (metric == "meters")
        final *= 1000;
    else if (metric == "kilometers")
    { }
    else if((metric == "")&&(miles == 0))
    {
        ViewBag.Message = "";
        return View();
    }
    else
    {
        ViewBag.Message = "Please input valid values";
        return View();
    }

    ViewBag.Message = miles + " miles is " + final + " " + metric;

    return View();
}
```

The running site looks like this:
![ExampleConv](https://stansantiago.github.io/460/HW3/HW4_Converter.png)

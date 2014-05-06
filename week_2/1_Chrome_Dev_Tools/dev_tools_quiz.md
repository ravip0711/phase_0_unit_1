#### Include an inline screenshot of your codeschool's points from the profile page:

  https://flic.kr/p/ndtZ19

##QUIZ
* Explain which tabs support the following actions and how.
  * Realtime editing of HTML and CSS 

    The left side tab support the realtime editing of HTML and the right side tab supports the realtime editing of CSS.

  * Javascript Debugging

    I am actually not sure exactly where this is or what it relates to in the dev tools.


  * Performance Optimization 

    When you open up your dev tool Inspect, instead of the "Elements" tab, click on the "Network" tab. That tab will show you all your performance optimization details and timeline of how long it takes for elements within the webpage take to retrieve and display. You can also preview images with this.

* What's the quick key for your OS to spawn the Dev Tools inspector?

  alt/option + command + I

* Go to http://www.postmachina.com/ and analyze and tweak this nicely designed page.
  * What is the current background color for the page?  (Surprisingly, it's not just black!)

    It is #0b0f11.

  * Tweak the background color to white.
  * Tweak the height of the side bar that contains the logo.  Shrink it down to 85px.
  * Roll over the navigation links.  When you hover over them, they dissapear.  Let's change the hover color to black instead.
  * Now take a screenshot of your new (and maybe not so improved) design.  It should match this screenshot: http://postimg.org/image/5ak1jkpl5/
  * Upload your own image to the web using an image hosting service.  It should match the image above. The last nav link in the image above is black because the mouse was hovering there when the screenshot was taken. Do the same, and don't take a screenshot of your whole desktop, just the browser window. (This is part of the challenge.)

    https://flic.kr/p/nwHsjg

* For the postmachina website, why can't you tweak the color of the text "The most important things are not things"?  Please explain.

  You can't tweak the color of the text because its a picture file. The image on the screen is linked to a picture from another location.

* Go to www.ticketswizard.com and analyze the page.  
  * What is the largest image on the website? 

    It is the image of New York City's Time Square.

  * Explain how you would find out this information, and list the URL of offending image here and how big it is.

    I first opened up dev tool Inspect. Then went to the "Network" tab and then refreshed the page so it was up to date with a clear cache. Then clicked on the "Size" tab so it would sort all the elements on the page by file size. The largest file was a image file because the file type is listed under "Type". I then clicked on that image element. Then I clicked on the "Preview tab". This is where I found the URL link for it and the dimensions of the image and file size. The image file size is 316 KB.

  http://www.ticketswizard.com/Images/Catalog/92624182-c482-4a35-8da2-4fbf2f502e94_Large_Large.png

* Test the www.ticketswizard.com website with google's [PageSpeed Insights](http://www.ticketswizard.com/).  (You can also download the chrome plugin).  What is the lowest hanging fruit to optimize the website?  How many kilobytes of data can be eliminated?

  The website needs to optimize its images, leverage browser caching, and eliminate render-blocking JavaScript and CSS in above-the-fold content. 895.2 Kb of data can be eliminated to speed up the webpage.


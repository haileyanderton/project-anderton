Week 1

This week I gathered the data that I will be using for my project. I am using the information gathered from this 2015 report. http://wmc.3cdn.net/83bf6082a319460eb1_hsrm680x2.pdf

I then formatted the basic html markup wrapping everything in divs with separate id and class names in order to make the css and js process easier.

Next, I researched the best way to make divs appear over an image, and found that the best way would be to format an image in photoshop, set it's position to absolute on my page, and make sure the content that will overlap with it has a higher z-index. I got some of these ideas from https://css-tricks.com/text-blocks-over-image/ after typing into google. It took a long time to get the css and positioning perfect on this and I found myself thinking that I was probably going about this in a less-than-efficient manor. In hindsight, I should've researched some sort of plug in or something that allows me to make an actual image responsive to clicks. It's not really how I wanted it to look.

I am frustrated because I am not sure how to get the visible divs on the woman's body to eventually respond to a click/hover without looking weird. I attempted to section the image off in photoshop, but I originally wanted to figure out a way to make the actual div fit the border of the image. I don't know if this is something I can fix. I might end up creating a button on each of the sections, instead of making the whole div respond to hovering/clicking.

Lastly, I looked back at some of my old work to see if I could figure out a way to create a popup div that appears when you click on a visible div. I successfully executed a hide/show function, looking back at my music-sampler assignment, but I am still working on a way to make a fadeIn effect apply to the correct specific divs on click. I want my page to look more modern and three-dimensional than it's currently looking, so that will definitely be a challenge. Also, I have to make sure it is responsive and include media queries. I am no where near finished, but I'm on my way!

Week 2

I did a TON this week. To make the absolutely positioned image of the woman easier to control, I cut the image into parts in Photoshop and put it into multiple divs and re-positioned them. Then I picked the font families and updated some styling because I wanted to reassure myself that my project was still a good idea and had the potential to actually look visually appealing.

After I made it look a little prettier, I gained some confidence and began to figure out the Javascript and jQuery to make my hidden divs fadeIn on click. I actually mostly referenced the music-sampler assignment and logically thought through what needed to take place to hide, fadeIn, and then hide all of my divs again.

Next, I changed the opacity of the background colors of the hidden divs using rgba colors to make them slightly transparent. I realized I needed to do something about the bold text layered on top of the background picture that was showing through and distracting from the content of the overlapping divs. So, I added a function to my hide/fadeIn switch statement that told all of the bold text categories to hide on click in addition to the fadeIn of the overlapping div.

This brought up the next issue: I needed to close out the overlapping div, and I needed the bold category text to reappear when I did so. I definitely consulted Google on this one. Using bits of this tutorial

https://codedump.io/share/PzocG65CMMb9/1/adding-close-button-in-div-to-close-the-box

and this fiddle

http://jsfiddle.net/xftr5/19/

I figured out a way to make a clickable 'x' button in the top of my overlapping div. Then I added a statement/function in my javascript that told the overlapping div to close on click, while simultaneously making the bold categories reappear on the image of the woman.

Additionally, I added a height and an overflow-y to the overlapping divs so I scroll bar would appear to hold all of the content. I also made the category text on top of the image of the woman change color on hover to alert the viewer to click.

Next, I added all of my charts. Most of the statistics I'm using are very basic and don't require the complexity of HighCharts, so I decided to use Google Charts instead. I took time figuring out how to change some of the styling settings to change the colors and fonts of the charts, as well as the background color to transparent. Everything is FINALLY coming together and looking very similar to my original idea.

For Week 3, I plan to edit and perfect all of the content, text and facts, as well as source everything correctly, as I know I have missed attributing some sources. I also want to check that I have styled everything correctly, and add things like full font stacks, etc. I definitely want to make the 'x' that appears in the corner of the overlapping divs fixed so it scrolls with the page so readers can exit at any time. Finally, I need to make the page responsive. I know that is going to be frustrating, so I saved the best for last.

Week 3

My first objective this week was to edit all of the content and facts to make sure everything made sense and was attributed to the correct source. I included multiple hyperlinks, making sure to be meticulous about citing the sources.

I then wanted to figure out a way to make the 'x' close button fixed to the container div so it would scroll as the viewer scrolled. Unfortunately, I found it very difficult to make this work because the concept of fixed inherently means that the element is fixed to the browser, not the div containing the element. So as an alternative option, I decided to keep the floated 'x' and make an addition to the jQuery that let the user click out of the overlaying div by simply clicking on anywhere but the div. I used this stack overflow response to make this possible

http://stackoverflow.com/a/7385673

and added that the category text should also reappear. I thought this was a good alternative and made up for the fact that the x did not scroll with the div.

The biggest challenge was making the page responsive. Throughout the whole process, I used www.responsinator.com to view what my site looked like from different devices. The first thing I did was make the body have a width of 80% to keep everything contained with plenty of space. Then I noticed when I reduced of the size of the window, the "Underrepresented" title became too big at smaller breakpoints. To fix this I made media queries that told the font to change sizes at certain breakpoints. I did the same thing for the description paragraph at the top of the page.

The next problem was that the overlapping divs were collapsing at smaller breakpoints, so I changed all of the div widths to 90%, and added a decrease in the font size of those paragraphs at certain breakpoints.

Then, I had to figure out a way to make the Google Charts decrease in size at smaller breakpoints. I researched and concluded that there was nothing I could do to the javascript to make this happen, so I found a simple CSS solution and used the zoom property to make the graphs scale down on smaller screens. When I was validating my HTML and CSS at the end, the validator said that zoom was not an acceptable property because it is only compatible with a few browsers, so I researched and found that the transform: scale() property was a better option, and decided to use that instead.

http://www.w3schools.com/css/css3_2dtransforms.asp

Final Summary

After reading through the project, adding a line about me, increasing the size of the graphs in my media queries, checking every hyperlink and validating everything, I am pleased with the final result and am proud of all that I have accomplished! The overall design of my project is very similar to my original idea, and works the way I originally wanted it to. Overlapping the divs and making them behave properly was probably the biggest challenged I faced, followed by the addition of the Google Charts and figuring out a way to format them correctly. Overall, I feel that I have improved in my HTML, CSS, JavaScript and jQuery skills immensely and that I am ready to progress to more advanced areas. The biggest realization I have had while making this project is that there is nothing better than the feeling you get the moment your code FINALLY WORKS!

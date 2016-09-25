# ui-sample
his project requires node.js, which can be downloaded here if you don't have it previously installed:
https://nodejs.org/
To run, download or clone this directory.
Navigate to it in the terminal and type npm start.
The local server is running on port 8000. Open a browser and navigate to localhost:8000.


Notes about design choices:
This is a sample app built with Angular.js and Bootstrap, with a build script based on angular seed: https://github.com/angular/angular-seed.
A primary goal was simplicity. I removed many of the dependencies from angular seed - particularly test suites - for the sake of readability and avoiding bloat.

The index file houses the header and nav and the market/shipping views are combined in one template.

The data all resides in a single mock service that returns an object containing the product details.

In terms of structure and data flow, my decision to keep the item details and shipping template/controller combined was based on the fact that the controller was a manageable size, and the shipping information is included in the "Market" section. This works as-is, but refactoring to have a separate route/controller/template would likely make more sense in a larger application.

My css structure here is a bit out of context. My choices are a clash of my desire to keep a small app simple by not loading preprocessors, and the workflow I've become accustomed to making namespaced angular modules leveraging  less and sass. Without those abstractions in place, what I have done here severely limits scalability. 

Areas for improvement:
Principally, I did not get all the styling in the wireframes correct, particularly spacing.
Styling for the 3 equal height columns betrays that I could be better versed in flexbox. Classes applied here seem to conflict with bootstrap grid classes that would have more easily facilitated a responsive layout "out of the box", as well as column offsets on the shipping page. The buttons are also not justified to the bottom as they should be.
	
My handling of the navbar in general could be more elegant, and leverage more of bootstrap. The hamburger show/hide was thrown in last minute as "extra credit", but could be prettier. While not in the requirements, it would be improved with some animation and hover states.

The form validation is not as robust as I would like, specifically the state dropdown.

Several other more minor tweaks keep catching my eye! A quote I got sometime in the last few weeks was "Saying software done is like saying the the lawn is mowed."

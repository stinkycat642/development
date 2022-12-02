# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`
https://stinkycat642.github.io/development/
### Goal and Value of the Application
This is a tea shop website, so the primary goal of this application is to be an interface for selecting and adding to cart certain teas. You can learn about teas from basic description, and you can filter and search caffeine content and whether it’s loose leaf. You can also sort by caffeine content or price. 
### Usability Principles Considered
In terms of usability, I wanted to make the main information big and readable, and those are the basic headers and instructions, sort and filter options, and especially the tea information and their pictures. I tried to use different colors (with a general light/pale theme) and white borders to separate things properly. I was hoping the Tea Display/Selection, and specifically the core information (price, caffeine, etc.), having the boldest colors and the most different colors would make it the most attractive. It also the biggest, while letting all elements still always be in view. The buttons (the only interactive elements) are especially the only deep, bold colors, so I hope that encourages interaction. I tried to give information simple and brief to make it readable.
### Organization of Components
Code is located in App.js, with two main Components: DisplayItem.jsx and CartItem.jsx, for buyable and in-cart items respectively. DisplayItems have props corresponding directly to my JSON objects: name, price, caffeine, etc., along with onButtonClick(), which from App.js will use state to make a corresponding CartItem when the item is selected by the user and modify add it the next state’s cart variable. CartItems have the same props plus a quantity property so we can track the amount added to cart. Note: quantity is not stateful, instead cart is stateful and functionally makes or replaces the CartItem with a new object with adjust quantity. 
### How Data is Passed Down Through Components
Generally, I use state on displayList and cart to maintain which JSON objects are to be displayed or in the cart and in what order, and there are updated whenever the add to or remove from cart buttons are clicked in Display/CartItems (setVar() funs are passed into the buttons with their parents onButtonClick properties)
### How the User Triggers State Changes
All through buttons with onClicks that involve setDisplayList or setCart as described above, mainly adding and removing to cart, filtering, sorting, resetting.

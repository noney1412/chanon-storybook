### Copy to Clipboard

MDN : [Link](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Interact_with_the_clipboard)

W3School : [Link](https://www.w3schools.com/howto/howto_js_copy_clipboard.asp)

### example

```jsx
<input type="text" value="Hello World" id="myInput">
<button onclick="myFunction()">Copy text</button>
```

```js
function myFunction() {
	/* Get the text field */
	var copyText = document.getElementById("myInput");

	/* Select the text field */
	copyText.select();

	/* Copy the text inside the text field */
	document.execCommand("Copy");

	/* Alert the copied text */
	alert("Copied the text: " + copyText.value);
}
```

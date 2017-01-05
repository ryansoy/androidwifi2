// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var androidwifi2 = require('com.restado.androidwifi2');
Ti.API.info("module is => " + androidwifi2);

label.text = androidwifi2.example();

Ti.API.info("module exampleProp is => " + androidwifi2.exampleProp);
androidwifi2.exampleProp = "This is a test value";

if (Ti.Platform.name == "android") {
	var proxy = androidwifi2.createExample({
		message: "Creating an example Proxy",
		backgroundColor: "red",
		width: 100,
		height: 100,
		top: 100,
		left: 150
	});

	proxy.printMessage("Hello world!");
	proxy.message = "Hi world!.  It's me again.";
	proxy.printMessage("Hello world!");
	win.add(proxy);
}


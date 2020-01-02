// flatten image for jpeg format
app.activeDocument.flatten();

// Cut off .psd extension
var filename = app.activeDocument.name.slice(0, -4);
// Or comment previous line and uncomment the following to keep the .psd extension and still append the .jpg extension
//var filename = app.activeDocument.name;

saveJpeg(filename);

// Saves new JPG in the same folder as the PSD file
function saveJpeg(name) {
	var doc = app.activeDocument;
	var file = new File(doc.path + '/' + name + '.jpg');
	var opts = new JPEGSaveOptions();
	opts.quality = 12;

	doc.saveAs(file, opts, true);

	// This next line closes the original PSD file without saving any of the changes to it (since you just wanted the changes for the jpg)
	doc.close(SaveOptions.DONOTSAVECHANGES);
}



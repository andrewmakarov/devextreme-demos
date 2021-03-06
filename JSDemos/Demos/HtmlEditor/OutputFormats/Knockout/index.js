window.onload = function() {
    var editorValueType =  ko.observable("html");

    var viewModel = {
        valueContent: ko.observable(),
        htmlEditorOptions: {
            height: 300,
            valueType: editorValueType,
            toolbar: {
                items: [
                    "undo", "redo", "separator",
                    {
                        formatName: "size",
                        formatValues: ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"]
                    },
                    {
                        formatName: "font",
                        formatValues: ["Arial", "Courier New", "Georgia", "Impact", "Lucida Console", "Tahoma", "Times New Roman", "Verdana"]
                    },
                    "separator",
                    "bold", "italic", "strike", "underline", "separator",
                    "alignLeft", "alignCenter", "alignRight", "alignJustify", "separator",
                    "color", "background"
                ]
            },
            onValueChanged: function(e) {
                this.valueContent(e.value);
            }
        },
        buttonGroupOptions: {
            items: [{ text: "Html" }, { text: "Markdown" }],
            selectedItemKeys: ["Html"],
            onSelectionChanged: function(e) {
                editorValueType(e.addedItems[0].text.toLowerCase());
            }
        }
    };

    ko.applyBindings(viewModel, document.getElementById("demo"));
};

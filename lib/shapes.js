// Parent class for creating SVG shapes
export class SVGShape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }

    render() {
        // We shouldnt render the SVGShape class.
        // Children inheriting this class should have their own render logic
        throw new Error('Cannot render SVGShape instance');
    }

    // Update the color of the shape
    setColor(color) {
        this.shapeColor = color;
    }

    // Update the color of the text
    setTextColor(color) {
        this.textColor = color;
    }

    // Change the text displayed
    setText(text) {
        if (text.length < 1) {
            throw new Error("Text has a length of less than one");
        }

        if (text.length > 3) {
            throw new Error("Text has a length greater than three");
        }

        this.text = text;
    }

    // Generate the outer svg strcture
    #getSVGElementOuterWrapper() {
        return [
            '<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">',
            '</svg>'
        ]
    }
}

export class Circle extends SVGShape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

export class Triangle extends SVGShape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}

export class Square extends SVGShape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}
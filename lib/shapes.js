// Parent class for creating SVG shapes
export class SVGShape {
    _width = 300;
    _height = 200;

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
    // Returns an array of length 2 so that
    // the inner components can be inserted inbetween
    _getSVGElementOuterWrapper() {
        return [
            `<svg width="${this._width}" height="${this._height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`,
            '</svg>'
        ];
    }

    // Return the SVG representation of the text
    _getSVGTextAsElement() {
        return `<text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="80px" font-family="Arial" dy="0.4em">BC</text>`
    }
}

export class Circle extends SVGShape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        const outerWrapper = this._getSVGElementOuterWrapper();
        const textSVG = this._getSVGTextAsElement();

        const circleSVG = `<circle cx="${Math.floor(this._width * 0.5)}" cy="${Math.floor(this._height * 0.5)}" r="${Math.floor(this._width * 0.5)}" fill="transparent"/>`;
        return outerWrapper.splice(1, 0, circleSVG, textSVG).join("");
    }
}

export class Triangle extends SVGShape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        const outerWrapper = this._getSVGElementOuterWrapper();
        const textSVG = this._getSVGTextAsElement();

        // Determine the vertices of the triangle
        const trianglePoints = [
            // Bottom left
            [0, this._height],
            // Top middle
            [this._width * 0.5, 0],
            // Bottom right
            [this._width, 0],
        ];

        const triangleSVG = `<polygon points="${trianglePoints.join(" ")}" fill="${this.shapeColor}"/>`;
        return outerWrapper.splice(1, 0, triangleSVG, textSVG).join("");
    }
}

export class Square extends SVGShape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }
}
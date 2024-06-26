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
        throw new Error('Cannot render SVGShape instance!');
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
        // Get the SVG container and the svg text
        const outerWrapper = this._getSVGElementOuterWrapper();
        const textSVG = this._getSVGTextAsElement();

        const smallestDimension = Math.min(this._width, this._height);
        const circleSVG = `<circle cx="${Math.floor(this._width * 0.5)}" cy="${Math.floor(this._height * 0.5)}" r="${Math.floor(smallestDimension * 0.5)}" fill="${this.shapeColor}"/>`;
        
        outerWrapper.splice(1, 0, circleSVG, textSVG);
        return outerWrapper.join("");
    }
}

export class Triangle extends SVGShape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        // Get the SVG container and the svg text
        const outerWrapper = this._getSVGElementOuterWrapper();
        const textSVG = this._getSVGTextAsElement();

        // Determine the vertices of the triangle
        const trianglePoints = [
            // Bottom left
            [0, this._height],
            // Top middle
            [this._width * 0.5, 0],
            // Bottom right
            [this._width, this._height],
        ];

        const triangleSVG = `<polygon points="${trianglePoints.join(" ")}" fill="${this.shapeColor}"/>`;
        outerWrapper.splice(1, 0, triangleSVG, textSVG);
        return outerWrapper.join("");
    }
}

export class Square extends SVGShape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        // Get the SVG container and the svg text
        const outerWrapper = this._getSVGElementOuterWrapper();
        const textSVG = this._getSVGTextAsElement();

        // The size of the rectangle should be the maximum size
        // of the smallest dimension so that it fits onto the svg
        const rectangleSize = Math.min(this._width, this._height);
        // Determine the X position of the rectangle which should be centered
        const x = (Math.max(this._width, this._height) - rectangleSize) * 0.5;

        const rectangleSVG = `<rect width="${rectangleSize}" height="${rectangleSize}" x="${x}" y="0" fill="${this.shapeColor}"/>`;
        outerWrapper.splice(1, 0, rectangleSVG, textSVG);
        return outerWrapper.join("");
    }
}
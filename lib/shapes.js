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

    setColor(color) {
        this.color = color;
    }

    setTextColor(color) {
        this.textColor = color;
    }

    setText(color) {
        this.text = text;
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
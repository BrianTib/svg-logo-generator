import { Circle, Square, Triangle } from '../lib/shapes.js';

describe('Shape SVG Generation', () => {
  describe('Circle', () => {
    it('should generate correct SVG for Circle', () => {
      const circle = new Circle('TC', '#000', '#FFF');
      const svg = circle.render();
      expect(svg).toContain('<circle');
      expect(svg).toContain('fill="#FFF"');
    });

    it('should update the color of the Circle', () => {
        const circle = new Circle('TC', '#000', '#FFF');
        circle.setColor('#00FF00');
        const svg = circle.render();
        expect(svg).toContain('fill="#00FF00"');
    });

    it('should update the text color of the Circle', () => {
        const circle = new Circle('TC', '#000', '#FFF');
        circle.setTextColor('#FF0000');
        const svg = circle.render();
        expect(svg).toContain('fill="#FF0000"');
    });

    it('should update the text of the Circle', () => {
        const circle = new Circle('TC', '#000', '#FFF');
        circle.setText('TCT');
        const svg = circle.render();
        expect(svg).toContain('TCT');
    });
  });

  describe('Square', () => {
    it('should generate correct SVG for Square', () => {
      const square = new Square('TS', '#000', '#FFF');
      const svg = square.render();
      expect(svg).toContain('<rect');
      expect(svg).toContain('fill="#FFF"');
    });

    it('should update the color of the Square', () => {
        const square = new Square('TS', '#000', '#FFF');
        square.setColor('#00FF00');
        const svg = square.render();
        expect(svg).toContain('fill="#00FF00"');
    });

    it('should update the text color of the Square', () => {
        const square = new Square('TS', '#000', '#FFF');
        square.setTextColor('#FF0000');
        const svg = square.render();
        expect(svg).toContain('fill="#FF0000"');
    });

    it('should update the text of the Square', () => {
        const square = new Square('TS', '#000', '#FFF');
        square.setText('TSQ');
        const svg = square.render();
        expect(svg).toContain('TSQ');
    });
  });

  describe('Triangle', () => {
    it('should generate correct SVG for Triangle', () => {
      const triangle = new Triangle('TT', '#000', '#FFF');
      const svg = triangle.render();
      expect(svg).toContain('<polygon');
      expect(svg).toContain('fill="#FFF"');
    });

    it('should update the color of the Triangle', () => {
        const triangle = new Triangle('TT', '#000', '#FFF');
        triangle.setColor('#00FF00');
        const svg = triangle.render();
        expect(svg).toContain('fill="#00FF00"');
    });

    it('should update the text color of the Triangle', () => {
        const triangle = new Triangle('TT', '#000', '#FFF');
        triangle.setTextColor('#FF0000');
        const svg = triangle.render();
        expect(svg).toContain('fill="#FF0000"');
    });

    it('should update the text of the Triangle', () => {
        const triangle = new Triangle('TT', '#000', '#FFF');
        triangle.setText('TTT');
        const svg = triangle.render();
        expect(svg).toContain('TTT');
    });
  });
});
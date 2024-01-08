class circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
  
    get Radius() {
      return this.radius;
    }
  
    set Radius(value) {
      this.radius = value;
    }
  
    get Color() {
      return this.color;
    }
  
    set Color(colors) {
      this.color = colors;
    }
  
    get toString() {
      return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }
  
    get Area() {
      return Math.pow(this.radius, 2) * 3.14;
    }
  
    get Circumference() {
      return (2 * this.radius * 3.14).toFixed(2);
    }
  }
  
  const mycircle = new circle (1.0,"Blue")
  
  console.log(mycircle)
  
  // using get and set method below =>
  mycircle.Radius = 5
  mycircle.Color="black"
  console.log(mycircle.toString)
  console.log(mycircle.Area)
  console.log(mycircle.Circumference)
  console.log(mycircle)
class InvaderProjectile {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.width = 3;
    this.height = 10;
  }
  draw() {
    c.fillStyle = "white";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  shoot(invaderProjectile) {
    audio.enemyShot.play();
    invaderProjectile.push(
      new InvaderProjectile({
        position: {
          x: this.position.x,
          y: this.position.y + this.height
        },
        velocity: {
          x: 0,
          y: 5
        }
      })
    );
  }
}

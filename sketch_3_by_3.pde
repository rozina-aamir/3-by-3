void setup() {
  size(500, 500);
}

void draw() {
  for (int i = -69; i <= 69; i += 69) {
    point(mouseX+i, mouseY+i);
  }
}

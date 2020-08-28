int ledPin = 13;
int input = 0;

void setup () {
  Serial.begin (9600),
  pinMode(ledPin, OUTPUT);
}

void loop() {
  if (Serial.available()> 0){
    input = Serial.read();
    Serial.println(input, DEC);
    Serial.println("---");
  }
  if (input == 97){
    digitalWrite(ledPin, HIGH);
  }
  if (input == 115){
    digitalWrite(ledPin,LOW);
  }
}

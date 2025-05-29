---
Project: AllIn
Date: 2025-05-29
Tags:
  - AllIn
modified: 2025-05-29
---
Code for buzzer:
```arduino
#include "pitches.h"

int melody[] = {
  NOTE_F4, NOTE_F4, NOTE_F4, NOTE_A4, NOTE_D4, NOTE_D4, NOTE_D4,
  NOTE_C4, NOTE_A4, NOTE_A4, NOTE_A4, NOTE_A4, NOTE_E4, NOTE_E4, NOTE_E4, NOTE_D4
};

int noteDurations[] = {
  4, 4, 4, 4, 4, 4, 4,
  4, 4, 4, 4, 4, 4, 4, 4, 4
};

void setup() {
  for (int i = 0; i < 16; i++) {
    int duration = 2500 / noteDurations[i];
    tone(8, melody[i], duration);
    delay(duration * 1.05);
    noTone(8);
  }
}

void loop() {
}

```


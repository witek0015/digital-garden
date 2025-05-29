---
publish: true
tags: projects, ongoing, tech, coding
---
This project is a collaborative build of a fully functional **slot machine** using an **Arduino microcontroller**. Our team — **Wiktor**, **Mateusz**, and **Moamen** — is developing it as part of our **Microcontroller Programming** coursework. The idea is to simulate a classic slot machine using hardware components and embedded logic, incorporating user input, feedback loops, and interactive sound and visuals.

### Motivation

The project was born out of our shared interest in:

- Building something fun and rewarding with embedded systems
    
- Gaining hands-on experience with motors, sensors, and signal control
    
- Exploring how real-time user interaction can be implemented with Arduino
    
- Making our Microcontroller class more exciting (and chaotic) - main motivation
    

Also — who doesn’t love the thrill of a slot machine?

### Theory

The slot machine operates on basic embedded system principles:

- **Input**: A **potentiometer** simulates the "lever" action, read through an analog input pin.
    
- **Processing**: The Arduino reads the input, starts the motor, and triggers a musical sequence.
    
- **Output**:
    
    - A **servo motor** spins the slots
        
    - A **buzzer** plays _Faded_ by Alan Walker
        
    - **Color detectors** check the slots after the spin
        
    - An **LCD screen** displays messages — including the ultimate _JACKPOT!_
        

We aim to combine hardware control and timing with user feedback, ensuring synchronization between spin, music, and result evaluation.

### Tech Stack

- **Arduino Uno** (main board)
    
- **Potentiometer** (input control)
    
- **Servo Motor** (spins the slots)
    
- **Photoresistors / Color Detectors** (detect slot symbols)
    
- **LCD 16x2 Display** (shows results)
    
- **Piezo Buzzer** (plays music)
    
- **Breadboards, resistors, jumper wires** (for circuit building)
- 
### Progress Logs
- **2025-05-27**: We brainstormed the main components and divided responsibilities
- **2025-05-29**: Wiktor successfully got the **buzzer** to play _Faded_ — vibes confirmed. 
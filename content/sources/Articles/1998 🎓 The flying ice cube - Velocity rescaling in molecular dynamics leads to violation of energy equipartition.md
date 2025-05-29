---
Authors: Stephen C. Harvey, Robert K.-Z. Tan, Thomas E. Cheatham III
title: the flying ice cube - velocity rescaling in molecular dynamics leads to violation of energy equipartition
Year: 1998
Journal: Journal of Computational Chemistry
Issue: 19
Number: 7
URL: https://doi.org/10.1002/\(SICI\)1096-987X\(199805\)19:7<726::AID-JCC4>3.0.CO;2-S
Date: 2025-05-29
tags: chemistry programming physics
---
*Stephen C. Harvey, Robert K.-Z. Tan, Thomas E. Cheatham III*
Journal of Computational Chemistry 17(9)
### notes
#### the core idea
Velocity rescaling in molecular dynamics (MD)—a standard way to control temperature—**can cause serious physical inaccuracies**. Instead of distributing energy evenly (as thermodynamics politely asks), it shifts all the kinetic energy into translational and rotational motion. Your molecules stop jiggling and just... fly. Like an ice cube in zero-G. Hence: **“The Flying Ice Cube” effect**.

#### key concepts
- **Equipartition Principle**: Each degree of freedom (DoF) should get an equal share of the kinetic energy cake.
    
- **Velocity Rescaling**: Periodically adjusting velocities to keep system temperature stable.
    
- **What Goes Wrong?**
    
    - High-frequency motions (e.g., bond stretching) lose kinetic energy.
        
    - Low-frequency motions (e.g., center-of-mass translation) hoard it all.
        
    - Eventually, your molecule forgets how to vibrate and just cruises. Yikes.
        

#### what they did:

1. **Theory**: Analytical model with 2 particles showed energy bleeding from internal (vibrational) to translational motion under rescaling.
    
2. **Simulations**:
    
    - Ethane model: bond vibrations die off → molecule just spins and drifts.
        
    - 3DNA model (supercoiled DNA): energy drains into twisting and global rotation.
        
    - All-atom MD (DNA in water): translational motion dominates, even methyl groups start spinning like TikTok influencers.

### highlights


- **“A gradual bleeding of KE from high frequency motions... into low-frequency motions.”**  



- **“This problem is inherent in velocity rescaling.”**  
- **“All the kinetic energy is in the translation of the center of mass.”**  
- **“Reassigning velocities rather than rescaling helps to distribute energy.”**  


- **“Periodic removal of the motion of the center of mass... is desirable, but not sufficient.”**  
### thoughts
- **Use velocity reassignment** instead of rescaling. Think of it as a system-wide coffee break.
- **Remove translational and rotational motion** of center-of-mass regularly.
- **If you must rescale, do it infrequently**, and maybe average the KE over time to make it less chaotic.
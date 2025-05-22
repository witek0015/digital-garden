---
Authors: "John Ashley Burgoyne, Ichiro Fujinaga, and\r J. Stephen Downie"
Title: Music Information Retrieval
Year: 2015
Journal: A New Companion to Digital Humanities
Issue: 
Number: 
URL: https://sci-hub.se/https://onlinelibrary.wiley.com/doi/abs/10.1002/9781118680605.ch15
Date: 2024-11-08
tags: Computers Music
---
## Notes
- In this excerpt from *A New Companion to Digital Humanities* explores the field of **Music Information Retrieval (MIR)**, which seeks to make the world's vast music collection accessible through computational methods. 
- The authors discuss MIR's diverse applications, ranging from personalized music recommendations to automated music transcription. They outline the different types of data used in MIR, including *audio recordings*, *musical scores*, and *metadata*, and how researchers use this data to classify, retrieve, and analyze musical information. 
- The text further explores the historical development of MIR, highlighting significant advancements in the field, including the emergence of the **International Society for Music Information Retrieval (ISMIR)** and the **Music Information Retrieval Evaluation eXchange (MIREX)**. 
- Finally, the authors discuss future directions in MIR, emphasizing the increasing role of social media, crowdsourcing, big data, and multivalent user interfaces.
## Highlights
- Music information retrieval (MIR) is “a multidisciplinary research endeavor that strives to develop innovative content‐based searching schemes, novel interfaces, and evolving networked delivery mechanisms in an effort to make the world’s vast store of music accessible to all” 
- The **input** data for MIR are always digital music data, which primarily take one of four forms: *images* of printed or handwritten music; so‐called *symbolic formats*, such as the Musical Instrument Digital Interface (MIDI) standard, that seek to represent musical scores in a machine‐ interpretable form; *digital audio*; and *metadata*, either of traditional categories associated with library catalogs or of newer forms such as blogs, social‐media posts, reviews, or other online texts about music.
- There are three fundamental categories of **outputs**: *information retrieval tasks*, which primarily seek to return a piece of music to a user based on some kind of query; *classification or estimation tasks*, which seek to assign a single label or value to the input data; and *sequence‐labeling tasks*, which rather than assigning a single label to the input data, seek to label the input data in multiple locations as it unfolds in time.
- One of the earliest MIR studies, for example, demonstrated that larger melodic intervals occur less frequently in folk music than smaller melodic intervals
- In the 1990s, two things occurred that helped MIR to grow again. One was the increasing amount of music that was becoming easily available as digital audio, which solved the problem of encoding. The other was the surge in the computing power of desktop computers allowing researchers to analyze music easily.
- Once a group has come together they create a MIREX “task” under which the participants will run their evaluations. They then need to construct the three principal components that make up each MIREX task: (1) a common set of data to be analyzed; (2) a common set of queries or procedures to be run against the data; and (3) a common set of metrics and evaluations to be used to evaluate the outputs of each algorithm.
- MIR tasks, for MIREX or otherwise, tend to follow a fairly standard pipeline: feature extraction to convert the input data into a useful intermediate representation, followed by inference to convert the features to the desired output.
- the earliest work in MIR tended to favor expert knowledge at all levels of the pipeline, whereas given the amount of data available today, there is a growing trend in MIR to prefer machine learning whenever possible
- The Optical Music Recogniton pipeline typically includes a substantial amount of pre‐processing prior to feature extraction, including document image analysis to identify page regions containing music rather than text or decoration, binarizing the image to black‐and‐white, removing staff lines, and identifying connected components of black pixels
- Like image data, audio data tends to be too large and complex to use directly for feature extraction. Some kind of pre‐processing is typical, including techniques such as collapsing stereo or multichannel recordings to mono, reducing the sampling rate, and breaking the audio down into short overlapping frames from which features can be extracted independently. The result is a collection of parallel sequences of different feature values, which are then used for inference.
- Perhaps surprisingly, given the strong influence of machine learning in MIR, few datasets used in MIR to date are truly “big.” One notable exception is the Million Song Dataset, which expressly sought to challenge MIR to work on a commercial scale and has also been used to investigate musicological questions about the evolution of pop music (Bertin‐Mahieux et al., 2011b). The Structural Analysis of Large Amounts of Music (SALAMI) project sought to bootstrap human annotations with supercomputers to build a dataset on a similar scale
- 
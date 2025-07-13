---
title: is code a language or a logic?
Date: 2025-07-13
tags: 
- computers
- linguistics
- essay
publish: true
---

structure idea: 
programming language
whats code + example
definition and how to interpret what is language
definition and how to interpret what is logic
comparison of where code is
conclusion

In informatics, we refer to the set of commands we write and execute as programs. The commands itself are made from building blocks (like LEGO for computer nerds), called syntax. Now, the neat part is that this is not universal - depending on what environment we are working in, the words that we use to 'speak to the computer' differ, as does 'grammar'. Thus, they are called programming *languages*. But just how similar are those to actual languages, and the name given to them factual? Let's investigate this by using a short snippet of code. 
```python
df=pd.read_excel("/content/drive/MyDrive/SOLVENTS_AUTOSCALED.xlsx")
smiles=df["smiles"]
df = df.select_dtypes(include=['int' ,'float'])
df = df.dropna(axis=1)
dist_mat=np.zeros((len(df), len(df)))
for i in range(len(df)):
  for j in range(len(df)):
    dist_mat[i,j]=(sum(abs(df.iloc[i]-df.iloc[j])**2))**0.5
```
As visible (and obvious for people who have seen some code before) this does not look like a spoken language. But, what IS language?

According to Noam Chomsky, we humans are pre-equipped with a framework to create spoken languages - so-called "universal grammar". This suggest that we have some internal mechanism for language aquisition (eg. children learning how to speak without any textbooks). Chomsky said that variations between languages are on a surface level, still guided by our internal shared syntactic intuition. And even though we may not know the words, we know that in a sentence, verb accompanying a noun tells us that someone did something. The same goes for making plurals. In his reasearch, he defined language as a state obtained by a specific mental computational system that develops naturally and whose exact parameters are set by the linguistic environment that the individual is exposed to. What is interesting is the use of words 'computational system'. Of course his theories had multiple critics, but he paved a way for modern linguistics. 

Programming languages are full of formal logic and generally written in imperatives[^1]. In formal logic, we decompose the sentences into their purest constituents, and use them to make deductive arguments. Formal logic uses symbolic notation to explain its structures clearly and unambiguously. As such, formal logic is on the fringe of mathematics and philosophy. And it found its way into coding - most of the logic's keywords, such as *if*, *or*, *and* and many others are innate to any programming language. Logic itself is very far from being called a language - it's sentenced boiled down to their most basic message or meaning. 

Given these two definitions for the problem at hand, lets look at the code itself. In the example above, I used Python, one of the most popular programming languages, known for its easy syntax and easy to digest formal logic elements. And upon closer examination, we can see both elements of language as well as logic, even though it is used like neither. Some elements of spoken languages are kept, and shoved into a framework of formal logic statements, which computer executes one by one. Not all programming languages are created equal, and some are more verbose, while others are more esoteric and symbolical[^2]. 

I have to admit, such expansive topic is hard to conclude, but here are my thoughts: code is neither and both at the same time. It has characteristics of both logic and language, while not serving the same purpose as any of them. Of course, it is a tool that allows us to communicate with computers, but we designed them to understand it. We could have as well made them listen to verbose commands - like LLMs (Large Language Models). Understanding the priciples of language and logic can really be helpful in understanding coding, and becoming the 'native speaker'.
### sources
1. [Formal Logic - Britannica](https://www.britannica.com/topic/formal-logic)
2. [What was Chomsky's Theory?](https://www.structural-learning.com/post/chomskys-theory)
### footnotes
[^1]: After all, we command the computer to do something.
[^2]: This is a point in this essay in which I would love to introduce the reader to a programming language called *brainfuck* - purerly symbolical one, created by Swiss student in effort to make smallest compiler possible. It consists of only 8 commands, each denoted with a symbol. For example - this is addition of current cell's value to the next cell: *[->+<]*. [More on brainfuck](https://gist.github.com/roachhd/dce54bec8ba55fb17d3a)
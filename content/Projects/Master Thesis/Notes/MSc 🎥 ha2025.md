---
Project: MSc
Date: 2025-05-05
tags:
  - MSc
---
# Highlights & notes
## Introduction
> ([[ha2025.pdf#page=1&selection=138,2,141,58&color=red|p.138]])
> In recent years, in silico methods have gained significant attention in nanotoxicity research, particularly for developing nanoscale structure-activity relationships (nano-SARs) which identify correlations between the properties of NMs and their toxicity endpoints

> ([[ha2025.pdf#page=2&selection=25,44,51,13&color=red|p.139]])
> many researchers have implemented various data preprocessing techniques, such as filling gaps in missing information and addressing class imbalance [19–21]. They have also utilized automated machine learning (AutoML) platforms to streamline the model optimization process, reducing the need for manual tuning

> ([[ha2025.pdf#page=2&selection=78,0,80,58&color=red|p.139]])
> LLMs have significantly advanced the field of natural language processing (NLP) by excelling in handling conversational prompts and generating contextually appropriate and coherent responses

> ([[ha2025.pdf#page=2&selection=115,14,120,32&color=red|p.139]])
> LangChain is a framework that helps developers easily create applications using LLMs by integrating them with external data sources and other systems. It extends LLM capabilities by supporting tasks such as text embedding, retrieval, and application programming interface (API) interactions, making it a versatile tool for building complex, real-world applications

> ([[ha2025.pdf#page=2&selection=137,45,155,0&color=red|p.139]])
> The pipeline consists of three key steps: (1) Data preparation, which involved gathering publicly available research papers from web databases, (2) Data extraction using LLMs, where the LangChain framework and text embedding techniques were employed, where well-known LLMs such as ChatGPT, Claude, and Gemini were used to compare their effectiveness in extracting relevant nanotoxicity data, and (3) Model development, where the extracted data was used to develop prediction models on AutoML platforms, including Google Vertex AI, Microsoft Azure, Amazon SageMaker, and Dataiku, to assess their reliability and performance.

![[ha2025.pdf#page=2&rect=39,83,556,258&color=red|p.139]]
## Materials and methods
> [!PDF|note] [[ha2025.pdf#page=2&selection=238,0,244,49&color=note|p.139]]
> > For downstream analysis, two independent datasets were established: training and test data. A total of 216 research articles related to the toxicity of oxide nanomaterials were sourced from S2Nano. These articles served as training data for optimizing prompts and selecting the LLM with the best performance in data extraction.
> 
>

> [!PDF|note] [[ha2025.pdf#page=3&selection=14,0,23,33&color=note|p.140]]
> > To efficiently extract data from a large volume of research articles, this study utilized APIs for batch processing and applied text embedding techniques. This approach not only eliminated the need for manual interactions with web-based LLM interfaces but also ensured that irrelevant content was filtered out, allowing the models to focus solely on extracting relevant information. 
> 
>

> [!PDF|note] [[ha2025.pdf#page=3&selection=27,61,37,57&color=note|p.140]]
> > The process began by retrieving the text and metadata from PDFs and splitting the text into chunks of 300 tokens with an overlap of 50. These chunks were embedded as vectors and stored. The system then retrieved the top 10 nearest vectors to the user’s query using the Euclidean distance metric in FAISS. These retrieved chunks, along with the prompt, were input into the LLM, which then generated the output.
> 
>

> [!PDF|note] [[ha2025.pdf#page=3&selection=57,19,64,23&color=note|p.140]]
> > three prominent models were tested —ChatGPT 4o, Gemini 1.5 Pro, and Claude 3.5 Sonnet—and their performance in data extraction was compared
> 
>

![[ha2025.pdf#page=3&rect=74,93,522,444|ha2025, p.140]]

> [!PDF|note] [[ha2025.pdf#page=4&selection=11,2,16,63&color=note|p.141]]
> > deling. On the other hand, cell viability values in toxicological data are key endpoints when developing toxicity prediction models, with dose and exposure time also being significant attributes. However, these values were not considered during the data extraction phase with LLMs.
> 
>

> [!PDF|note] [[ha2025.pdf#page=4&selection=141,0,144,60&color=note|p.141]]
> > We also addressed the challenge of minimizing hallucination, a common issue with LLMs where the models may generate fabricated or misleading content. To mitigate this, we carefully structured prompts to reduce ambiguity and lower the likelihood of hallucination. 


> [!PDF|note] [[ha2025.pdf#page=6&selection=28,1,33,55&color=note|p.143]]
> >  To address class imbalance, we applied the Synthetic Minority Over-sampling Technique (SMOTE), which generates synthetic examples to enhance the representation of the minority class and balance the dataset

## Results
> [!PDF|important] [[ha2025.pdf#page=6&selection=238,67,245,54&color=important|p.143]]
> >  The time required for LLMs to process input queries and generate outputs averaged 42.0 seconds for Claude 3.5 Sonnet, 48.3 seconds for Gemini 1.5 Pro, and 36.1 seconds for ChatGPT 4o. Including embedding time, the total extraction times were 44.6, 50.9, and 38.7 seconds, respectively, with ChatGPT 4o emerging as the fastest model.
> 

> [!PDF|important] [[ha2025.pdf#page=10&selection=17,2,20,28&color=important|p.147]]
> > Although our automated data extraction pipeline successfully extracted a large amount of high-quality data based on the PChem score, it did not address class imbalance in terms of toxicity and material types,


> [!PDF|important] [[ha2025.pdf#page=7&selection=255,0,287,0&color=important|p.144]]
> > Overall, among the evaluated LLMs, ChatGPT 4o demonstrated the best performance in terms of time efficiency and accuracy. Its PrecisionD. E. ranged from 79.37 to 98.41 (85.54 ± 5.17), RecallD.E. from 77.55 to 100.00 (90.20 ± 8.16), and F1D.E. from 79.05 to 98.37 (87.46 ± 5.15). While these metrics were slightly lower than those reported in a similar study using text embedding for MOF synthesis conditions (F1 score of 92.33 ± 3.09)

# Summary
## What's what
- **Problem**: Collecting high-quality nanotoxicity data from literature is time-consuming and labor-intensive.  
- **Goal**: Automate the extraction of physicochemical and toxicological data from nanomaterials (NMs) research papers using Large Language Models (LLMs), and build predictive models of nanotoxicity.
- **Solution**: They created a Python-based pipeline using **LangChain** and tested it on over 800 papers to extract data, then used **AutoML** platforms to build predictive models.
- **Impact**: Automated extraction reduced time 4x compared to manual methods, and the resulting models performed comparably to those built on manually curated data (F1 > 86%).
## Procedure
- **Data Preparation**:
    - **Training data**: 216 manually curated nanotoxicity papers.
    - **Test data**: 605 new papers filtered from 1700+ sources (PubMed/Web of Science).
- **Data Extraction Pipeline**:
    - Built using **LangChain**, integrated with **Zotero**, **FAISS** (for vector similarity search), and **ChatGPT 4o**, **Claude 3.5 Sonnet**, **Gemini 1.5 Pro**. 
    - Developed structured prompts with few-shot examples for extracting:
        - Material info (e.g., type of NM)
        - Physicochemical (PChem) properties (e.g., core size, surface charge)
        - Toxicological (Tox) properties (e.g., cell line, viability assay)
    - Evaluated extraction accuracy using F1D.E. (F1 score for Data Extraction)
- **Model Building (AutoML)**:
    - Used **Google Vertex AI**, **Azure ML**, **AWS SageMaker**, and **Dataiku**.
    - Built classifiers to predict NM toxicity (cell viability <50% = toxic). 
    - Trained models on 3 datasets:
        - **HaHa-Auto** (automated extraction),
        - **HaHa-Manual** (fully manual),
        - **Ha IIIB** (smaller curated set).
    - Used SMOTE for class imbalance and PChem score for quality filtering.
- **Evaluation & Results**:
    - **ChatGPT 4o** performed best: F1D.E. ~87.6%.
    - Automated extraction was **4x faster** than manual (≈39s vs 181s/paper).
    - Predictive models trained on automated data had F1N.P. > 86%, nearly identical to models trained on manual data.
    - Larger datasets slightly improved performance and coverage of prediction models.
- **Model Interpretability**:
    - Used **SHAP values** to assess feature importance—most influential were **dose**, **exposure time**, and **material type**.
## Results
- **F1 Score (Extraction)**: ChatGPT 4o outperformed others (~87.6%).
- **F1 Score (Prediction)**: All models exceeded 86%, showing high reliability.
- **Time Efficiency**: Automation reduced extraction time per paper by ~75%.
- **Scalability**: ChatGPT 4o enabled large-scale, quality-controlled data extraction.
- **Limitation**: Couldn’t extract numerical values from figures (e.g., dose–response curves); those were added manually.
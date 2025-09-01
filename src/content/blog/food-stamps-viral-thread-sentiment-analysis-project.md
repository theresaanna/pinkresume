---
title: "Food Stamps Viral Thread Sentiment Analysis Project "
date: "2025-09-01T03:47:13.924Z"
---

# Background
Welcome to an exciting milestone for me. The project I'm about to tell you about is my first foray into data analysis, machine learning, and being a user of AI in the sense of implementing it in an application and using it as a pair programming partner, in ChatGPT, ClaudeAI.

I am in week six of a six month certification program in Generative AI at John Hopkins Whiting School of Engineering. We have a project at week eight, but it was a holiday weekend and I was feeling antsy to get my hands dirty.

Please feel free to peruse the repository at [Github: SNAP Sentiment Analysis by theresaanna](https://github.com/theresaanna/SNAP_sentiment_analysis).

# The Idea
A couple weeks prior, on the Meta platform Threads, I had made a contentious post about food stamps. Whether you agree with my premise or not, I think this will be an interesting journey. I kept thinking I was curious to do some analysis on the comments, and then came to realize I knew enough to at least experiment with what I'm learning.

[The original Threads post](https://www.threads.com/@hellyeahitstheresa/post/DNJc3pfS2-e)
![image](https://private-user-images.githubusercontent.com/126935/482398652-268f9495-8c6e-4d40-80ee-66c3dc985b23.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTY2OTkwMDUsIm5iZiI6MTc1NjY5ODcwNSwicGF0aCI6Ii8xMjY5MzUvNDgyMzk4NjUyLTI2OGY5NDk1LThjNmUtNGQ0MC04MGVlLTY2YzNkYzk4NWIyMy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTAxJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkwMVQwMzUxNDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MTZkMDg2ZTk4MTQyMDI5NDEzNjk2Y2M5N2I4ZDRmOTc2MzU3ZTYwNDdhNmJhZTQ3NjJkNDAyMzhmYmJjOTRkJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.xEGAP11gljLkudhhZTus5814_CD9lDfIZw2ntXWY8FQ)


# The Data
While the Threads UI reported 1.5k comments on the Thread, I was able to programatically extract about 718 non-deduplicated comments. I dug into why this was, and mananged to extract about 100 comments more than originally by taking the first branch of replies to my reply to the original post. The missing comments are likely second+ tier branches off those, or branched off of other peoples' replies. The Meta API doesn't have an endpoint, to my knowledge, to fetch all comments, nested or not. I would have needed to come up with some recursive function to dig down all branches, but if I'm honest, for this toy project, I felt 718 was a good number of rows to work with.

# The Hypothesis
My feeling, having dealt with the notifications of all these replies to my post in real time, was that the sentiment would be negative. I engaged with people each positive, negative and neutral on the post. If you dig into the comments, please know that people are vile. The is a lot of jabs at my body size, even comments telling me to euthanize myself.

# Phase one: rule-based NLP methods
To start, I decided to run TextBlob and VADER against the comments. AI guided me, but TextBlob seemed a straightforward implementation and VADER good in the social media text space.

## VADER vs TextBlob Results Summary

### VADER Sentiment Distribution
- **Positive**: 254 replies (35.4%)
- **Negative**: 255 replies (35.5%)
- **Neutral**: 209 replies (29.1%)

### TextBlob Sentiment Distribution  
- **Positive**: 234 replies (32.6%)
- **Negative**: 138 replies (19.2%)
- **Neutral**: 346 replies (48.2%)

## Combined Results

### Final Combined Sentiment Distribution
- **Positive**: 305 replies (42.5%)
- **Negative**: 271 replies (37.7%)
- **Neutral**: 142 replies (19.8%)

## Confidence Distribution

| Confidence Level | Count | Percentage |
|------------------|-------|------------|
| **High** | 315 | 43.9% |
| **Low** | 210 | 29.2% |
| **Medium** | 193 | 26.9% |

The results were wildly inaccurate, as we will come to see. I suspected as much, or else the analysis would have ended here. There's no way there was a slight positive lean to this data. 

I knew straight away that I wanted to apply machine learning to the problem.

# Phase two: ML Algorithm Analyses
With the advice of AI and my knowledge from class, I chose the following machine learning algorithms to run the data through:

- Gradient Boosting
- Logistic Regression
- Naive Bayes
- Random Forest
- SVM

I tagged 101 comments manually with their sentiment: positive, negative or neutral to use as training data.

## Training Dataset

### Manual Sentiment Distribution
- **Negative**: 77 samples (76.2%)
- **Positive**: 13 samples (12.9%)
- **Neutral**: 11 samples (10.9%)

## Individual Algorithm Results

### 1. SVM 
- **Test Accuracy**: 66.7%
- **Average Confidence**: 78.1%
- **High Confidence Rate**: 44.7%
- **Sentiment Distribution**:
  - Positive: 6 (0.8%)
  - Negative: 712 (99.2%)
  - Neutral: 0 (0.0%)

### 2. Random Forest 
- **Test Accuracy**: 66.7%
- **Average Confidence**: 88.6%
- **High Confidence Rate**: 81.6%
- **Sentiment Distribution**:
  - Positive: 10 (1.4%)
  - Negative: 701 (97.6%)
  - Neutral: 7 (1.0%)

### 3. Gradient Boosting 
- **Test Accuracy**: 61.9%
- **Average Confidence**: 94.0%
- **High Confidence Rate**: 93.0%
- **Sentiment Distribution**:
  - Positive: 23 (3.2%)
  - Negative: 653 (90.9%)
  - Neutral: 42 (5.8%)

### 4. Naive Bayes
- **Test Accuracy**: 61.9%
- **Average Confidence**: 83.6%
- **High Confidence Rate**: 76.9%
- **Sentiment Distribution**:
  - Positive: 0 (0.0%)
  - Negative: 718 (100.0%)
  - Neutral: 0 (0.0%)

### 5. Logistic Regression
- **Test Accuracy**: 61.9%
- **Average Confidence**: 81.0%
- **High Confidence Rate**: 70.5%
- **Sentiment Distribution**:
  - Positive: 0 (0.0%)
  - Negative: 718 (100.0%)
  - Neutral: 0 (0.0%)

## Performance Comparison Table

| Algorithm | Test Accuracy | Avg Confidence | High Confidence | Positive % | Negative % | Neutral % |
|-----------|---------------|----------------|-----------------|------------|------------|-----------|
| **SVM** | **66.7%** | 78.1% | 44.7% | 0.8% | 99.2% | 0.0% |
| **Random Forest** | **66.7%** | 88.6% | 81.6% | 1.4% | 97.6% | 1.0% |
| **Gradient Boosting** | 61.9% | **94.0%** | **93.0%** | **3.2%** | 90.9% | **5.8%** |
| Naive Bayes | 61.9% | 83.6% | 76.9% | 0.0% | 100.0% | 0.0% |
| Logistic Regression | 61.9% | 81.0% | 70.5% | 0.0% | 100.0% | 0.0% |

We can clearly see that the data is not balanced or robust enough for some of the algorithms, I believe what is happening is overfitting, but I am yet a novice in these things.

My call on the winner is either Random Forest or Gradient Boosting. Based on my gut feeling of the data, these numbers are looking more realistic. But do they still over-predict negative, like the other ML algorithms I used?

# Phase three: Neural Network Analysis
I also knew I wanted to throw the data at a couple of neural networks to see how much nuance we could detect and preserve with these more advanced methods.

I chose RoBERTa social and DistilBERT because of their use on casual text and social media content.

For some reason, I cannot find the correct results for DistilBERT. I must have accidentally not included all of the same metrics for DistilBERT as I did for RoBERTa. Still, when I did the original review of the analysis, RoBERTa was the clear winner.

## RoBERTa Social Results
### Performance Metrics
* Test Accuracy: 81.8%
* F1 Score (Weighted): 0.784
* F1 Score (Macro): 0.495
* Precision (Weighted): 0.755
* Recall (Weighted): 0.818
* Cross-Validation F1: 0.738 ± 0.111
* Average Confidence: 87.4%
* High Confidence Rate: 78.4%
### Sentiment Predictions (1,292 samples)
* Positive: 8.3%
* Negative: 90.0%
* Neutral: 1.7%

### Performance Comparison Tables

| Model | Accuracy | F1 Weighted | F1 Macro | Precision | Recall | CV F1 | Avg Conf | High Conf | Pos% | Neg% | Neu% |
|-------|----------|-------------|----------|-----------|--------|-------|----------|-----------|------|------|------|
| **Gradient Boosting** | **86.4%** | **0.801** | **0.640** | 0.748 | **0.864** | N/A | **93.9%** | **90.9%** | 5.7% | 89.7% | **4.7%** |
| **RoBERTa Social** | 81.8% | 0.784 | 0.495 | **0.755** | 0.818 | **0.738±0.111** | 87.4% | 78.4% | **8.3%** | 90.0% | 1.7% |
| SVM | 66.7% | N/A | N/A | N/A | N/A | N/A | 78.1% | 44.7% | 0.8% | 99.2% | 0.0% |
| Random Forest | 66.7% | N/A | N/A | N/A | N/A | N/A | 88.6% | 81.6% | 1.4% | 97.6% | 1.0% |

| Sentiment | RoBERTa | Gradient Boosting | SVM | Random Forest | Winner |
|-----------|---------|-------------------|-----|---------------|---------|
| **Positive** | **8.3%** | 5.7% | 0.8% | 1.4% | 🤖 **RoBERTa** (+46% vs GB) |
| **Negative** | 90.0% | **89.7%** | **99.2%** | 97.6% | 🌳 **Gradient Boosting** (most balanced) |
| **Neutral** | 1.7% | **4.7%** | 0.0% | 1.0% | 🌳 **Gradient Boosting** (+176% vs RoBERTa) |

You can see I am beginning to extract metrics like accuracy, precision, recall and F1 score, which is what I'm missing data to do with DistilBERT. Oh well, this is a toy analysis anyway! 

I also ran an emsemble method to see if the combination of RoBERTa and DistilBERT would get any closer, but really, I think RoBERTa is pretty close to reality. 

Having reviewed the inaccurately labeled comments, it's clear that where the algorithms are largely falling down are around sarcasm. While I hear tell of people working on this problem, I believe it is still just that - a work in progress.

# What I Learned
I learned that people really don't like the idea of people on food stamps buying soda with them!
Honestly, the data wasn't the point so much as the process. I'm really pleased with what I got out of this first little project. It'll set me up well to embark on future projects.

# What about you?
Did I miss anything you're curious about? Have you done sentiment analysis on social media data? What did you find?

### Thanks for reading!
---
title: The faces behind the FASHION-MNIST
author: Nana Yamazaki
date: 2018-01-11
banner:
  image: lights.jpg
---
## We talk to Han and Kashif from Zalando Research
Employer Branding Specialist Data Science, Nana Yamazaki catches up with the
team using literal fashion icons in Deep Learning.

## Tell us about Fashion-MNIST. What did you want to accomplish?

Fashion-MNIST is a freely available dataset of Zalando articles that most importantly has the same format as the MNIST dataset. Just for context, the MNIST dataset from the late ‘90s consists of 60,000 28x28 grayscale handwritten single digits (0 to 9) which has somehow become the "Hello World" dataset in Machine Learning, and especially in Deep Learning (DL). 

The MNIST dataset is somewhat "simple" with images looking like these emojis: 0️⃣, 3️⃣, 6️⃣, etc., which means modern DL techniques these days are able to recognize unseen digits with accuracies of 99%! The size of the dataset, however, means that researchers and practitioners of DL can quickly get started or prototype ideas with this dataset, even if it does not reflect modern DL problems. 

Thus, our goal for Fashion-MNIST was to have more "complicated" images such as, 👢, 👟, 👜, etc., but with the same size convenience of MNIST so that the data more closely reflects the problems we deal with in Deep Learning.

*The faces behind, Fashion-MNIST, Han Xiao and Kashif Rasul*

## How did you react to the amount of attention it got, and why do you think it blew up like that?

We had most of the interaction with users on our GitHub repository, where we
have around 2,780 stars as of today. We requested people to run benchmarks on
their particular method and send us the comparison with the MNIST dataset,
which generated a lot of interest as well. [Kaggle Datasets](https://www.kaggle.com/datasets) is another place were the community added this dataset; it has been the most popular dataset there for a few months now. 

There are a number of reasons for its popularity. Scientific utility aside, we think the fashion images are somewhat more playful and easily relatable to those starting out than more "serious" sounding datasets like national flags.

We and the DL community also wrote helper functions to import this dataset in all the most popular DL frameworks, which reduced the barrier to entry for this dataset even further.

## Where do you see it impacting Zalando?

At Zalando we heavily use fashion image data for a number of products, and although this dataset is only a small subset of the whole Zalando inventory, and is tiny and gray, it does help (at least we hope) in letting our developers and scientists test out ideas quickly before tackling the whole Zalando images data at full color resolution.

The dataset has also helped in promoting Zalando, and it’s always nice to hear about our colleagues being approached at conferences and meetups because they know of the dataset. 

## Tell us a bit about working at Zalando Research

Zalando Research is a great place to work because of the team we have and the way we work collaboratively. We try to achieve a balance between scientific or academic impact and business impact, where the work we do ends up being used in a production setting at Zalando. The fact we spend our days experimenting, learning, teaching, failing, and investigating makes it a great place to grow as an individual as well as a team, which is wonderful.

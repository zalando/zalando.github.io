---
title: InnerSource Do's and Don'ts out of Dortmund
author: Martin Schwitalla
date: 2017-08-30
banner:
  image: coding.jpg
---
At Zalando, we have many teams working on their respective systems and domains where they operate like small startups. They take responsibility for these systems and have a feeling of ownership, constantly engaging with other teams to solve bigger challenges and enable new features.

Sometimes during these alignments and feature requests, priorities collide and we can’t support others. In these situations, we aim for an InnerSource approach to address the required changes. This means that much like open source projects, the requesting team must implement the necessary changes in other components and the owner of these components has to review and approve the changes. This way, the impact on the owning team is minimal and the requesting team is not blocked.

Team Sokoban in Dortmund is responsible for Inventory Management at Zalando and we’ve had the opportunity to do a lot of InnerSourcing over the last months. We wanted to share some of our experiences and best practices, which can mostly be applied to usual open source InnerSourcing methods or sometimes even to day-to-day development.

## Do respond quickly

If someone creates an issue, a pull request, or just has a question while implementing a feature, a quick response is always valuable. It can get very frustrating if you have to ask multiple times to get an answer or if you feel that you are being ignored. Sometimes all that is needed is to say that you will address their concerns after your meetings or just explain that you are currently occupied by other work.

## Do define contribution and project setup guidelines

Every project should have guidelines for setup and how to contribute to it. It prevents unnecessary rounds of questions and also eases frustration while opening a pull request just to see that you still have to fix your commit messages, check style, or any other changes that might be required for a merge.

## Do align on the implementation design early and raise concerns

Depending on the scope of your change it is a good idea to align on your implementation idea. Ask yourself what could be the implications for the application, do you need new dependencies, will you maybe need to change a certain process? Raise the concerns you have early on to align on the design for both sides, so that there are no negative surprises for either team during the pull request or after merging. If you don’t align, you risk changing your implementation after the pull request multiple times.

## Do small pull requests

I think this is self explanatory and should always be the way to go. Small pull requests make it much easier for the reviewer to analyze the impact of the change.

## Don’t hold others hostage during pull requests

Although you own the code and application and are the one who needs to approve of the changes, you should not misuse this power during a pull request and take the requester as hostage. If the change is based on an own preference, you should ask yourself if this change is really needed or if the current state of the project is fine as is. In the end, you always have the power to change the code afterwards. This also includes nitpicking which should be avoided, because it leads to frustration on both sides.

## Don’t do team discussions on a pull request

Sometimes it may happen that your code is reviewed by multiple people from one team with different opinions, which leads to big discussions and confusion. Keep them off the pull request and align in person to solve these situations.

As a counter measure we came up with, we invented a so-called “InnerSource Buddy”. When one team wants to InnerSource a change into one of our components, we assign someone from our team as the InnerSource Buddy, that will act as the go-to person for the other team. It’s their responsibility to answer their questions, deducting some time for reviewing and so on. Whenever the Buddy speaks it should be on behalf of the team, not merely a personal opinion. With this system, we are able to reduce confusion and frustration during the InnerSource process and our experience shows that both sides were happy with the end result.

It is always important to appreciate one another. In the end, one team is enabling you to continue your work and the other team is doing work for you, so as not to negatively impact your own priorities. Therefore, communication is the key to success when it comes to InnerSource across teams, offices, and locations.

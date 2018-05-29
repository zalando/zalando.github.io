---
title: A Plea For Small Pull Requests
author: Paulo Renato Campos de Siqueira
date: 2017-10-17
banner:
  image: blocks.jpg
---
Pull Requests (PRs) are the norm today when it comes to common software development practices in teams. It is the right way to submit code changes so that your peers can check them out, add in their thoughts and help you create the best code you can - i.e. PRs allow us to easily introduce code review to our development process and enable a great deal of teamwork, while also decreasing the number of bugs our software contains.

There are several aspects we can talk about when it comes to Pull Requests and
code review. In this post, I'm specifically concerned with the *size* of PRs,
although I'll briefly touch other points as well. Other dimensions you could
think about include having a good description of what is being done and why,
and being sure that the Pull Request only changes *one* thing and one thing only, i.e. it is independent and self-contained.

On a personal note, I think Pull Requests nowadays are so important that I even
use them on projects where I work alone so that I can have automated checks
applied before deciding to merge into master. It allows me that extra
opportunity to catch errors before it is too late. In GitHub for example, this
generates a nice visual summary of the checks performed. And yes, you could do
this straight into your branches, but using PRs is easier and more organized.
You could for example easily decline and close a PR, and document why you did
it. [In this PR in one of my pet projects for
example](https://github.com/jcranky/lojinha/pull/84), you can see
[Codacy](https://www.codacy.com/), [Travis CI](https://travis-ci.org/) and
[CodeCov](https://codecov.io/) checking my code before I merge it to master.

Having said the above, it is way too easy to get carried away when developing and you may end up adding several small things at once - be it features or fixes, or simply some refactoring in the same PR - thus making it quite large and hard to read. And don't get me wrong: crafting small, self contained and useful Pull Requests is not easy! Good developers don't create big PRs because they are lazy:sometimes it is hard to see the value in going the extra mile to break what has already become way too big.

Another aspect to consider here is related to *git commit* good practices in general. Having small Pull Requests will also help to have small and focused individual commits, which is very valuable when maintaining code. Let’s illustrate this point with an example that happened recently to me.

## Can I revert this?

I was investigating a bug, something that used to work well and that simply
stopped working out of the blue. After some time and investigation, I found
that the relevant code was simply removed, and that we didn't notice it
beforehand because of yet another bug. Obvious solution: go through the *git
history* and just [git revert](https://git-scm.com/docs/git-revert) the deleted code. Except that I couldn't find any commit related to it.

After further investigation I finally found the commit that removed the files -
but it was a commit that also did several other unrelated things. *git revert* was no longer an option, especially due to the rest of the code that had been changed at this point, and I ended up having to manually add the files myself. The total time spent with this became way more than it could have been.

## Why are big Pull Requests a problem?

The first and most important thing to note here is our human capacity to hold knowledge in one's head. There is a limit of how much information you can keep and correlate at once, while at the same time weighing all its consequences in the rest of the system, or even for external / client systems. This will obviously be different for different people, but is a problem at some level. And when working in a team, you have to lower this bar, to make sure everyone can work at the same level.

When you are reviewing a Pull Request, you have to keep some things in mind, such as:

- What are the new components being created?
- How do they interact with existing components?
- Is there code being deleted? If so, should it really be deleted?
- Are the new components really necessary? Perhaps you already have something in the current code base that solves the problem? Or something that could be generalized and applied to both places?
- Do you see new bugs being introduced?
- Is the general design OK? Is it consistent with the rest of the project's design?

There are quite a few things to check. How much of that can you keep in your mind while you are reviewing code? This gets harder the more lines of code there are to be checked.

So back to small PRs. While all of this has little to no impact for automated checks and builds, this can actually have a huge impact when it comes to code review. With that in mind, let’s go through at least a few ideas you can use to escape the type of situation where you don't really feel you want to break your PR into smaller pieces - but should nonetheless. There is no black magic here, we will just use some nice git commands in a way that helps us achieve our goal. Perhaps you will even discover a few things you didn't know before!

## Sort your imports

I prefer sorting imports in alphabetical order, but the actual criteria doesn't matter, as long as the whole team uses the same technique. This practice can be easily automated and avoids generating a diff when two developers add the same import in different positions. It also completely eliminates duplicated imports generated by merges.

Sometimes this will also avoid conflicts where two developers remove or add unrelated imports in the same position and git doesn't know what to do about them. Sorting imports makes them naturally mergeable.

## Avoid frequent formatting changes

This happens a lot, especially if you don't use code formatter tools like
[scalafmt](http://scalameta.org/scalafmt/) or [scalariform](https://github.com/scala-ide/scalariform) (or whatever is available for your language of choice). Sometimes, you may see a blank line you don't like. Or you don't see a blank where you believe it should be. You simply go on and delete or add it. This means yet another line change that goes into your PR.

This is not related only to PR sizes. This small change has a big chance of creating conflicts if you ever have to update your PR before merging. Another developer might legitimately change a certain code point and you now have to very carefully check if a change was only cosmetic and thus can be ignored, or if there was something real there to consider. More than once I've seen features simply vanish because of this kind of thing.

If you really want to make some formatting changes, do so, but send it as a separate PR that can be merged as soon as possible, and independent of any features. And consider automating this task as well.

## Allow reviewers the time to review

This is a little meta, but important nonetheless: resist the urge to want your code merged right away. I suffer from this myself from time to time, especially when we have some very small PRs. Still, the reviewers should be allowed time to work. If you did a good job of making it small and self-contained, and added a good description to the PR body, you will likely get some speedy feedback.

To better explain this it is worth quoting a teammate, who once said: “Sometimes it feels like we are asking for thumbs, not for reviews.”

If you sense something like this is happening, you should stop. You are
probably rushing the review process, which will only result in some stress and
badly reviewed code. My rule of thumb is to *not ask for a thumbs up*, quite
literally. Every time I catch myself doing so I stop and rephrase, asking for a
*review* instead.

## Advanced and powerful: manipulating your sources with Git

Now for the more complex (and perhaps interesting) practices. What follows will require you to have at least an intermediate understanding of git, and a prerequisite of not being afraid of git rebase. As a side note, I say this because most of us are afraid of it (git rebase) when we first begin learning. This is only temporary though, until you fully realize the power it gives you.

Lets now think of the following scenario. You are working on a feature, and suddenly notice that some kind of side change is required. Something not strictly related to the feature itself, but would be of great help for your task. You might then get the urge to simply go on and do it, together with your current feature code.

## Side changes with Git Stash

See the problem already? If you simply do it, the PR for your feature will get bigger. It will also now contain one (or more) extra concerns, meaning that the reviewers would have to verify this as well.

Instead, you should send this side change as a new PR. There are a few
different ways to do this properly with *git*, but the easiest is to use *[git
stash](https://git-scm.com/docs/git-stash)*. What this does is hide your current changes and let you work with a clean workspace. Then you can switch to a new branch, implement the side changes and submit the PR request.

With that, your teammates can start reviewing these changes immediately while you are still working on the feature itself. Moreover, they will also be able to leverage those changes in their own code - who said that these changes would be useful only for you? And finally, it also gives your colleagues the opportunity to point out problems sooner rather than later. Perhaps something is incompatible with someone else's work, or another developer had just started to make the same kind of changes and now don't have to do anything. You can work together to achieve an even better result. Not to mention that this should a small PR, so quite easy to review.

After the PR is sent, you can recover your work with *git stash pop*. When you move to a new branch, you can get your changes back and start working. Now here there is yet another problem: how to deal with the fact that your side changes are probably not merged yet?

First, the problem in principle is not that big. The side changes are in their
own commit, and thus your main changes are completely isolated. If at anytime
you get feedback and have to update the PR you just sent, you can always stash
your current changes again. Again, see the [git stash documentation](https://git-scm.com/docs/git-stash) for more information on how this works.

Second, it might be that your PR with the side changes will simply be accepted
as is and merged. In this case, it is quite easy to get your feature branch
up-to-date. A git rebase master (or whatever branch your teams merge to) should
do the trick. This is probably the easiest (and safest) variation of *git
rebase* you can use. See the [git rebase documentation here](https://git-scm.com/docs/git-rebase).

Finally, some pointers for the most complex case. You may find that you will have to fix many things on your side changes PR. Also, at this point you may have already made a few commits towards the feature you are implementing. You can use your imagination here and a nifty combination of git features to solve your problem. For example, you could try the following steps:

- Wait for the side changes PR to be merged to master
- Update your master: *git pull*
- Create a new branch, based on master: *git checkout -b my-new-branch*
- Go to your feature branch and carefully use *git log* to find which commits you used for the feature
- Go back to the new branch
- Use *git cherry-pick* to move the commit over that you found with git log

See the [git cherry-pick documentation here](https://git-scm.com/docs/git-cherry-pick). Notice that you can also cherry-pick a series of commits, instead of one by one, if you prefer. This also allows you to use the commit you sent as a new PR already, perhaps in a temporary branch where you add your feature code on top of that.

As you can see, git is a very powerful tool and offers you many ways to solve your problems.

## Splitting up code into multiple PRs
The next scenario is that moment when you’ve already gotten too excited with your code and couldn't stop, and ended up with a huge pile of changes to throw at your peers' heads. In this case, it can be very easy to simply go and say something like :

“Sorry for the big PR. I could split it into smaller pieces but it would take too long.”

Let's go through some ideas to avoid this scenario by applying a little effort and splitting up your work.

First off, if you have well-crafted, individual commits, those can be turned
easily into PRs with *git cherry-pick*. You can simply write down which commits
you want to submit as new PRs, move to a new branch and bring those commits
over with *git cherry-pick*. You can combine this with *git stash* to make it easier to deal with uncommitted code, like described above.

One small drawback is that sometimes your changes are dependent between each other and you might have to wait for the first one to be merged before you can really send the second one. On the other hand, if the first commit is small, chances are that it will be approved quickly, like we have already mentioned.

The whole process might not be too pleasant for you at first, but will definitely help the rest of the team. A small tip that might sound obvious is to "pre-wire" your PRs: go to your peers and let them know that those PRs are coming and what they are about. This will help them review your code faster.

## A note about failure

It might all be beautiful on paper, but in reality this is not always possible. Even if you follow the tips presented here, you may still end up with big PRs from time to time. The critical point is that, when this happens, it should:

- Be a conscious decision, not an accident;
- Be as small as possible, i.e., you applied at least some of the tips above;
- Be an exception, not the rule.

Remember: this is all about teamwork. Some things might make you a little slower, especially until you get into the right frame of mind, but it will make the whole team faster in the long run, and will also increase the chances of bugs being caught during code review. A final plus is that knowledge-sharing will also be better, since there is less to learn on each PR, and team members can ask more questions without being afraid of turning the review process into an endless discussion.

If you have read everything up until this point, then perhaps you are interested in reading even more. Here are some further interesting references around the subject:

- [Respectful Changes](https://chromium.googlesource.com/chromium/src/+/master/docs/cl_respect.md)
- [Respectful Code Reviews](https://chromium.googlesource.com/chromium/src/+/master/docs/cr_respect.md)
- [How to write the perfect pull request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request)
- [11 proven practices for more effective, efficient peer code review](https://www.ibm.com/developerworks/rational/library/11-proven-practices-for-peer-review/)

What do you think? Do you have other techniques that you think could help in
creating small and effective PRs? Or do you disagree that this is necessary?
Let me know via Twitter at [@jcranky](https://twitter.com/jcranky).

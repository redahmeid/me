---
title: "Predicting the EPL"
date: 2021-12-08
category: football
summary: "In my covid state, I decided to give something a go that has been of interest for a while. I decided to use basic (and I mean basic) statistical analysis to work out who will win the premier league this season. This is how that exercise went, in my self-isolation."
tags: []
---
I have covid. Which means I am isolating. Stuck in a room. My two eldest (yet still only primary school) children also have covid. So the three of us are isolating in a single room, to keep the others safe. I am certainly not asymptomatic, but am grateful that the symptoms are probably described as mild. An on and off cough, a heavy head but not bad enough to need medicine (during my Pharmacology degree, about the only lesson I remember was “usually the best medicine is no medicine”). I do have moments of unusual tiredness and fatigue but that could be as much about my lack of activity as covid itself.

While covid leaves me with only a rather small window of coherent thought, it does mean I am inflicted with boredom in a way I have not felt since I was a teenager and the 2 dozen daily activities could not keep me occupied.

I needed something to keep my mind active, but nothing too important or time-consuming because frankly, there was never a guarantee I was going to be able to keep it up.

I decided to combine a couple of passions of mine. Football - a passion as old as (my) time. These days, it’s more reading, watching and talking about it than playing. The second is statistics. In fact, calling it a passion is a bit hyperbolic. Statistics have become imbued into everything we do (not even going to start talking about so called machine learning). Statistics used to have a negative connotation in my mind, probably in no small part to the phrase “Lies, Damned Lies and Statistics” - the idea that you can use statistics to back up any weak argument.

Unfortunately, there is plenty of undoubted evidence of “statistics” being used as evidence for a pre-conceived idea. In his excellent book “Inverting the Pyramid”, Jonathan Wilson highlights the impact of the FA Technical Director in the 1980s, Charles Hughes, on the style of football England and English clubs employed. Charles Hughes assertion was that teams would score more goals if they played direct football, showing through “statistical analysis” that ~90% of goals were scored with passing moves of 5 or fewer. He came to that conclusion by taking a sample data of 202 goals. Let me repeat……202 goals. He based his entire footballing philosophy, and that of England, on sample set of 202 goals. As a comparison, in Man City’s record breaking season they scored 106 goals. Over half that total. And the truth is, Hughes had already established his view way before he did his “analysis” and that the stats were just meant to back up his already accepted dogma. Statistics really need to be treated with care; read The art of Statistics by David Spiegelhalter to understand why.

So now I’ve said that, this writer with no statistical analysis experience, is going to do some covid ridden statistical analysis to predict this year’s Premier League positions.

## Some caveats

1. I am an amateur football statistical analyst. I’m, of course, not being truthful. Amateur is massively generous. I am an amateur in the same way that I am an amateur footballer. The odd 5-aside every few months does not make me an amateur footballer.
2. I do not have a statistics background, apart from fundamental statistical analysis for experimental results I did when I was at uni over 20 years ago
3. The real statistical work has been done by others. I’ve just incorporated the outcomes of that analysis into some fairly basic maths
4. Please please please don’t take these predictions and bet your house on this. Please.
5. I have only based this on 4 seasons worth of data.
6. I’m really not an amateur

## Results and findings

The bit you are interested in. The outcome of my predictions. I’ll talk about the method a bit later on.

![Predicted final Premier League table after game week 15](/blog/predicting-the-epl/screenshot-2021-12-08-at-19.08.41.webp)

A few things to take note of:

1. These are predictions based on game week 15. Predictions are better from GW16 onwards (obviously, the nearer the end the better). We have not yet played GW16 so have used GW15 instead
2. The predicted points tend to be not so accurate, looking at historical info. At GW15/16, my predictions have been ±10 points out on average. The top teams tend to score worse than predicted, while bottom teams tend to score better than predicted. My hypothesis (which I have not tested yet) is that the top teams’ performance can only get worse from the highs they start with, while bottom teams can only get better. A mix of relaxing because you have done the hard work, and working harder as relegation is on the line.
3. An exception to the above finding is, was Liverpool in the 2019/2020 season. In GW15, based on performance, they were predicted to score 89 points. They actually scored 99 points. For that reason, it’s arguable this year’s Liverpool side are better than their title-winning side by the same point. For those who watched Liverpool that year and this, you’d probably agree.
4. While my predictions for season-ending points total are fairly inaccurate at the moment (needs tweaking), the end position is actually pretty accurate. In fact, by GW15/16, predicted final result is within ±1 place, with almost half being exactly right. For top 4, it is very accurate. And predicted end position is a better indicator of where a team will finish than their actual position that game week.

## Method

As with anything, I’ve started with a hypothesis. The hypothesis, in this case, is an old football adage.

> The best team usually wins the league

The next question to answer, then, is what do we mean by the best team? Ultimately, football is about scoring goals and not letting them in. And in fairness, over the course of a season, the winner of the league tends to have the best goal difference. But in a low scoring game, luck can play a part in any single game so that the team that “deserves” to win, doesn’t. Luckily, the real football statisticians have developed a concept of “Expected Goals” (xG). You can find a good explainer of xG [here](https://theanalyst.com/eu/2021/07/what-are-expected-goals-xg/). But in summary, it is a measure of the likelihood of a shot going in based on a variety of factors, including from where the shot was taken and in what phase. So in any given game, the team with the higher xG can be considered the “better” team on the day, or more accurately, have performed better in the match.

I use that as the basis to all of this. Based on that I can work out Expected Points (xP) for each game to determine how many points a team deserved based on their performance.

For example, earlier this season, Crystal Palace beat Manchester City, thus winning 3 points to City’s 0 points. However, City had an xG of 2.29 while Palace has an xG of 0.75. I round these figures (to mimic an actual result), therefore performance-wise City deserved a 2-1 victory and therefore the 3 points to Palace’s 0.

The idea is that teams will tend to, over the course of a season, regress to the mean - their performances start to match their results. So if they are outperforming their xP their results will start to match their performances. Think of all those promoted teams that started at a blistering pace before falling down the league (Huddersfield and Blackpool are two that come to mind). The truth is, their performances (needs confirming) probably didn’t match their early results and it could have been guessed.

Initially, I came up with a predicted end score that was calculated as follows:

> ***xP(season end) = P + (xPPG\*Nr)***
> 
> **where xP= Expected Points, P = points currently accrued, xPPG = Expected Points per Game (xP/games played), Nr = number of remaining games**

I then decided that actually, if a game is home or away is probably a factor in number of points available (last season tested that theory massively, but we are back to something closer to the norm this season). Even if not, I decided to split out xPPG into xPPGh (Expected Points per Home Game) and xPPGa (Expected Points per Away Game). This was pretty easy to do. So the equation was now:

> ***xP(season end) = P + (xPPGh\*Nrh) + (xPPGa\*Nra)***
> 
> **where Nrh = number of remaining home games and Nra = number of remaining away games**

This definitely increased the accuracy. But there was one more obvious factor here. Surely, playing against a top team means earning less points than playing a bottom team. And so, if you are a team who have played all their away games against top half teams so far, you may have more opportunity to pick up points. So I added this in too. Essentially, I needed to get xPPG for when a team plays a top half team at home (and away and bottom half etc….). This is historically easy to calculate. Just need to work out the position of a team at the beginning of a GW and then you have your xP (and can calculate PPG off that back of that). But the fact a team is top 10 this week, doesn’t mean they will be top 10 in 4 weeks time.

> ***xP(season end) = P + (xPPGht10\*Nrht10) + (xPPGhb10\*Nrhb10) + (xPPGat10\*Nrat10) + (xPPGab10\*Nrab10)***
> 
> **where xPPGht10 = Expected Points per Home Game against top 10 team**

This was harder. Essentially, I worked out the result of each future match based on xG so far, then worked out where each team was at the end of that game week. Once that has all been worked out I predict how away games against a top 10 team another team will come up against. Do this for home and away. So the new equation looks something like this:

I could definitely break this down further (and will do). But covid head limits how much brain power I can use at any one point.

## Tools and Timings

This will be a short paragraph. All this I did over 3 days, but I spent maybe no more 3-4 hours. It’s time-consuming and it hurts my head at the moment (but it’s fun). In terms of tooling, I am simply using Google sheets. Would love it if someone could advise something better to use, but for now it does the trick. There is a lot of duplicated data (which, from my data science pals) seems normal.

I also grabbed historical footy data from this website - [http://footystats.org.](http://footystats.org.) It cost £19.99 for 1-month of access. I have cancelled already because I currently doubt I will keep doing this too far beyond my isolation.

## Other hypotheses to test

1. Bringing in a new manager produces a temporary but decisive out-performance of xP
2. Bringing in a new manager produces an increase of xP without improving actual points
3. xP for teams reduce during the Christmas and New Year football schedule
4. xP for top teams impacted less during the Christmas and New Year football schedule
5. Squad size is inversely proportional to the amount of fluctuation in xP - i.e. the bigger the squad size the less fluctuation in xP
6. xP reduces later on in a season that at the beginning

## A request

One thing I am more comfortable with as I get older is not being good at something. I may have hid the fact in the past by not even trying. These days, if I’m new at something and it doesn’t come to me straight away, I keep going (if I’m enjoying it). And I don’t fear people telling me where I have gone wrong or even better, what I can do to improve.

So if anyone fancies giving this newbie some tips I’d very much appreciate it. Other than, don’t forget to come back and see how accurate these predictions were.

### Post-credit extra content

1. **Norwich, despite being bottom of the table at the moment, will avoid relegation.** This is a big shout, as we all know (do we?), the chances of getting relegated if you are bottom of the league at Christmas is very high. Let’s see how the next 2 weeks go for Norwich
2. **Burnley finally to be relegated.** I’m sad about this. I like Burnley and Sean Dyche. And to be honest, they tend to out-perform, so let’s hope they do it again and I’m wrong.
3. **West Ham seem to be fully deserving their place in the top 4.** They’re hanging on by the skin of their teeth, but it looks like they may finish quite comfortably in the top 4. Good for Moyes I say.
4. **Southampton have been more impressive than their results indicate.** This shouldn’t be a surprise to many people who have watched Southampton or followed pundits. Southampton have been good. I think that will start to show. They’ll be mid-table.
5. **It’s a two horse race.** So far, all the talk has been about a 3 horse race this season, with Chelsea showing good form. Truth be told, they seem to have flattered a bit so far. Tuchel is great, he could turn things around. But the stats seem to just confirm what the eyes see. Chelsea are good and solid, but they are not Liverpool and Man City type all-round quality.
6. **This is the best Liverpool side we’ve seen under Klopp.** I don’t think they’ll win the title this year. But that is because they are unlucky to be against one of the greatest club sides ever in Man City. But they shouldn’t have won it on performance in 2019/20 season. City just under-performed (which is understandable). But this Liverpool team have been brilliant and have matched City to date in performance.
7. **The AFCON is likely to be the decider.** I think, when it comes down to it, Liverpool likely to ultimately miss out because of the AFCON. They will miss their two best players. City, not as impacted. The stats say it’s tight. But they don’t take into account the AFCON.

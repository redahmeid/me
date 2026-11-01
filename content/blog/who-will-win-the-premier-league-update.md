---
title: "Who will win the Premier League: update?"
date: 2021-12-27
category: football
summary: "City for the title. Spurs finishing 4th. Newcastle to stave off relegation. These are some of the predictions my new Premier League prediction model has come up with. How right is that likely to be?"
tags: []
---
About 3 weeks ago I wrote this [post](/blog/predicting-the-epl) describing how I went about using the Expected Goals statistic to try to predict the outcome of the premier league. We are now halfway through the season…..kind of. Officially, it’s game week 19, with 19 games to go. I thought I would revisit the predictions and use this week as my final prediction for this season (as you get closer to the end, predictions are necessarily more accurate, but where’s the fun in that). It should be noted, with the postponements and reschedules due to covid, this is not as neat a “halfway through” as I would have liked. But it will do.

I also decided to make a few changes to the model, which I go into more detail below, inspired by this [LinkedIn comment](https://www.linkedin.com/feed/update/urn:li:activity:6874380641585250304?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A6874380641585250304%2C6875591719992340480%29) from Andy Mace. While I was unconvinced of the credit and debit notion of xPPG, it did make me think that one of my earlier theories was probably wrong.

I had assumed in the previous model that PPG eventually converges to match xPPG exactly, or at least close. Well, is that true? Partly. Looking at the charts and previous seasons, PPG does indeed converge towards matching xPPG but how close seems to be dependent on the team. So, based off of Andy’s comment and looking at the charts, I’ve theorised that clubs have a pattern of how closely PPG matches xPPG?

The other thing I don’t take into account in the other model is how does performance change throughout a season. The assumption was that xPPG stays pretty stable. Again, looking at charts and past data suggested this varied and possibly most teams followed a pattern. e.g. Man City for the last 5 seasons improved their xPPG in the second half of the season (PPG did not always follow suit).

Caveats apply:

1. I’m using quite a limited data set, and with small datasets, things like “luck” and “one-offs” do have an impact.
2. In such a low scoring game, “surprises” are more likely. I think I could model the most likely surprise results, but haven’t
3. I know there are certain things that can impact performance that I haven’t included in the model. Things off the top of my head are; manager changes, afcon, the impact of dependency on certain players, relegation battles etc…
4. With so many matches postponed, this does play havoc with the model. However, I don’t know in what way. Will teams who have had many postponements suffer from the fixture congestion later on? Or do some teams with new managers, like Man Utd and Spurs, benefit from fewer games early on with more. I’ll talk about how the model handles it later.
5. I’m no data scientist or statistical analyst. I just like maths, football and challenges. DO NOT MORTGAGE YOUR HOUSE FOLLOWING THESE PREDICTIONS

### The prediction

Most don’t care about how I worked this out. So I’ll go straight to the prediction.

![Predicted final Premier League table at game week 19](/blog/who-will-win-the-premier-league-update/screenshot-2021-12-28-at-11.49.58.webp)

I’d say this is quite a believable table. Man City winning the title seems acceptable. That margin seems a lot, but they have tended to accelerate in the second half of the season. Past data indicates that both their xPPG and how close to come to match that improves as the season goes on. In fact, of all the teams, Man City most closely follow patterns.

Liverpool will be run quite closely for second by Chelsea according to the prediction. But they have fluctuated in previous seasons more than City and last season’s performance affects the model a fair bit. In 2019/20, the season they got 99 points, they actually massively overachieved. Based on xPPG, City should have won the title that year. Last season, Liverpool, while not performing as champions, suffered a lot of “bad results” leading to underachievement. So it is a bit skewed. This season, Liverpool are performing better than their title winning season. It isn’t far-fetched to suggest this is a better Liverpool side than the 99 point team from two seasons ago. But they’ll miss out on the title, but should be second. Chelsea completes the top 3, which feels nailed on to me.

As a Spurs fan, it’s nice to see them looking like 4th is theirs. This matches nicely with what we’re seeing from the games since Conte has taken over.

And finally at the top, I’m a little surprised with Arsenal’s points total, the way they have been playing lately. It feels lower than you would guess, but they have tended to fall away in the second half of the season and that has caused the lower than expected total. The question is, will Arteta steady the ship. I do feel 6th seems a good shout. But as can be seen from the lowest possible finish, Spurs, Man Utd and Arsenal will be fighting it out for 4th.

At the bottom, a couple of notable calls. This table was updated with Newcastle’s result against Man Utd tonight. That gives them an edge over the three below them. But definitely not safe. Burnley is a sad one for me. While I wouldn’t pay to watch Burnley, I am a fan of Sean Dyche and how he has established them in the top flight. Looking at the data, they have significantly overachieved for the last 5 seasons at least. That’s down to Dyche. It looks like that may end this year, but I hope not.

Slightly surprising and something I don’t entirely believe is how low down Leicester are. Still a good team with an excellent manager. But the struggles have been real this season. 37 points is below the mythical 40 point mark to stave off relegation. But that mark is definitely flawed and if I was to guess, they would be closer to the 45 points.

Finally, Leeds and Brentford, though seemingly safe, the lack of data for them (second and first season in the PL respectively), means I cannot develop much of a pattern. So I would still be worried for them.

### Glossary

- xG = Expected goals for
- xGA = Expected goals against
- P = points
- Pl = Games played so far
- PPG = Points per game. The total P/Pl
- xP = Expected points, worked out by xG - xGA for any given match
- xPPG = Expected points per game. This is total xP/Pl
- pPPG = Predicted points per game
- Overachievement = PPG > xPPG
- Underachievement = xPPG > PPG
- pP = Predicted points. What the final points is predicted to be
- xPPGthh = xPPG against top half teams played at home
- xPPGtha = xPPG against top half teams played away
- xPPGbhh = xPPG against bottom half teams played at home
- xPPGbha = xPPG against bottom half teams played away
- PPGvxPPG = Difference between PPG and xPPG, indicating Over or Underachievement

### Changes to the model

First of all, let’s have a quick look at how the new model changes things in comparison to the old model after 15 games.

![Old model versus new model predictions after 15 games](/blog/who-will-win-the-premier-league-update/screenshot-2021-12-27-at-21.01.31.webp)

The new model feels a little better (102 points always seemed far-fetched). But in actual points, there isn’t a huge difference. But a few points can make the difference. I’ll definitely revisit once the season is over.

As I mention above, the LinkedIn comment inspired a change to the model. The model takes past performance into account to see how teams perform as the season progresses - the previous model assumed performance, measured by Expected Points, remains steady throughout a season. But is that likely? So I now look at how teams performance change as the season goes on. This is done by calculating a weighted average for the last 4 seasons of xPPG(final) - xPPG(n), where (final) is xPPG by the last match and (n) is for the desired gameweek. It is weighted with most recent year being worth more.

There was also an assumption in the previous model that a team’s actual points per game move towards the expected points per game. Looking at past data, this is pretty much the case. PPG does move towards xPPG, but rarely matches it exactly. All teams will over or underachieve to some extent. You can see that here from thee 2020/21 season

![How points per game moves against expected points per game through a season](/blog/who-will-win-the-premier-league-update/screenshot-2021-12-27-at-20.14.09.webp)

The new model now takes this into account by calculating a weighted average of change in PPGvxPPG throughout a season from a particular gameweek for the last 4 seasons. It is weighted with most recent year being worth more.

Finally, where matches have been postponed, the model bases the result on predicted outcome. This is not ideal, but gives a good indicator.

I tested the new model against previous seasons, and it is a lot more accurate than the old model. While it wasn’t 100%, it was approximately 80% accurate in predicting which part of the table a team would finish in after 19 games (Champion, Top4, Midtable or Relegation). And regularly, even if not in the exact part of the table, it was missed by no more than 1 place. 100% on predicting the champion (small dataset of course).

One final thing missing from the model is a confidence level. I would like to assess how confident I am of the prediction, but I haven’t found a way. I may update this once I have figured it out.

### The calculation

pP = P + (xPPGthh x top half home games remaining) + (xPPGtha x top half away games remaining) + (xPPGbhb x bottom half home games remaining) + (xPPGbha x bottom half away games remaining)

The above is then adjusted based on expected ∆xPPG and ∆PPGvxPPG. If PPGvxPPG > 0 then ∆PPGvxPPG is negative (with the assumption that teams move towards zero) while if PPGvxPPG < 0 then ∆PPGvxPPG is positive.

All this required a lot of Google spreadsheets and many failed experiments. You can see the [latest season sheet here](https://docs.google.com/spreadsheets/d/1ZF_2WR8bDByVRD3IkBHhzyV6HE18mWSd89ie45BfWvE/edit?usp=sharing), but you may have difficulty making or tail of it.

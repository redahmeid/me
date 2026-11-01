---
title: "Just say no: to versioning APIs"
date: 2021-02-09
category: technology
summary: "The success of your APIs is in making them easy to consume. That should include not forcing the consumer to change. Rethink the approach to anything that makes API consumption more difficult. Do the hard work at the design stage, and hopefully, you’ll have easy to use, evolvable APIs that will be maintainable and keeps everyone happy."
tags: ["apis","design","architecture"]
---
I don’t think it is giving away too much to say that I believe we should never version our APIs. I also know that as a concept, non-versioning is controversial. Interestingly, the disagreement in approaches usually, in my experience, is due to a fundamental core principle agreed upon by all. And that is, producers of APIs should not break consumers of APIs through change.

I think that is an excellent basis to start a conversation. My approach to debates is to find common ground as early into the discussion as possible and build from there. Therefore, let’s define that principle again more clearly.

> **API consumers expect never to be broken by a change in the API they consume.**

I am sure that readers will in no way be surprised to learn that I am not the first to push the idea of no versioning. The concept has been around for many years. And yet, it’s still controversial. Roy Fielding, the man who wrote a thesis describing RESTFul APIs and introduced to the world the concept of HATEOAS (though the thesis never uses the weird acronym), is exact on the subject. 

> The reason to make a real REST API is to get evolvability … a "v1" is a middle finger to your API customers, indicating RPC/HTTP (not REST)
> 
> — Roy T. Fielding (@fielding) [September 8, 2013](https://twitter.com/fielding/status/376835835670167552?ref_src=twsrc%5Etfw)

Fielding talks about this in the context of REST APIs with a be damned if you go for non-REST attitude. In my opinion, REST is an elegant architectural style that does make building evolvable APIs easy, without succumbing to versioning. This post isn’t a place for detailing REST; there are plenty of better resources out there for that. But suffice to say using RESTFul principles for API design is probably a strong starting position.

However, REST is not the only solution, and good API design can overcome versioning.

Producers of APIs have broadly taken two approaches to not breaking consumers. The most common practice, and the one that is mostly considered the standard, is to version their APIs, usually deprecating the older versions and encouraging consumers to migrate. There are multiple ways taken of describing the version in the request. The most visible (and probably the one most organisations default to) is in the URL. Others will pass the version via the Accept header in the request. You will likely come across several resources that suggest this is best practice. 

API versioning has downsides, irrespective of the patterns used. For one thing, supporting one version of anything is a pain. Finding a bug in one version necessitates affirmation that it doesn’t exist in other versions. If it does, there are a couple of options. Fix it in all versions, proportionally increasing the amount of testing needed. Or fix it in the latest version only and inform consumers that they need to move versions. And if it only exists in one place, should consumers move to a version without the bug (say the latest), or does a superseded version need fixing?

Some patterns minimise the pain of versioning. Advocates will argue that the concerns I raise are resolvable. And they are. And they have been resolved—however, it is fixing a self-inflicted issue. No versioning removes those worries. And for the consumer of your APIs, they benefit equally; they don’t need to change, are not broken by changes to the API, always have the latest functionality, and the documentation they need to read is minimal.

Let me backtrack slightly from my first sentence in this post. I believe versioning is unnecessary as I have yet to come across a situation in API design and development that needed versioning. I have yet to be convinced in practice that versioning is a necessity or even preferable. Below is the sort of conversation I have when suggesting we shouldn’t version.

> **What if we need to add a new mandatory field in the request?**
> 
> If it really is a “mandatory” field, why do you have a version of the API that doesn’t require it?
> 
> **We need it to carry out some new business logic?**
> 
> OK, a few things are going on here that we should talk through.
> 
> Again, this should not be described as a mandatory field or mandatory new business logic. If you support a version of the API that doesn’t need it, you support business functionality that doesn’t need it. At best, this is an optional field that may change the path your code goes down. Or if it is truly mandatory, why support a version that doesn’t include it?
> 
> Make the API contract as simple as possible by only requiring inputs that you have no way of working out yourselves. Make the internal workings of the API do the complex stuff, not forcing the consumer to do it. That way the contract can remain simple and your business logic and API avoid the brittleness caused by mandatory change.
> 
> **We made a spelling mistake in the field name, or we’re changing the style of fields. If we change the field names, it will break the consumers.**
> 
> So don’t change the field name. Consumers are using it fine. A colleague once pointed me in the direction of the HTTP header Referer. This is misspelt. There has been no suggestion that this should be corrected, as it was already in use. The same with API fields. If it is not harming, leave it.
> 
> However, if you really want to change the spelling, support both spellings. Maybe only document the new one but don’t break if the old spelling was used. Add a fitness function that indicates the trend in use of the old spelling vs the new. If the usage of the old spelling drops to a certain level, maybe then make a concerted effort to move the remaining clients across but highighting that you’ll stop supporting the old spelling.
> 
> But I go back to my first advice. Don’t bother changing the spelling.
> 
> **We want to change the structure of our response.**
> 
> This is an interesting one which I would usually dig a little deeper into. But I would start with why do you need to change the structure? I am sure you do but articulating why may help in designing it in a non-breaking way.
> 
> If necessary, consider content negotiation, where a consumer includes in the Accept header the media type they expect. If the structure is significantly different, maybe it isn’t a new version of the API, just a new representation of the resource that the API returns.
> 
> As with the above, handle the change internally, not force consumers to change.
> 
> **It’s not just a different structure, the response looks very different**
> 
> Roy Fielding points out during his discussions on versioning that if the API is so different that you need to version, maybe it isn’t a different version of the API -maybe it is a completely different API.
> 
> **Github version their APIs**
> 
> I think Github do APIs really well. If you used them as your exemplar, you wouldn’t go far wrong. Github is on version 4 of their APIs. How do I reconcile the two views (i.e. GitHub are good, don’t do versioning)?
> 
> I could start by restating that phrase. Github is only on version 4 of their APIs after 13 years. That is one new version every 3 (and a bit) years. But still, it is a new version. 
> 
> Another thing to note is that they versioned all their APIs at the same time. Not individual versioning. And there is a reason for that. The move from version 3 to version 4 was a move from REST APIs to GraphQL. They didn’t version the APIs. They versioned their architectural style.
> 
> While I am not privy to the thinking behind this, if you visit the [Github docs home page](https://docs.github.com/en) they do not talk about version 3 and version 4 of their APIs, but the REST APIs and GraphQL APIs. I’d suggest this is further evidence they see this as a change of architectural style. Maybe, and now I am guessing, the version number is an easy way to differentiate in the URL or indicates the direction of travel they intend to take. Either way, I would strongly suggest they don’t version APIs but simply architecture. And if there were a valid reason to use versioning, this is it.

The above is a sanitised conversation, and readers will likely identify other scenarios requiring versioning, which I would love to hear about in the comments. I’m even happy to work with people on the design. I don’t want this to seem like a straight forward thing to do, especially if you do not start from a solid API design base. When you consider versioning as an option, take into account the following:

1. Make all changes to response or request optional rather than mandatory.
2. If they are mandatory changes, why do you support a version that doesn’t have those changes?
3. Keep the API contract as simple as possible. Limit the number of input requirements to what is absolutely necessary to make the system work. Any business logic inputs should be retrieved from internal sources as much as possible. By making the API do the work, changes to the contract will be rare.
4. Would the change to the API benefit every consumer? If not, think about how impactful the change is for consumers who don’t need it?
5. Would you support every version forever? Or will you start to decommission versions and force consumers to move across?
6. Is the change due to new business logic? If so, will the new business logic be part of every version?
7. If the change is due to new business logic, should that even be a concern for your consumers?
8. Does a new version make things easier or more challenging for the consumers of your APIs?

Ultimately, ask yourself one question if the case for versioning seems strong; “does the benefit of this change justify the time, effort and impact of supporting multiple versions, to our consumers and us?”. The success of your APIs is in making them easy to consume. That should include not forcing the consumer to change. Rethink the approach to anything that makes API consumption more difficult. Do the hard work at the design stage, and hopefully, you’ll have easy to use, evolvable APIs that will be maintainable and keeps everyone happy.

---
title: What I've learned making this website.
description: Most are familiar with YouTube coding tutorials but are they really helpful?
date: 2024-05-07
cover: dreamscape-tutorial.jpg
tags:  
  - blog
--- 

I made this website by following the Nuxt Content tutorial by [Net Ninja](https://github.com/danvega/net-ninja-portfolio). At first, I was just copying the code line by line and at times even just skipping straight to the github repo of the finished project and copy-pasting from there. 

It is obvious that absolutely zero learning happened when I had the "finished" product. The website was very basic but it was functional. The navbar is a pre-made component, the footer also remained the same as in the tutorial.

### What was it good for then?

As a person that was unfamiliar with modern web dev, discovering JS frameworks after only having proper experience with PHP and vanilla JS and CSS, it was a bit overwhelming. However, I did learn when the framework approach is good and had my frustrations when it was not so good.

Overall I think for a simple blog website like this one, it is not needed, however it did make it very simple to add posts with **Nuxt Content**. I had to get familiar with the very basics of Nuxt, managing config files and the basics of Vue. I think the tutorial showcased pretty well, what I had to do and taught me the way everything works together.

After dabbling with dependencies and packages on my main machine I realised that VSCode dev containers were the way to go. This has carried it's own set of problems such as hot-reload not working properly and general slow performance. 


One more source of confusion was that TailwindCSS was available both as a Nuxt module but it could also be used as an npm package. There are so many ways to do things, it is tought to determine which is the "best".

Of course I have not even scratched the surface when it comes to the capabilities of these frameworks but making this website served as teaching me the fundamentals of using them.

---
### From tutorial to learning

To actually learn something from tutorial besides pressing the CTRL key a bunch of times, I decided to style and play around with the template. I turned parts of the pages into components, played with the styling a lot, however, without any real vision so it looks uncohesive. Oh well ¯\\_(ツ)_/¯.

Making the blog post cards helped me understand how Nuxt uses components and how data is passed around and imported. And styling wise, making the project cards made me see how useful **Tailwind** can be when combined with a component framework. 

This has actually taught me that with these new frameworks, despite having good documentation, the helper content and support is not there yet. For instance, this blog is styled using **tailwindcss/typography** plugin and they offer good pre-sets for html and markdown elements such as headings, paragraphs and captions. I really missed a way to view how these were styled without really looking into the code. 

---

I definitely need to finish a few more projects to be able to confidently say that I "know" Nuxt and Vue but I believe this is a good way to start on the **Dev** part of **DevOps**. So if there is anyone out there like me with general programming, computer and sysadmin knowledge, following tutorials is fine as long as you do something yourself on top of the tutorial content.
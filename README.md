# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When selecting a link, your web browser sends a request to a domain server requesting access to a site using an ip address.
The domain server verifies that the site exists and sends information for the site back to the requesting browser.
The browser then translates the web page from HTML to the viewable content we can understand.

## From start to finish, how does data reach you to be rendered in the browser?

Put simply retrieving data from the internet is done via a ping/response type method. Your web browser will first check
with a domain server to translate a URL into an IP address to connect to. When the domain server comes back with an IP
your web browser can then connect to that server to ping for the most up to date version of the site requested. If the specific
page requested exists, the server will send the HTML data back to your web browser to be resolved.

## What code is rendered in the browser?

Web browsers will render HTML code into viewable content from a site server.

## What is the server-side code’s main function?

Servers are where information and data is kept, therefor server side code will primarily surround this function.
Servers will hold the most up to date version of websites, or can be a repository for files. Server code will
focus on verifying incoming requests as valid and sending the requested data back to the requesting computer.

## What is the client-side code’s main function?

Clients are used to ask for, obtain, and render information and data. Client code will normally focus on manipulating
code or data received from a server, but is not limited only to this use.

## What is runtime?

Google Dictionary defines the word "runtime" as: the length of time a program takes to run. Runtime can also be the time
it takes for a web browser to render data sent from a server. Roughly the same thing right? Runtime can also have errors
depending on if the client or server side is having issues.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

A web browser can render multiple instances of a client asset, this can be done by having multiple browsers or multiple
tabs in a browser open to the same site. However caching can have an impact on this.

## How many instances of the server-side code are available at any given time?

Generally speaking servers will only allow 1 version of the data at a time: the most up to date. There are a few exceptions,
but this is rare.

## How many instances of the databases connected to the server application are created?

It is my understanding that instances connected to server databases are created when an instance is requested (unless otherwise
specified in server side code). This means that individual tabs open to the same site/database can have their own 
connections, however an individual tab or browser would likely only have 1 single connection to a database at a time.

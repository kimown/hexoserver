# hexoserver
a server for hexo ,using webpack-dev-server, react-hot

You can skip these phase If You have installed them
```
npm install npm -g
npm install hexo-cli -g
```


HOW TO USE:

```
cd /tmp
hexo init blog
cd blog
hexo new mydemo
hexo g
npm install hexoserver-cli -g
hexoserver
```
Open [http://localhost:4001/](http://localhost:4001/)

Click the article named "mydemo",

Open a new terminal


When use :w, you can see the page show the changes In real time.



Add some markdwon content,here are some demos.


<pre>

```javascript
let a = "Hello World!";
alert('Hello syntax highlighting.');
```
</pre>


```

# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

![iamge](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

As Kanye West said:

> We're living the future so
> the present is our past.

```



YOU CAN IGNORE THE:
```
title:
date:
tags:
```
It is not a mistake ,I will fix it in the future version.



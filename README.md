# hexoserver
a server for hexo ,using webpack-dev-server, react-hot

![preview](https://raw.githubusercontent.com/kimown/hexoserver/beta/resources/preview.gif)


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
Open [http://localhost:4001/](http://localhost:4001/),click the article named "mydemo".


Open a new terminal,
```
cd /tmp/blog/source/_posts/
vi mydemo.md

```

If you use windows, you should run `npm install hexoserver --save` manually.


Add some code.

<pre>

```javascript
const self = "hexoserver";
console.log(`show syntax highlighting,${self}`);
```
</pre>


When use :w, you can see the page show the changes In real time.



Add some other markdwon content,here are some demos.


```

# This is an h1 tag
## This is an h2 tag

![iamge](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

```



YOU CAN IGNORE THE:
```
title:
date:
tags:
```
It is not a mistake ,I will fix it in the future version.



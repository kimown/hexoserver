# hexoserver
a server for hexo ,using webpack-dev-server, react-hot



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
Open http://localhost:4001/ ,and then click the article named "mydemo",
then open a new terminal

```
cd /tmp/blog/source/_posts/
vi mydemo.md
```

Add some markdwon content,here are some demos.[See more](https://guides.github.com/features/mastering-markdown/):




```
\`\`\`javascript
if (isAwesome){
  return true
}
\`\`\`
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

![iamge](https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png)

As Kanye West said:

> We're living the future so
> the present is our past.

```




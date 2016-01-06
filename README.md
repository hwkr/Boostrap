# Boostrap

A fully responsive, open source, theme for [Ghost](https://ghost.org/) using Bootstrap. See it in action at [hawker.me](http://hawker.me/)

![Preview of Theme](http://www.hawker.me/content/images/2016/01/facelift.png)


[![Build Status](https://travis-ci.org/bitHero/boostrap.svg?branch=master)](https://travis-ci.org/bitHero/boostrap)
[![David](https://img.shields.io/david/dev/bitHero/boostrap.svg)](https://github.com/bitHero/boostrap/blob/master/package.json)
[![Ghost Version](https://img.shields.io/badge/ghost-0.7.1-blue.svg)](https://github.com/TryGhost/Ghost/releases/tag/0.7.1)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/bitHero/boostrap/blob/master/LICENSE) 
[![Built with Grunt](https://cdn.rawgit.com/bitHero/BitBadges/master/svg/grunt.svg)](http://gruntjs.com/)

## Getting Started

To get going you will need an instance of Ghost do develop in, the quick start is [here](https://github.com/TryGhost/Ghost#quick-start-install).

Clone the repo into `content/themes/`,

```bash
git clone https://github.com/bitHero/boostrap.git
```

Install dependencies and build files,

```bash
npm install
grunt build
```

## Usage

Want to use this theme on your website? Here's a list of things to change,

* The footer in `partials/footer.hbs`
* Follow me on Twitter `page-home.hbs`
* Remove the console message in `assets/js/index.js`

The home page requires that a page is created in ghost with the tag _home_. If you want to have this be the root (`/`) of your site you'll need to do a URL rewrite. 

Here's my nginx config if you're using nginx,

```
server {
    listen 80 default_server;
    listen [::]:80 default_server ipv6only=on;

    server_name hawker.me; # Replace with your domain

    root /usr/share/nginx/html;
    index index.html index.htm;

    client_max_body_size 10G;

    location / {
        rewrite ^/$ /home/ break;
        rewrite ^/blog/$ / break;
        rewrite ^/blog/(.+)$ /$1 break;
        proxy_pass http://localhost:2368;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_buffering off;
    }
}

```

## Origin

Originally forked from a barebones theme (also called Boostrap) by Matt Lambert.



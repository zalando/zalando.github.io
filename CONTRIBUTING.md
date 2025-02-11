# Contributing Guide

👍🎉 First off, thanks for taking the time to contribute! 🎉👍

# Development

To build the documentation locally, you need at least:

```
$ ruby --version
ruby 3.0.2p107 (2021-07-07 revision 0db68f0233) [x86_64-linux-gnu]

$ bundler --version
Bundler version 2.3.26
```

## Running locally

```
bundle install --path vendor/bundle
bundle exec jekyll serve
```

In case the installation fails due to issues with installing eventmachine, set the openssl path explicitly:

```
bundle config build.eventmachine "--with-ssl-dir=$(brew --prefix openssl@1.1)"
```

## Updating dependencies

```
bundle update
```

## Optimizing images

```
find ./assets -iname "*.jpg" -exec jpegoptim -p --strip-com --strip-iptc -m 90 -o -t {} \;
```

# Contact

- **Email**: opensource@zalando.de
- **Issue tracker**: https://github.com/zalando/zalando.github.io/issues

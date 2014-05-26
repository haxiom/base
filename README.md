Generator Haxiom Base
---

Boilerplate for starting new Haxiom projects. Ideally, this is is leveraged by other use-case specific generators.


# Development

```bash
git clone git@github.com:haxiom/base.git
cd base
# **for development use only**
# Here be dragons!
# this will generate an NPM error, and npm-debug.log
# but the symlink will still be created
npm link -g

mkdir ~/my-awesome-project
cd ~/my-awesome-projects
yo haxiom-base
```

1. Project description and name inserted into README
2. Package.json contributor information
  - The issue here is finding a way to play nice with other generators that may be touching package.json

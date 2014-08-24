Generator Haxiom Base
---

Boilerplate for starting new Haxiom projects. Ideally, this is is leveraged by other use-case specific generators.


# Use

```bash
# you do not have yo installed
npm i -g yo

npm i -g haxiom/base

mkdir ~/my-awesome-project
cd ~/my-awesome-projects
yo haxiom-base
```

# Develop

```bash
# fork or clone this repo down
cd /path/to/my/clone

# this will make allow you to use
# the copy from your repo
# rather than the one previously
# installed via npm
# WARNING:
# this will cause an NPM error,
# but things should still work. yolo.
npm link -g
```

# Todo

- [ ] Project description and name inserted into README
- [ ] Package.json contributor information
    - The issue here is finding a way to play nice with other generators that may be touching package.json

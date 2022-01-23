# zincui

> Monochromatic Design System with React Components

An central repo to my monochromatic (specifically gray themed) react components.
I recreate these using CSS a lot and while that works with environments where React isn't involved.

It's easier to have modular packages for their reusability.

## Philosophy

I like a few points from the [suckless/philosophy](https://suckless.org/philosophy/) and while I can't write these in C lang , I would want to keep things as composable as possible. Thus, each component being it's own package. It does add friction while installing them but then removes the friction if you ever decide to refactor and use something else , in which case, you can easily remove just one component one at a time and not worry about everything breaking

## Installation

As mentioned, you install the component you need, so if you like the button component, you install the button component.

```sh
npm i @zincui/button
```

You can read about other components on the [website](https://zincui.reaper.im)

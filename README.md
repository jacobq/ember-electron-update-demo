# ember-electron-update-test

This application is intended to provide a minimalistic example of one way to provide seamless software updates to an electron application based on `ember-electron` by using free git hosting from [GitHub](github.com) (containing update content) and free application hosting from [Heroku](heroku.com) (running [`nuts`](https://github.com/GitbookIO/nuts) server to facilitate updates).

At the time of writing `ember-electron` was transitioning from version 1.x to 2.x, so [`npm link` was used per these instructions](https://github.com/felixrieseberg/ember-electron/issues/160#issuecomment-284005502) to use the most up-to-date version.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd ember-electron-update-test`
* `npm install`
* `ember electron` (to build & run / debug)
* `ember electron:make` (to generate installation package)

## Further Reading / Useful Links

* [electron autoUpdater](https://electron.atom.io/docs/api/auto-updater/)
* [ember-electron](https://github.com/felixrieseberg/ember-electron)
* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [nuts](https://github.com/GitbookIO/nuts)

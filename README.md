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

Note: to build as a Windows Store application you also need to install the [Windows 10 SDK](https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk)

Note: For building rpm (RedHat Linux) packages you may need to `sudo apt-get install rpm` on Debian/Ubuntu systems.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-electron-update-test`
* `npm install`
* `ember electron` (to build & run / debug)
* `ember electron:make` (to generate installation package)

## Further Reading / Useful Links

* [nuget](https://www.nuget.org/)
* [electron autoUpdater](https://electron.atom.io/docs/api/auto-updater/)
* [ember-electron](https://github.com/felixrieseberg/ember-electron)
* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* [nuts](https://github.com/GitbookIO/nuts)

## License

This software is provided free of charge under the terms of the MIT license. See [`LICENSE` file](./LICENSE) for details.

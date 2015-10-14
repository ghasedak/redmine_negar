# [Redmine](http://www.redmine.org) Negar Plug-In
This is a redmine editor plug-in which you can edit texts in rich and markdown format simultaneously that helps you having dynamic wiki while editing pages in html rich format. Plug-In is implemented on [Hallojs](http://hallojs.org) editor and uses [showdown](https://github.com/showdownjs/showdown.git) and [to-markdown](https://github.com/domchristie/to-markdown) to bring the live preview and editors correlation.

# Table of Contents
1. [Installation](#installation)
1. [Activation](#activation)

## Installation
Just copy this repo into redmine plugins directory and do migration and restart server:
Supposing you've installed redmine into ```/usr/share/redmine```:
```
cd /usr/share/redmine/plugins
```

Download plugin [using git](#using-git) or [using wget](#using-wget)
### Using Git
```
git clone https://github.com/ghasedak/redmine_negar
```

### Using Wget
Get latest snapshot of redmine_negar and extract it:
```
wget -O redmine_negar.zip https://github.com/ghasedak/redmine_negar/archive/master.zip
unzip redmine_negar.zip
mv redmine_negar-master redmine_negar
```

Do the migration:
```
RAILS_ENV=production bundle exec rake db:migrate --trace
```

## Activation
Go to http://your-redmine-address/settings#settings_text_formatting and change editor to Negar
# jekyll-web-novel

A [jekyll](https://jekyllrb.com/) website theme designed to host your work in progress novel.

## Features
- supper easy to read text formatting that looks great.
- styles that respect you dark/light mode preferences.
- hidden chapters called previews you can send to your proofreader.
- generate boilerplates for chapters and volumes with one command.
- Paragraph anchors for easy referencing.
- Easy build script to get started quickly
- UI that gets out of the way.
- Mobile and desktop friendly interface
- configurable copyright footer.

### Todo (unimplemented)
- Nice book cover display on the home page.
- use said cover image in social cards.
- pandoc scripts to generate ebook formats
- nice comment implementation
- optional config for online content management
- Demo site 
- optional copyright disclaimer popup
- optional social/donation links
- configurable nav to allow for more pages
- about the author page

## Installation

After creating a new jekyll project.
Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-web-novel"
gem "jekyll-page-boilerplate" # for the awesome boilerplate's
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-web-novel
```

And then execute:

    $ bundle

Initialize and copy over the necessary files.

    $ jekyll-web-novel

Delete the `index.markdown`, `404.html`, `about.markdown` files because they have conflicting paths.

Create your boilerplate pages with the `jekyll-page-boilerplate` gem.

    $ bplate volume vol=01 -T "Water"
    $ bplate chapter vol=01 cht=01 -T "My First Chapter"
    $ bplate preview vol=01 cht=02 -T "Secret Chapter for Proofreading"

## CMS Options

configuring a cms will require more setup on your end. 
I use [netlifycms](https://www.netlifycms.org/) myself.
The source code has an example configuration from a different project of mine under `admin/`.
Jekyll has a list of [cms options](https://jekyllrb.com/resources/#content-management) on their website. 


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello.


## License

[MIT License](https://opensource.org/licenses/MIT) for the time being but I have not really decided on a License yet.


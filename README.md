# jekyll-web-novel

A [jekyll](https://jekyllrb.com/) website theme designed to host your work in progress novel.

## Features
- supper easy to read text formatting that looks great.
- styles that respect your dark/light mode preferences.
- generate boilerplates for chapters with one command.
- Paragraph anchors for easy referencing.
- Easy build script to get started quickly
- UI that gets out of the way.
- Mobile and desktop friendly interface
- configurable copyright footer.
- easy setup for netlifyCMS

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
- payment features?

## Installation

After creating a new jekyll project.
Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "jekyll-web-novel"
gem "jekyll-page-boilerplate" # for the awesome boilerplate's
gem "webrick" # because `cannot load such file -- webrick (LoadError)`
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: jekyll-web-novel
```

And then execute:

    $ bundle

Initialize and copy over the necessary files.

    $ jekyll-web-novel

Delete the `index.markdown`, `404.html`, `about.markdown`, `_posts` files 
because they have conflicting paths or are just unneeded.

Create your boilerplate pages with the `jekyll-page-boilerplate` gem.

    $ bplate chapter vol=01 cht=01 -T "My First Chapter"

## CMS Options

I use [netlifycms](https://www.netlifycms.org/) for my jekyll cms needs.
The source code has an example configuration for this project under `admin/`.

Jekyll has a [list of cms options](https://jekyllrb.com/resources/#content-management) on their website. 
Using another cms will require more configurations on your part.

In the jekyll config enable `use_netlify_cms: true`.
This adds a script to the home layout that forwards netlify identity token to the cms.

On netlify web app your going to want to go into site settings and enable Identify for your site.
Set the `registration preferences` to invite only.
Then I like to add Github as and external login provider.
You will need to enable `Git Gateway` as well.

Find the identify tab at the top of their site, 
and invite yourself and a user.
I also invited my proofreader/editor.

Going to `you.site/admin` should ask you to login with netlify.
Once done you should find a side bar with collections `pages, chapters, drafts`.


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello.


## License

[MIT License](https://opensource.org/licenses/MIT) for the time being but I have not really decided on a License yet.

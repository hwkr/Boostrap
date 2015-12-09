# Using Template Helpers

These template helpers will allow you to template __JSON__ into fully formatted html which can be copied to the _ghost_ backend. To use the templates you will need to install the [Handlebars Command (handlebar-cmd) Line Package](https://www.npmjs.com/package/handlebars-cmd) using NPM.

```
npm install -g handlebars-cmd
```

You can then template the html using

```
handlebars data.json < template.hbs
```

and copy the output from the command line.

##### Tip

On OSX you can use the `pbcopy` command to copy the output to your clipboard

```
handlebars data.json < template.hbs | pbcopy
```

## Publications Template

The Publications template can be used to create a fully formatted publications page.

### Data Format

The __JSON__ data should follow this format,

* `publication`: A list publications following the format below
    * `title`: The full title of the publication
    * `description`: The description including authors and venue
    * `date`: The year of publication
    * `links`: A list of links following the format below (the first link will be styled bolder than the others)
        * `name`: The name of the link
        * `url`: The full URL of the link
        * `icon`: The full [class of the icon](https://fortawesome.github.io/Font-Awesome/icons/) to be added to an `<i>` tag

### Example

Suppose you have two publications in `publications.json` as follows

```json
{
  "publications" : [
    {
      "title" : "Selecting Research Methods for Studying a Participatory Culture in Software Development: Keynote",
      "description" : "Margaret-Anne Storey, Alexey Zagalsky, Leif Singer, Keynote Extended Abstract at the 19th International Conference on Evaluation and Assessment (<a href=\"http://emse.nju.edu.cn/ease2015/program/keynote-speakers/\">EASE</a>), 2015, ACM.",
      "date" : "2015",
      "links" : [
        {
          "name" : "PDF",
          "url" : "http://keg.cs.uvic.ca/pubs/storey-EASE2015.pdf",
          "icon" : "fa fa-file-pdf-o"
        },
        {
          "name" : "DOI",
          "url" : "http://dx.doi.org/10.1145/2745802.2747957",
          "icon" : "fa fa-book"
        }
      ]
    },
    {
      "title" : "The Emergence of GitHub as a Collaborative Platform for Education",
      "description" : "Alexey Zagalsky, Joseph Feliciano, Margaret-Anne Storey, Yiyun Zhao, Weiliang Wang, <a href=\"http://cscw.acm.org/2015/\">18th ACM conference on Computer-Supported Cooperative Work and Social Computing</a>, 2015, ACM.",
      "date" : "2015",
      "links" : [
        {
          "name" : "PDF",
          "url" : "http://keg.cs.uvic.ca/pubs/zagalsky-CSCW2015.pdf",
          "icon" : "fa fa-file-pdf-o"
        },
        {
          "name" : "DOI",
          "url" : "http://dx.doi.org/10.1145/2675133.2675284",
          "icon" : "fa fa-book"
        },
        {
          "name" : "Slides",
          "url" : "https://speakerdeck.com/alexeyza/the-emergence-of-github-as-a-collaborative-platform-for-education",
          "icon" : "fa fa-file-powerpoint-o"
        },
        {
          "name" : "Blog",
          "url" : "http://alexeyza.com/blog/2015/09/10/embracing-participatory-culture-in-education/",
          "icon" : "fa fa-rss-square"
        }
      ]
    }
  ]
}
```

After formatting your data use the template to create your HTML

```
handlebars publications.json < publications.hbs
```

This should give you formatted HTML as follows

```html
<div id="publications">
    <input class="search form-control" type="text" placeholder="Filter" />
    <button class="sort" data-sort="pub-title">
        Sort by title
    </button>
    <ul class="list list-unstyled">
        <li>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title pub-title">
                        Selecting Research Methods for Studying a Participatory Culture in Software Development: Keynote
                    </h3>
                </div>
                <div class="panel-body pub-desc">
                        Margaret-Anne Storey, Alexey Zagalsky, Leif Singer, Keynote Extended Abstract at the 19th International Conference on Evaluation and Assessment (<a href="http://emse.nju.edu.cn/ease2015/program/keynote-speakers/">EASE</a>), 2015, ACM.
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-sm-push-8 text-right">
                            <span class="text-muted pub-date">2015</span>
                        </div>
                        <div class="col-sm-8  col-sm-pull-4">
                            <ul class="list-inline">
                                <li><a href="http://keg.cs.uvic.ca/pubs/storey-EASE2015.pdf" class="btn btn-primary btn-sm"><i class="fa fa-file-pdf-o"></i> PDF</a></li>
                                <li><a href="http://dx.doi.org/10.1145/2745802.2747957" class="btn btn-default btn-sm"><i class="fa fa-book"></i> DOI</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li>
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title pub-title">
                        The Emergence of GitHub as a Collaborative Platform for Education
                    </h3>
                </div>
                <div class="panel-body pub-desc">
                        Alexey Zagalsky, Joseph Feliciano, Margaret-Anne Storey, Yiyun Zhao, Weiliang Wang, <a href="http://cscw.acm.org/2015/">18th ACM conference on Computer-Supported Cooperative Work and Social Computing</a>, 2015, ACM.
                </div>
                <div class="panel-footer">
                    <div class="row">
                        <div class="col-sm-4 col-sm-push-8 text-right">
                            <span class="text-muted pub-date">2015</span>
                        </div>
                        <div class="col-sm-8  col-sm-pull-4">
                            <ul class="list-inline">
                                <li><a href="http://keg.cs.uvic.ca/pubs/zagalsky-CSCW2015.pdf" class="btn btn-primary btn-sm"><i class="fa fa-file-pdf-o"></i> PDF</a></li>
                                <li><a href="http://dx.doi.org/10.1145/2675133.2675284" class="btn btn-default btn-sm"><i class="fa fa-book"></i> DOI</a></li>
                                <li><a href="https://speakerdeck.com/alexeyza/the-emergence-of-github-as-a-collaborative-platform-for-education" class="btn btn-default btn-sm"><i class="fa fa-file-powerpoint-o"></i> Slides</a></li>
                                <li><a href="http://alexeyza.com/blog/2015/09/10/embracing-participatory-culture-in-education/" class="btn btn-default btn-sm"><i class="fa fa-rss-square"></i> Blog</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>

<script>
    var options = {
        valueNames: ['pub-title', 'pub-desc', 'pub-date']
    };
    var pubsList = new List('publications', options);
</script>
```

The HTML should be copied __in full__ to ghost as the entire content of the page.

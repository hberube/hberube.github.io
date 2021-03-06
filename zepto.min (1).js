


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>mobile-ui-patterns/page-swipe/zepto.min.js at master · ccoenraets/mobile-ui-patterns · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <link rel="logo" type="image/svg" href="https://github-media-downloads.s3.amazonaws.com/github-logo.svg" />
    <meta property="og:image" content="https://github.global.ssl.fastly.net/images/modules/logos_page/Octocat.png">
    <meta name="hostname" content="github-fe110-cp1-prd.iad.github.net">
    <meta name="ruby" content="ruby 1.9.3p194-tcs-github-tcmalloc (2012-05-25, TCS patched 2012-05-27, GitHub v1.0.36) [x86_64-linux]">
    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />
    


    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="421F1D01:32FB:424ADC2:5243A3F5" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="SyyxRdjwUlcN/6Vsi8vNTAEC6AOfsYQ3YrZ/YrsVzBM=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-40dc3dc635ba7070b4d85ccb1850bb83eab67dbe.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-546255f1b8702b827f9dba35e9fd3259aac96aef.css" media="all" rel="stylesheet" type="text/css" />
    

    

      <script src="https://github.global.ssl.fastly.net/assets/frameworks-4e5aeedcc7a86dcff8294cb84644a333b46202a2.js" type="text/javascript"></script>
      <script src="https://github.global.ssl.fastly.net/assets/github-611d1f69d539f2a5cdb6c1ed7d4c93d2d0d6769b.js" type="text/javascript"></script>
      
      <meta http-equiv="x-pjax-version" content="52b9fc44650e511f867b92a6eb6e5ca2">

        <link data-pjax-transient rel='permalink' href='/ccoenraets/mobile-ui-patterns/blob/d25a8efd013927983bc20acce735f3cc26a74925/page-swipe/zepto.min.js'>
  <meta property="og:title" content="mobile-ui-patterns"/>
  <meta property="og:type" content="githubog:gitrepository"/>
  <meta property="og:url" content="https://github.com/ccoenraets/mobile-ui-patterns"/>
  <meta property="og:image" content="https://github.global.ssl.fastly.net/images/gravatars/gravatar-user-420.png"/>
  <meta property="og:site_name" content="GitHub"/>
  <meta property="og:description" content="Contribute to mobile-ui-patterns development by creating an account on GitHub."/>

  <meta name="description" content="Contribute to mobile-ui-patterns development by creating an account on GitHub." />

  <meta content="384156" name="octolytics-dimension-user_id" /><meta content="ccoenraets" name="octolytics-dimension-user_login" /><meta content="5086968" name="octolytics-dimension-repository_id" /><meta content="ccoenraets/mobile-ui-patterns" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5086968" name="octolytics-dimension-repository_network_root_id" /><meta content="ccoenraets/mobile-ui-patterns" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ccoenraets/mobile-ui-patterns/commits/master.atom" rel="alternate" title="Recent Commits to mobile-ui-patterns:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public  page-blob">
    <div class="wrapper">
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/signup">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fccoenraets%2Fmobile-ui-patterns%2Fblob%2Fmaster%2Fpage-swipe%2Fzepto.min.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="ccoenraets/mobile-ui-patterns"
      data-branch="master"
      data-sha="ec3f249fbf095cd9398de7b3cf4a1148f9a400d5"
  >

    <input type="hidden" name="nwo" value="ccoenraets/mobile-ui-patterns" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="octicon help tooltipped downwards" title="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>


      


          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
  <a href="/login?return_to=%2Fccoenraets%2Fmobile-ui-patterns"
  class="minibutton with-count js-toggler-target star-button entice tooltipped upwards"
  title="You must be signed in to use this feature" rel="nofollow">
  <span class="octicon octicon-star"></span>Star
</a>
<a class="social-count js-social-count" href="/ccoenraets/mobile-ui-patterns/stargazers">
  136
</a>

  </li>

    <li>
      <a href="/login?return_to=%2Fccoenraets%2Fmobile-ui-patterns"
        class="minibutton with-count js-toggler-target fork-button entice tooltipped upwards"
        title="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/ccoenraets/mobile-ui-patterns/network" class="social-count">
        58
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/ccoenraets" class="url fn" itemprop="url" rel="author"><span itemprop="title">ccoenraets</span></a></span
          ><span class="repohead-name-divider">/</span><strong
          ><a href="/ccoenraets/mobile-ui-patterns" class="js-current-repository js-repo-home-link">mobile-ui-patterns</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">

      <div class="repository-with-sidebar repo-container ">

        <div class="repository-sidebar">
            

<div class="repo-nav repo-nav-full js-repository-container-pjax js-octicon-loaders">
  <div class="repo-nav-contents">
    <ul class="repo-menu">
      <li class="tooltipped leftwards" title="Code">
        <a href="/ccoenraets/mobile-ui-patterns" aria-label="Code" class="js-selected-navigation-item selected" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /ccoenraets/mobile-ui-patterns">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped leftwards" title="Issues">
          <a href="/ccoenraets/mobile-ui-patterns/issues" aria-label="Issues" class="js-selected-navigation-item js-disable-pjax" data-gotokey="i" data-selected-links="repo_issues /ccoenraets/mobile-ui-patterns/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class='counter'>3</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped leftwards" title="Pull Requests"><a href="/ccoenraets/mobile-ui-patterns/pulls" aria-label="Pull Requests" class="js-selected-navigation-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /ccoenraets/mobile-ui-patterns/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="repo-menu-separator"></div>
    <ul class="repo-menu">

      <li class="tooltipped leftwards" title="Pulse">
        <a href="/ccoenraets/mobile-ui-patterns/pulse" aria-label="Pulse" class="js-selected-navigation-item " data-pjax="true" data-selected-links="pulse /ccoenraets/mobile-ui-patterns/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Graphs">
        <a href="/ccoenraets/mobile-ui-patterns/graphs" aria-label="Graphs" class="js-selected-navigation-item " data-pjax="true" data-selected-links="repo_graphs repo_contributors /ccoenraets/mobile-ui-patterns/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped leftwards" title="Network">
        <a href="/ccoenraets/mobile-ui-patterns/network" aria-label="Network" class="js-selected-navigation-item js-disable-pjax" data-selected-links="repo_network /ccoenraets/mobile-ui-patterns/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

            <div class="only-with-full-nav">
              

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/ccoenraets/mobile-ui-patterns.git" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/ccoenraets/mobile-ui-patterns.git" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/ccoenraets/mobile-ui-patterns" readonly="readonly">

    <span class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/ccoenraets/mobile-ui-patterns" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="octicon help tooltipped upwards" title="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/ccoenraets/mobile-ui-patterns/archive/master.zip"
                   class="minibutton sidebar-button"
                   title="Download this repository as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
            </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:b4c27e0c33ef909c07b408518eca6b7e -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:b4c27e0c33ef909c07b408518eca6b7e -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/ccoenraets/mobile-ui-patterns/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  


<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ccoenraets/mobile-ui-patterns/blob/master/page-swipe/zepto.min.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ccoenraets/mobile-ui-patterns" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">mobile-ui-patterns</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ccoenraets/mobile-ui-patterns/tree/master/page-swipe" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">page-swipe</span></a></span><span class="separator"> / </span><strong class="final-path">zepto.min.js</strong> <span class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="page-swipe/zepto.min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/ccoenraets/mobile-ui-patterns/contributors/master/page-swipe/zepto.min.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div id="files" class="bubble">
  <div class="file">
    <div class="meta">
      <div class="info">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
          <span>2 lines (2 sloc)</span>
        <span>24.014 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
              <a class="minibutton disabled js-entice" href=""
                 data-entice="You must be signed in to make or propose changes">Edit</a>
          <a href="/ccoenraets/mobile-ui-patterns/raw/master/page-swipe/zepto.min.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/ccoenraets/mobile-ui-patterns/blame/master/page-swipe/zepto.min.js" class="button minibutton ">Blame</a>
          <a href="/ccoenraets/mobile-ui-patterns/commits/master/page-swipe/zepto.min.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
            <a class="minibutton danger empty-icon js-entice" href=""
               data-entice="You must be signed in and on a branch to make or propose changes">
            Delete
          </a>
      </div><!-- /.actions -->

    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>

            </td>
            <td class="blob-line-code">
                  <div class='line' id='LC1'>/* Zepto v1.0rc1 - polyfill zepto event detect fx ajax form touch - zeptojs.com/license */</div><div class='line' id='LC2'>(function(a){String.prototype.trim===a&amp;&amp;(String.prototype.trim=function(){return this.replace(/^\s+/,&quot;&quot;).replace(/\s+$/,&quot;&quot;)}),Array.prototype.reduce===a&amp;&amp;(Array.prototype.reduce=function(b){if(this===void 0||this===null)throw new TypeError;var c=Object(this),d=c.length&gt;&gt;&gt;0,e=0,f;if(typeof b!=&quot;function&quot;)throw new TypeError;if(d==0&amp;&amp;arguments.length==1)throw new TypeError;if(arguments.length&gt;=2)f=arguments[1];else do{if(e in c){f=c[e++];break}if(++e&gt;=d)throw new TypeError}while(!0);while(e&lt;d)e in c&amp;&amp;(f=b.call(a,f,c[e],e,c)),e++;return f})})();var Zepto=function(){function A(a){return v.call(a)==&quot;[object Function]&quot;}function B(a){return a instanceof Object}function C(b){var c,d;if(v.call(b)!==&quot;[object Object]&quot;)return!1;d=A(b.constructor)&amp;&amp;b.constructor.prototype;if(!d||!hasOwnProperty.call(d,&quot;isPrototypeOf&quot;))return!1;for(c in b);return c===a||hasOwnProperty.call(b,c)}function D(a){return a instanceof Array}function E(a){return typeof a.length==&quot;number&quot;}function F(b){return b.filter(function(b){return b!==a&amp;&amp;b!==null})}function G(a){return a.length&gt;0?[].concat.apply([],a):a}function H(a){return a.replace(/::/g,&quot;/&quot;).replace(/([A-Z]+)([A-Z][a-z])/g,&quot;$1_$2&quot;).replace(/([a-z\d])([A-Z])/g,&quot;$1_$2&quot;).replace(/_/g,&quot;-&quot;).toLowerCase()}function I(a){return a in i?i[a]:i[a]=new RegExp(&quot;(^|\\s)&quot;+a+&quot;(\\s|$)&quot;)}function J(a,b){return typeof b==&quot;number&quot;&amp;&amp;!k[H(a)]?b+&quot;px&quot;:b}function K(a){var b,c;return h[a]||(b=g.createElement(a),g.body.appendChild(b),c=j(b,&quot;&quot;).getPropertyValue(&quot;display&quot;),b.parentNode.removeChild(b),c==&quot;none&quot;&amp;&amp;(c=&quot;block&quot;),h[a]=c),h[a]}function L(b,d){return d===a?c(b):c(b).filter(d)}function M(a,b,c,d){return A(b)?b.call(a,c,d):b}function N(a,b,d){var e=a%2?b:b.parentNode;e?e.insertBefore(d,a?a==1?e.firstChild:a==2?b:null:b.nextSibling):c(d).remove()}function O(a,b){b(a);for(var c in a.childNodes)O(a.childNodes[c],b)}var a,b,c,d,e=[],f=e.slice,g=window.document,h={},i={},j=g.defaultView.getComputedStyle,k={&quot;column-count&quot;:1,columns:1,&quot;font-weight&quot;:1,&quot;line-height&quot;:1,opacity:1,&quot;z-index&quot;:1,zoom:1},l=/^\s*&lt;(\w+|!)[^&gt;]*&gt;/,m=[1,3,8,9,11],n=[&quot;after&quot;,&quot;prepend&quot;,&quot;before&quot;,&quot;append&quot;],o=g.createElement(&quot;table&quot;),p=g.createElement(&quot;tr&quot;),q={tr:g.createElement(&quot;tbody&quot;),tbody:o,thead:o,tfoot:o,td:p,th:p,&quot;*&quot;:g.createElement(&quot;div&quot;)},r=/complete|loaded|interactive/,s=/^\.([\w-]+)$/,t=/^#([\w-]+)$/,u=/^[\w-]+$/,v={}.toString,w={},x,y,z=g.createElement(&quot;div&quot;);return w.matches=function(a,b){if(!a||a.nodeType!==1)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&amp;&amp;(e=z).appendChild(a),d=~w.qsa(e,b).indexOf(a),f&amp;&amp;z.removeChild(a),d},x=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():&quot;&quot;})},y=function(a){return a.filter(function(b,c){return a.indexOf(b)==c})},w.fragment=function(b,d){d===a&amp;&amp;(d=l.test(b)&amp;&amp;RegExp.$1),d in q||(d=&quot;*&quot;);var e=q[d];return e.innerHTML=&quot;&quot;+b,c.each(f.call(e.childNodes),function(){e.removeChild(this)})},w.Z=function(a,b){return a=a||[],a.__proto__=arguments.callee.prototype,a.selector=b||&quot;&quot;,a},w.isZ=function(a){return a instanceof w.Z},w.init=function(b,d){if(!b)return w.Z();if(A(b))return c(g).ready(b);if(w.isZ(b))return b;var e;if(D(b))e=F(b);else if(C(b))e=[c.extend({},b)],b=null;else if(m.indexOf(b.nodeType)&gt;=0||b===window)e=[b],b=null;else if(l.test(b))e=w.fragment(b.trim(),RegExp.$1),b=null;else{if(d!==a)return c(d).find(b);e=w.qsa(g,b)}return w.Z(e,b)},c=function(a,b){return w.init(a,b)},c.extend=function(c){return f.call(arguments,1).forEach(function(d){for(b in d)d[b]!==a&amp;&amp;(c[b]=d[b])}),c},w.qsa=function(a,b){var c;return a===g&amp;&amp;t.test(b)?(c=a.getElementById(RegExp.$1))?[c]:e:a.nodeType!==1&amp;&amp;a.nodeType!==9?e:f.call(s.test(b)?a.getElementsByClassName(RegExp.$1):u.test(b)?a.getElementsByTagName(b):a.querySelectorAll(b))},c.isFunction=A,c.isObject=B,c.isArray=D,c.isPlainObject=C,c.inArray=function(a,b,c){return e.indexOf.call(b,a,c)},c.trim=function(a){return a.trim()},c.uuid=0,c.map=function(a,b){var c,d=[],e,f;if(E(a))for(e=0;e&lt;a.length;e++)c=b(a[e],e),c!=null&amp;&amp;d.push(c);else for(f in a)c=b(a[f],f),c!=null&amp;&amp;d.push(c);return G(d)},c.each=function(a,b){var c,d;if(E(a)){for(c=0;c&lt;a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},c.fn={forEach:e.forEach,reduce:e.reduce,push:e.push,indexOf:e.indexOf,concat:e.concat,map:function(a){return c.map(this,function(b,c){return a.call(b,c,b)})},slice:function(){return c(f.apply(this,arguments))},ready:function(a){return r.test(g.readyState)?a(c):g.addEventListener(&quot;DOMContentLoaded&quot;,function(){a(c)},!1),this},get:function(b){return b===a?f.call(this):this[b]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&amp;&amp;this.parentNode.removeChild(this)})},each:function(a){return this.forEach(function(b,c){a.call(b,c,b)}),this},filter:function(a){return c([].filter.call(this,function(b){return w.matches(b,a)}))},add:function(a,b){return c(y(this.concat(c(a,b))))},is:function(a){return this.length&gt;0&amp;&amp;w.matches(this[0],a)},not:function(b){var d=[];if(A(b)&amp;&amp;b.call!==a)this.each(function(a){b.call(this,a)||d.push(this)});else{var e=typeof b==&quot;string&quot;?this.filter(b):E(b)&amp;&amp;A(b.item)?f.call(b):c(b);this.forEach(function(a){e.indexOf(a)&lt;0&amp;&amp;d.push(a)})}return c(d)},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&amp;&amp;!B(a)?a:c(a)},last:function(){var a=this[this.length-1];return a&amp;&amp;!B(a)?a:c(a)},find:function(a){var b;return this.length==1?b=w.qsa(this[0],a):b=this.map(function(){return w.qsa(this,a)}),c(b)},closest:function(a,b){var d=this[0];while(d&amp;&amp;!w.matches(d,a))d=d!==b&amp;&amp;d!==g&amp;&amp;d.parentNode;return c(d)},parents:function(a){var b=[],d=this;while(d.length&gt;0)d=c.map(d,function(a){if((a=a.parentNode)&amp;&amp;a!==g&amp;&amp;b.indexOf(a)&lt;0)return b.push(a),a});return L(b,a)},parent:function(a){return L(y(this.pluck(&quot;parentNode&quot;)),a)},children:function(a){return L(this.map(function(){return f.call(this.children)}),a)},siblings:function(a){return L(this.map(function(a,b){return f.call(b.parentNode.children).filter(function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=&quot;&quot;})},pluck:function(a){return this.map(function(){return this[a]})},show:function(){return this.each(function(){this.style.display==&quot;none&quot;&amp;&amp;(this.style.display=null),j(this,&quot;&quot;).getPropertyValue(&quot;display&quot;)==&quot;none&quot;&amp;&amp;(this.style.display=K(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){return this.each(function(){c(this).wrapAll(c(a)[0].cloneNode(!1))})},wrapAll:function(a){return this[0]&amp;&amp;(c(this[0]).before(a=c(a)),a.append(this)),this},unwrap:function(){return this.parent().each(function(){c(this).replaceWith(c(this).children())}),this},clone:function(){return c(this.map(function(){return this.cloneNode(!0)}))},hide:function(){return this.css(&quot;display&quot;,&quot;none&quot;)},toggle:function(b){return(b===a?this.css(&quot;display&quot;)==&quot;none&quot;:b)?this.show():this.hide()},prev:function(){return c(this.pluck(&quot;previousElementSibling&quot;))},next:function(){return c(this.pluck(&quot;nextElementSibling&quot;))},html:function(b){return b===a?this.length&gt;0?this[0].innerHTML:null:this.each(function(a){var d=this.innerHTML;c(this).empty().append(M(this,b,a,d))})},text:function(b){return b===a?this.length&gt;0?this[0].textContent:null:this.each(function(){this.textContent=b})},attr:function(c,d){var e;return typeof c==&quot;string&quot;&amp;&amp;d===a?this.length==0||this[0].nodeType!==1?a:c==&quot;value&quot;&amp;&amp;this[0].nodeName==&quot;INPUT&quot;?this.val():!(e=this[0].getAttribute(c))&amp;&amp;c in this[0]?this[0][c]:e:this.each(function(a){if(this.nodeType!==1)return;if(B(c))for(b in c)this.setAttribute(b,c[b]);else this.setAttribute(c,M(this,d,a,this.getAttribute(c)))})},removeAttr:function(a){return this.each(function(){this.nodeType===1&amp;&amp;this.removeAttribute(a)})},prop:function(b,c){return c===a?this[0]?this[0][b]:a:this.each(function(a){this[b]=M(this,c,a,this[b])})},data:function(b,c){var d=this.attr(&quot;data-&quot;+H(b),c);return d!==null?d:a},val:function(b){return b===a?this.length&gt;0?this[0].value:a:this.each(function(a){this.value=M(this,b,a,this.value)})},offset:function(){if(this.length==0)return null;var a=this[0].getBoundingClientRect();return{left:a.left+window.pageXOffset,top:a.top+window.pageYOffset,width:a.width,height:a.height}},css:function(c,d){if(d===a&amp;&amp;typeof c==&quot;string&quot;)return this.length==0?a:this[0].style[x(c)]||j(this[0],&quot;&quot;).getPropertyValue(c);var e=&quot;&quot;;for(b in c)typeof c[b]==&quot;string&quot;&amp;&amp;c[b]==&quot;&quot;?this.each(function(){this.style.removeProperty(H(b))}):e+=H(b)+&quot;:&quot;+J(b,c[b])+&quot;;&quot;;return typeof c==&quot;string&quot;&amp;&amp;(d==&quot;&quot;?this.each(function(){this.style.removeProperty(H(c))}):e=H(c)+&quot;:&quot;+J(c,d)),this.each(function(){this.style.cssText+=&quot;;&quot;+e})},index:function(a){return a?this.indexOf(c(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return this.length&lt;1?!1:I(a).test(this[0].className)},addClass:function(a){return this.each(function(b){d=[];var e=this.className,f=M(this,a,b,e);f.split(/\s+/g).forEach(function(a){c(this).hasClass(a)||d.push(a)},this),d.length&amp;&amp;(this.className+=(e?&quot; &quot;:&quot;&quot;)+d.join(&quot; &quot;))})},removeClass:function(b){return this.each(function(c){if(b===a)return this.className=&quot;&quot;;d=this.className,M(this,b,c,d).split(/\s+/g).forEach(function(a){d=d.replace(I(a),&quot; &quot;)}),this.className=d.trim()})},toggleClass:function(b,d){return this.each(function(e){var f=M(this,b,e,this.className);(d===a?!c(this).hasClass(f):d)?c(this).addClass(f):c(this).removeClass(f)})}},[&quot;width&quot;,&quot;height&quot;].forEach(function(b){c.fn[b]=function(d){var e,f=b.replace(/./,function(a){return a[0].toUpperCase()});return d===a?this[0]==window?window[&quot;inner&quot;+f]:this[0]==g?g.documentElement[&quot;offset&quot;+f]:(e=this.offset())&amp;&amp;e[b]:this.each(function(a){var e=c(this);e.css(b,M(this,d,a,e[b]()))})}}),n.forEach(function(a,b){c.fn[a]=function(){var a=c.map(arguments,function(a){return B(a)?a:w.fragment(a)});if(a.length&lt;1)return this;var d=this.length,e=d&gt;1,f=b&lt;2;return this.each(function(c,g){for(var h=0;h&lt;a.length;h++){var i=a[f?a.length-h-1:h];O(i,function(a){a.nodeName!=null&amp;&amp;a.nodeName.toUpperCase()===&quot;SCRIPT&quot;&amp;&amp;(!a.type||a.type===&quot;text/javascript&quot;)&amp;&amp;window.eval.call(window,a.innerHTML)}),e&amp;&amp;c&lt;d-1&amp;&amp;(i=i.cloneNode(!0)),N(b,g,i)}})},c.fn[b%2?a+&quot;To&quot;:&quot;insert&quot;+(b?&quot;Before&quot;:&quot;After&quot;)]=function(b){return c(b)[a](this),this}}),w.Z.prototype=c.fn,w.camelize=x,w.uniq=y,c.zepto=w,c}();window.Zepto=Zepto,&quot;$&quot;in window||(window.$=Zepto),function(a){function f(a){return a._zid||(a._zid=d++)}function g(a,b,d,e){b=h(b);if(b.ns)var g=i(b.ns);return(c[f(a)]||[]).filter(function(a){return a&amp;&amp;(!b.e||a.e==b.e)&amp;&amp;(!b.ns||g.test(a.ns))&amp;&amp;(!d||f(a.fn)===f(d))&amp;&amp;(!e||a.sel==e)})}function h(a){var b=(&quot;&quot;+a).split(&quot;.&quot;);return{e:b[0],ns:b.slice(1).sort().join(&quot; &quot;)}}function i(a){return new RegExp(&quot;(?:^| )&quot;+a.replace(&quot; &quot;,&quot; .* ?&quot;)+&quot;(?: |$)&quot;)}function j(b,c,d){a.isObject(b)?a.each(b,d):b.split(/\s/).forEach(function(a){d(a,c)})}function k(b,d,e,g,i,k){k=!!k;var l=f(b),m=c[l]||(c[l]=[]);j(d,e,function(c,d){var e=i&amp;&amp;i(d,c),f=e||d,j=function(a){var c=f.apply(b,[a].concat(a.data));return c===!1&amp;&amp;a.preventDefault(),c},l=a.extend(h(c),{fn:d,proxy:j,sel:g,del:e,i:m.length});m.push(l),b.addEventListener(l.e,j,k)})}function l(a,b,d,e){var h=f(a);j(b||&quot;&quot;,d,function(b,d){g(a,b,d,e).forEach(function(b){delete c[h][b.i],a.removeEventListener(b.e,b.proxy,!1)})})}function p(b){var c=a.extend({originalEvent:b},b);return a.each(o,function(a,d){c[a]=function(){return this[d]=m,b[a].apply(b,arguments)},c[d]=n}),c}function q(a){if(!(&quot;defaultPrevented&quot;in a)){a.defaultPrevented=!1;var b=a.preventDefault;a.preventDefault=function(){this.defaultPrevented=!0,b.call(this)}}}var b=a.zepto.qsa,c={},d=1,e={};e.click=e.mousedown=e.mouseup=e.mousemove=&quot;MouseEvents&quot;,a.event={add:k,remove:l},a.proxy=function(b,c){if(a.isFunction(b)){var d=function(){return b.apply(c,arguments)};return d._zid=f(b),d}if(typeof c==&quot;string&quot;)return a.proxy(b[c],b);throw new TypeError(&quot;expected function&quot;)},a.fn.bind=function(a,b){return this.each(function(){k(this,a,b)})},a.fn.unbind=function(a,b){return this.each(function(){l(this,a,b)})},a.fn.one=function(a,b){return this.each(function(c,d){k(this,a,b,null,function(a,b){return function(){var c=a.apply(d,arguments);return l(d,b,a),c}})})};var m=function(){return!0},n=function(){return!1},o={preventDefault:&quot;isDefaultPrevented&quot;,stopImmediatePropagation:&quot;isImmediatePropagationStopped&quot;,stopPropagation:&quot;isPropagationStopped&quot;};a.fn.delegate=function(b,c,d){var e=!1;if(c==&quot;blur&quot;||c==&quot;focus&quot;)a.iswebkit?c=c==&quot;blur&quot;?&quot;focusout&quot;:c==&quot;focus&quot;?&quot;focusin&quot;:c:e=!0;return this.each(function(f,g){k(g,c,d,b,function(c){return function(d){var e,f=a(d.target).closest(b,g).get(0);if(f)return e=a.extend(p(d),{currentTarget:f,liveFired:g}),c.apply(f,[e].concat([].slice.call(arguments,1)))}},e)})},a.fn.undelegate=function(a,b,c){return this.each(function(){l(this,b,c,a)})},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d){return c==undefined||a.isFunction(c)?this.bind(b,c):this.delegate(c,b,d)},a.fn.off=function(b,c,d){return c==undefined||a.isFunction(c)?this.unbind(b,c):this.undelegate(c,b,d)},a.fn.trigger=function(b,c){return typeof b==&quot;string&quot;&amp;&amp;(b=a.Event(b)),q(b),b.data=c,this.each(function(){&quot;dispatchEvent&quot;in this&amp;&amp;this.dispatchEvent(b)})},a.fn.triggerHandler=function(b,c){var d,e;return this.each(function(f,h){d=p(typeof b==&quot;string&quot;?a.Event(b):b),d.data=c,d.target=h,a.each(g(h,b.type||b),function(a,b){e=b.proxy(d);if(d.isImmediatePropagationStopped())return!1})}),e},&quot;focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout change select keydown keypress keyup error&quot;.split(&quot; &quot;).forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}}),[&quot;focus&quot;,&quot;blur&quot;].forEach(function(b){a.fn[b]=function(a){if(a)this.bind(b,a);else if(this.length)try{this.get(0)[b]()}catch(c){}return this}}),a.Event=function(a,b){var c=document.createEvent(e[a]||&quot;Events&quot;),d=!0;if(b)for(var f in b)f==&quot;bubbles&quot;?d=!!b[f]:c[f]=b[f];return c.initEvent(a,d,!0,null,null,null,null,null,null,null,null,null,null,null,null),c}}(Zepto),function(a){function b(a){var b=this.os={},c=this.browser={},d=a.match(/WebKit\/([\d.]+)/),e=a.match(/(Android)\s+([\d.]+)/),f=a.match(/(iPad).*OS\s([\d_]+)/),g=!f&amp;&amp;a.match(/(iPhone\sOS)\s([\d_]+)/),h=a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),i=h&amp;&amp;a.match(/TouchPad/),j=a.match(/Kindle\/([\d.]+)/),k=a.match(/Silk\/([\d._]+)/),l=a.match(/(BlackBerry).*Version\/([\d.]+)/);if(c.webkit=!!d)c.version=d[1];e&amp;&amp;(b.android=!0,b.version=e[2]),g&amp;&amp;(b.ios=b.iphone=!0,b.version=g[2].replace(/_/g,&quot;.&quot;)),f&amp;&amp;(b.ios=b.ipad=!0,b.version=f[2].replace(/_/g,&quot;.&quot;)),h&amp;&amp;(b.webos=!0,b.version=h[2]),i&amp;&amp;(b.touchpad=!0),l&amp;&amp;(b.blackberry=!0,b.version=l[2]),j&amp;&amp;(b.kindle=!0,b.version=j[1]),k&amp;&amp;(c.silk=!0,c.version=k[1]),!k&amp;&amp;b.android&amp;&amp;a.match(/Kindle Fire/)&amp;&amp;(c.silk=!0)}b.call(a,navigator.userAgent),a.__detect=b}(Zepto),function(a,b){function l(a){return a.toLowerCase()}function m(a){return d?d+a:l(a)}var c=&quot;&quot;,d,e,f,g={Webkit:&quot;webkit&quot;,Moz:&quot;&quot;,O:&quot;o&quot;,ms:&quot;MS&quot;},h=window.document,i=h.createElement(&quot;div&quot;),j=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,k={};a.each(g,function(a,e){if(i.style[a+&quot;TransitionProperty&quot;]!==b)return c=&quot;-&quot;+l(a)+&quot;-&quot;,d=e,!1}),k[c+&quot;transition-property&quot;]=k[c+&quot;transition-duration&quot;]=k[c+&quot;transition-timing-function&quot;]=k[c+&quot;animation-name&quot;]=k[c+&quot;animation-duration&quot;]=&quot;&quot;,a.fx={off:d===b&amp;&amp;i.style.transitionProperty===b,cssPrefix:c,transitionEnd:m(&quot;TransitionEnd&quot;),animationEnd:m(&quot;AnimationEnd&quot;)},a.fn.animate=function(b,c,d,e){return a.isObject(c)&amp;&amp;(d=c.easing,e=c.complete,c=c.duration),c&amp;&amp;(c/=1e3),this.anim(b,c,d,e)},a.fn.anim=function(d,e,f,g){var h,i={},l,m=this,n,o=a.fx.transitionEnd;e===b&amp;&amp;(e=.4),a.fx.off&amp;&amp;(e=0);if(typeof d==&quot;string&quot;)i[c+&quot;animation-name&quot;]=d,i[c+&quot;animation-duration&quot;]=e+&quot;s&quot;,o=a.fx.animationEnd;else{for(l in d)j.test(l)?(h||(h=[]),h.push(l+&quot;(&quot;+d[l]+&quot;)&quot;)):i[l]=d[l];h&amp;&amp;(i[c+&quot;transform&quot;]=h.join(&quot; &quot;)),!a.fx.off&amp;&amp;typeof d==&quot;object&quot;&amp;&amp;(i[c+&quot;transition-property&quot;]=Object.keys(d).join(&quot;, &quot;),i[c+&quot;transition-duration&quot;]=e+&quot;s&quot;,i[c+&quot;transition-timing-function&quot;]=f||&quot;linear&quot;)}return n=function(b){if(typeof b!=&quot;undefined&quot;){if(b.target!==b.currentTarget)return;a(b.target).unbind(o,arguments.callee)}a(this).css(k),g&amp;&amp;g.call(this)},e&gt;0&amp;&amp;this.bind(o,n),setTimeout(function(){m.css(i),e&lt;=0&amp;&amp;setTimeout(function(){m.each(function(){n.call(this)})},0)},0),this},i=null}(Zepto),function($){function triggerAndReturn(a,b,c){var d=$.Event(b);return $(a).trigger(d,c),!d.defaultPrevented}function triggerGlobal(a,b,c,d){if(a.global)return triggerAndReturn(b||document,c,d)}function ajaxStart(a){a.global&amp;&amp;$.active++===0&amp;&amp;triggerGlobal(a,null,&quot;ajaxStart&quot;)}function ajaxStop(a){a.global&amp;&amp;!--$.active&amp;&amp;triggerGlobal(a,null,&quot;ajaxStop&quot;)}function ajaxBeforeSend(a,b){var c=b.context;if(b.beforeSend.call(c,a,b)===!1||triggerGlobal(b,c,&quot;ajaxBeforeSend&quot;,[a,b])===!1)return!1;triggerGlobal(b,c,&quot;ajaxSend&quot;,[a,b])}function ajaxSuccess(a,b,c){var d=c.context,e=&quot;success&quot;;c.success.call(d,a,e,b),triggerGlobal(c,d,&quot;ajaxSuccess&quot;,[b,c,a]),ajaxComplete(e,b,c)}function ajaxError(a,b,c,d){var e=d.context;d.error.call(e,c,b,a),triggerGlobal(d,e,&quot;ajaxError&quot;,[c,d,a]),ajaxComplete(b,c,d)}function ajaxComplete(a,b,c){var d=c.context;c.complete.call(d,b,a),triggerGlobal(c,d,&quot;ajaxComplete&quot;,[b,c]),ajaxStop(c)}function empty(){}function mimeToDataType(a){return a&amp;&amp;(a==htmlType?&quot;html&quot;:a==jsonType?&quot;json&quot;:scriptTypeRE.test(a)?&quot;script&quot;:xmlTypeRE.test(a)&amp;&amp;&quot;xml&quot;)||&quot;text&quot;}function appendQuery(a,b){return(a+&quot;&amp;&quot;+b).replace(/[&amp;?]{1,2}/,&quot;?&quot;)}function serializeData(a){isObject(a.data)&amp;&amp;(a.data=$.param(a.data)),a.data&amp;&amp;(!a.type||a.type.toUpperCase()==&quot;GET&quot;)&amp;&amp;(a.url=appendQuery(a.url,a.data))}function serialize(a,b,c,d){var e=$.isArray(b);$.each(b,function(b,f){d&amp;&amp;(b=c?d:d+&quot;[&quot;+(e?&quot;&quot;:b)+&quot;]&quot;),!d&amp;&amp;e?a.add(f.name,f.value):(c?$.isArray(f):isObject(f))?serialize(a,f,c,b):a.add(b,f)})}var jsonpID=0,isObject=$.isObject,document=window.document,key,name,rscript=/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,scriptTypeRE=/^(?:text|application)\/javascript/i,xmlTypeRE=/^(?:text|application)\/xml/i,jsonType=&quot;application/json&quot;,htmlType=&quot;text/html&quot;,blankRE=/^\s*$/;$.active=0,$.ajaxJSONP=function(a){var b=&quot;jsonp&quot;+ ++jsonpID,c=document.createElement(&quot;script&quot;),d=function(){$(c).remove(),b in window&amp;&amp;(window[b]=empty),ajaxComplete(&quot;abort&quot;,e,a)},e={abort:d},f;return a.error&amp;&amp;(c.onerror=function(){e.abort(),a.error()}),window[b]=function(d){clearTimeout(f),$(c).remove(),delete window[b],ajaxSuccess(d,e,a)},serializeData(a),c.src=a.url.replace(/=\?/,&quot;=&quot;+b),$(&quot;head&quot;).append(c),a.timeout&gt;0&amp;&amp;(f=setTimeout(function(){e.abort(),ajaxComplete(&quot;timeout&quot;,e,a)},a.timeout)),e},$.ajaxSettings={type:&quot;GET&quot;,beforeSend:empty,success:empty,error:empty,complete:empty,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:&quot;text/javascript, application/javascript&quot;,json:jsonType,xml:&quot;application/xml, text/xml&quot;,html:htmlType,text:&quot;text/plain&quot;},crossDomain:!1,timeout:0},$.ajax=function(options){var settings=$.extend({},options||{});for(key in $.ajaxSettings)settings[key]===undefined&amp;&amp;(settings[key]=$.ajaxSettings[key]);ajaxStart(settings),settings.crossDomain||(settings.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(settings.url)&amp;&amp;RegExp.$2!=window.location.host);var dataType=settings.dataType,hasPlaceholder=/=\?/.test(settings.url);if(dataType==&quot;jsonp&quot;||hasPlaceholder)return hasPlaceholder||(settings.url=appendQuery(settings.url,&quot;callback=?&quot;)),$.ajaxJSONP(settings);settings.url||(settings.url=window.location.toString()),serializeData(settings);var mime=settings.accepts[dataType],baseHeaders={},protocol=/^([\w-]+:)\/\//.test(settings.url)?RegExp.$1:window.location.protocol,xhr=$.ajaxSettings.xhr(),abortTimeout;settings.crossDomain||(baseHeaders[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;),mime&amp;&amp;(baseHeaders.Accept=mime,mime.indexOf(&quot;,&quot;)&gt;-1&amp;&amp;(mime=mime.split(&quot;,&quot;,2)[0]),xhr.overrideMimeType&amp;&amp;xhr.overrideMimeType(mime));if(settings.contentType||settings.data&amp;&amp;settings.type.toUpperCase()!=&quot;GET&quot;)baseHeaders[&quot;Content-Type&quot;]=settings.contentType||&quot;application/x-www-form-urlencoded&quot;;settings.headers=$.extend(baseHeaders,settings.headers||{}),xhr.onreadystatechange=function(){if(xhr.readyState==4){clearTimeout(abortTimeout);var result,error=!1;if(xhr.status&gt;=200&amp;&amp;xhr.status&lt;300||xhr.status==304||xhr.status==0&amp;&amp;protocol==&quot;file:&quot;){dataType=dataType||mimeToDataType(xhr.getResponseHeader(&quot;content-type&quot;)),result=xhr.responseText;try{dataType==&quot;script&quot;?(1,eval)(result):dataType==&quot;xml&quot;?result=xhr.responseXML:dataType==&quot;json&quot;&amp;&amp;(result=blankRE.test(result)?null:JSON.parse(result))}catch(e){error=e}error?ajaxError(error,&quot;parsererror&quot;,xhr,settings):ajaxSuccess(result,xhr,settings)}else ajaxError(null,&quot;error&quot;,xhr,settings)}};var async=&quot;async&quot;in settings?settings.async:!0;xhr.open(settings.type,settings.url,async);for(name in settings.headers)xhr.setRequestHeader(name,settings.headers[name]);return ajaxBeforeSend(xhr,settings)===!1?(xhr.abort(),!1):(settings.timeout&gt;0&amp;&amp;(abortTimeout=setTimeout(function(){xhr.onreadystatechange=empty,xhr.abort(),ajaxError(null,&quot;timeout&quot;,xhr,settings)},settings.timeout)),xhr.send(settings.data?settings.data:null),xhr)},$.get=function(a,b){return $.ajax({url:a,success:b})},$.post=function(a,b,c,d){return $.isFunction(b)&amp;&amp;(d=d||c,c=b,b=null),$.ajax({type:&quot;POST&quot;,url:a,data:b,success:c,dataType:d})},$.getJSON=function(a,b){return $.ajax({url:a,success:b,dataType:&quot;json&quot;})},$.fn.load=function(a,b){if(!this.length)return this;var c=this,d=a.split(/\s/),e;return d.length&gt;1&amp;&amp;(a=d[0],e=d[1]),$.get(a,function(a){c.html(e?$(document.createElement(&quot;div&quot;)).html(a.replace(rscript,&quot;&quot;)).find(e).html():a),b&amp;&amp;b.call(c)}),this};var escape=encodeURIComponent;$.param=function(a,b){var c=[];return c.add=function(a,b){this.push(escape(a)+&quot;=&quot;+escape(b))},serialize(c,a,b),c.join(&quot;&amp;&quot;).replace(&quot;%20&quot;,&quot;+&quot;)}}(Zepto),function(a){a.fn.serializeArray=function(){var b=[],c;return a(Array.prototype.slice.call(this.get(0).elements)).each(function(){c=a(this);var d=c.attr(&quot;type&quot;);this.nodeName.toLowerCase()!=&quot;fieldset&quot;&amp;&amp;!this.disabled&amp;&amp;d!=&quot;submit&quot;&amp;&amp;d!=&quot;reset&quot;&amp;&amp;d!=&quot;button&quot;&amp;&amp;(d!=&quot;radio&quot;&amp;&amp;d!=&quot;checkbox&quot;||this.checked)&amp;&amp;b.push({name:c.attr(&quot;name&quot;),value:c.val()})}),b},a.fn.serialize=function(){var a=[];return this.serializeArray().forEach(function(b){a.push(encodeURIComponent(b.name)+&quot;=&quot;+encodeURIComponent(b.value))}),a.join(&quot;&amp;&quot;)},a.fn.submit=function(b){if(b)this.bind(&quot;submit&quot;,b);else if(this.length){var c=a.Event(&quot;submit&quot;);this.eq(0).trigger(c),c.defaultPrevented||this.get(0).submit()}return this}}(Zepto),function(a){function d(a){return&quot;tagName&quot;in a?a:a.parentNode}function e(a,b,c,d){var e=Math.abs(a-b),f=Math.abs(c-d);return e&gt;=f?a-b&gt;0?&quot;Left&quot;:&quot;Right&quot;:c-d&gt;0?&quot;Up&quot;:&quot;Down&quot;}function h(){g=null,b.last&amp;&amp;(b.el.trigger(&quot;longTap&quot;),b={})}function i(){g&amp;&amp;clearTimeout(g),g=null}var b={},c,f=750,g;a(document).ready(function(){var j,k;a(document.body).bind(&quot;touchstart&quot;,function(e){j=Date.now(),k=j-(b.last||j),b.el=a(d(e.touches[0].target)),c&amp;&amp;clearTimeout(c),b.x1=e.touches[0].pageX,b.y1=e.touches[0].pageY,k&gt;0&amp;&amp;k&lt;=250&amp;&amp;(b.isDoubleTap=!0),b.last=j,g=setTimeout(h,f)}).bind(&quot;touchmove&quot;,function(a){i(),b.x2=a.touches[0].pageX,b.y2=a.touches[0].pageY}).bind(&quot;touchend&quot;,function(a){i(),b.isDoubleTap?(b.el.trigger(&quot;doubleTap&quot;),b={}):b.x2&amp;&amp;Math.abs(b.x1-b.x2)&gt;30||b.y2&amp;&amp;Math.abs(b.y1-b.y2)&gt;30?(b.el.trigger(&quot;swipe&quot;)&amp;&amp;b.el.trigger(&quot;swipe&quot;+e(b.x1,b.x2,b.y1,b.y2)),b={}):&quot;last&quot;in b&amp;&amp;(b.el.trigger(&quot;tap&quot;),c=setTimeout(function(){c=null,b.el.trigger(&quot;singleTap&quot;),b={}},250))}).bind(&quot;touchcancel&quot;,function(){c&amp;&amp;clearTimeout(c),g&amp;&amp;clearTimeout(g),g=c=null,b={}})}),[&quot;swipe&quot;,&quot;swipeLeft&quot;,&quot;swipeRight&quot;,&quot;swipeUp&quot;,&quot;swipeDown&quot;,&quot;doubleTap&quot;,&quot;tap&quot;,&quot;singleTap&quot;,&quot;longTap&quot;].forEach(function(b){a.fn[b]=function(a){return this.bind(b,a)}})}(Zepto);</div>
            </td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2013 <span title="0.05172s from github-fe110-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
          <div class="suggester-container">
              <div class="suggester fullscreen-suggester js-navigation-container" id="fullscreen_suggester"
                 data-url="/ccoenraets/mobile-ui-patterns/suggestions/commit">
              </div>
          </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped leftwards" title="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped leftwards"
      title="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

